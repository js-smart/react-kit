import { FetchError, FetchResponse, RequestConfig } from './FetchClientTypes';
import { createFormattedError, getDefaultErrorMessage, parseResponseData } from './FetchClientUtils';

/**
 * Build URL with query parameters
 * @param baseURL Base URL
 * @param url Endpoint URL
 * @param params Query parameters
 * @returns Complete URL with query parameters
 */
const buildURL = (
  baseURL: string,
  url: string,
  params?: Record<string, string | number | boolean>,
): string => {
  const fullURL = url.startsWith("http") ? url : `${baseURL}${url}`;

  if (!params) return fullURL;

  const urlObj = new URL(fullURL);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      urlObj.searchParams.append(key, String(value));
    }
  });

  return urlObj.toString();
};

/**
 * Reusable fetch client class
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.19
 */
class FetchInstance {
  private readonly baseURL: string;
  private nextInterceptorId = 0;
  private requestInterceptors = new Map<
    number,
    (config: RequestConfig) => RequestConfig | Promise<RequestConfig>
  >();
  private responseInterceptors = new Map<
    number,
    {
      success?: (response: FetchResponse<unknown>) => FetchResponse<unknown> | Promise<FetchResponse<unknown>>;
      error?: (error: FetchError) => FetchError | Promise<FetchError> | void | Promise<void>;
    }
  >();
  /**
   * Add request interceptor
   */
  interceptors = {
    request: {
      use: (interceptor: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>) => {
        const id = this.nextInterceptorId++;
        this.requestInterceptors.set(id, interceptor);
        return id;
      },
      eject: (id: number) => {
        this.requestInterceptors.delete(id);
      },
    },
    response: {
      use: (
        successInterceptor?: (
          response: FetchResponse<unknown>,
        ) => FetchResponse<unknown> | Promise<FetchResponse<unknown>>,
        errorInterceptor?: (
          error: FetchError,
        ) => FetchError | Promise<FetchError> | void | Promise<void>,
      ) => {
        const id = this.nextInterceptorId++;
        this.responseInterceptors.set(id, {
          success: successInterceptor,
          error: errorInterceptor,
        });
        return id;
      },
      eject: (id: number) => {
        this.responseInterceptors.delete(id);
      },
    },
  };

  constructor(baseURL: string = import.meta.env.VITE_REACT_APP_BASE_URL) {
    this.baseURL = baseURL;
  }

  /**
   * GET request
   */
  async get<T = unknown>(
    url: string,
    config?: Omit<RequestConfig, "method" | "url">,
  ): Promise<FetchResponse<T>> {
    return this.executeRequest({ ...config, method: "GET", url });
  }

  /**
   * POST request
   */
  async post<T = unknown>(
    url: string,
    data?: unknown,
    config?: Omit<RequestConfig, "method" | "url" | "body">,
  ): Promise<FetchResponse<T>> {
    const body = data === undefined ? undefined : JSON.stringify(data);
    return this.executeRequest({ ...config, method: "POST", url, body });
  }

  /**
   * PUT request
   */
  async put<T = unknown>(
    url: string,
    data?: unknown,
    config?: Omit<RequestConfig, "method" | "url" | "body">,
  ): Promise<FetchResponse<T>> {
    const body = data === undefined ? undefined : JSON.stringify(data);
    return this.executeRequest({ ...config, method: "PUT", url, body });
  }

  /**
   * DELETE request
   */
  async delete<T = unknown>(
    url: string,
    config?: Omit<RequestConfig, "method" | "url">,
  ): Promise<FetchResponse<T>> {
    return this.executeRequest({ ...config, method: "DELETE", url });
  }

  /**
   * PATCH request
   */
  async patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: Omit<RequestConfig, "method" | "url" | "body">,
  ): Promise<FetchResponse<T>> {
    const body = data === undefined ? undefined : JSON.stringify(data);
    return this.executeRequest<T>({ ...config, method: "PATCH", url, body });
  }

  /**
   * Generic request method
   */
  async request<T = unknown>(config: RequestConfig): Promise<FetchResponse<T>> {
    return this.executeRequest(config);
  }

  /**
   * Execute request with interceptors
   */
  private async executeRequest<T>(config: RequestConfig): Promise<FetchResponse<T>> {
    // Apply request interceptors
    let processedConfig = config;
    for (const interceptor of this.requestInterceptors.values()) {
      processedConfig = await interceptor(processedConfig);
    }

    const { url, params, baseURL, ...fetchConfig } = processedConfig;
    const fullURL = buildURL(baseURL ?? this.baseURL, url || "", params);

    let response: Response;

    try {
      response = await fetch(fullURL, fetchConfig);
    } catch (error) {
      throw await this.applyErrorInterceptors(
        createFormattedError(
          error as Error,
          0,
          'Network error. Please check your connection and try again.',
        ),
      );
    }

    if (!response.ok) {
      throw await this.applyErrorInterceptors(
        createFormattedError(
          new Error(response.statusText || getDefaultErrorMessage(response.status)),
          response.status,
          response.statusText || getDefaultErrorMessage(response.status),
          response,
        ),
      );
    }

    const data = await parseResponseData(response);

    const fetchResponse: FetchResponse<T> = {
      data: data as T,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config: processedConfig,
    };

    // Apply response interceptors
    let processedResponse = fetchResponse;
    for (const interceptor of this.responseInterceptors.values()) {
      if (!interceptor.success) {
        continue;
      }

      processedResponse = (await interceptor.success(processedResponse)) as FetchResponse<T>;
    }

    return processedResponse;
  }

  private async applyErrorInterceptors(error: FetchError): Promise<FetchError> {
    let processedError = error;

    for (const interceptor of this.responseInterceptors.values()) {
      if (!interceptor.error) {
        continue;
      }

      try {
        const result = await interceptor.error(processedError);
        if (result !== undefined) {
          processedError = result;
        }
      } catch (interceptorError) {
        if (interceptorError instanceof Error && 'statusCode' in interceptorError) {
          processedError = interceptorError as FetchError;
          continue;
        }

        const normalizedError =
          interceptorError instanceof Error ? interceptorError : new Error('Unexpected interceptor failure.');

        processedError = createFormattedError(
          normalizedError,
          processedError.statusCode,
          normalizedError.message || processedError.message,
          processedError.response,
          processedError.request,
        );
      }
    }

    return processedError;
  }
}

/**
 * Create fetch client instance
 */
const fetchInstance = new FetchInstance();

/**
 * Callable fetch client that defaults to GET requests
 */
export const FetchClient = Object.assign(
  async <T = unknown>(url: string, config?: Omit<RequestConfig, "method" | "url">): Promise<T> => {
    const response = await fetchInstance.request<T>({ ...config, method: "GET", url });
    return response.data;
  },
  {
    get: fetchInstance.get.bind(fetchInstance),
    post: fetchInstance.post.bind(fetchInstance),
    put: fetchInstance.put.bind(fetchInstance),
    delete: fetchInstance.delete.bind(fetchInstance),
    patch: fetchInstance.patch.bind(fetchInstance),
    request: fetchInstance.request.bind(fetchInstance),
    interceptors: fetchInstance.interceptors,
  },
);

// Export the client instance for direct use
export default FetchClient;
