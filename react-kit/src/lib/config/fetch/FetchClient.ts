import { FetchError, FetchResponse, RequestConfig } from './FetchClientTypes';
import { createFormattedError } from './FetchInterceptor';

/**
 * Build URL with query parameters
 * @param baseURL Base URL
 * @param url Endpoint URL
 * @param params Query parameters
 * @returns Complete URL with query parameters
 */
const buildURL = (baseURL: string, url: string, params?: Record<string, any>): string => {
	const fullURL = url.startsWith('http') ? url : `${baseURL}${url}`;

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
 * Parse response data based on content type
 * @param response Fetch response
 * @returns Parsed data
 */
const parseResponseData = async (response: Response): Promise<any> => {
	const contentType = response.headers.get('content-type');

	if (contentType?.includes('application/json')) {
		return await response.json();
	} else if (contentType?.includes('text/')) {
		return await response.text();
	} else {
		return await response.blob();
	}
};

/**
 * Reusable fetch client class
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.19
 */
class FetchInstance {
	private readonly baseURL: string;
	private requestInterceptors: Array<(config: RequestConfig) => RequestConfig | Promise<RequestConfig>> = [];
	private responseInterceptors: Array<(response: FetchResponse) => FetchResponse | Promise<FetchResponse>> = [];
	private errorInterceptors: Array<(error: FetchError) => FetchError | Promise<FetchError> | void | Promise<void>> = [];
	/**
	 * Add request interceptor
	 */
	interceptors = {
		request: {
			use: (interceptor: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>) => {
				this.requestInterceptors.push(interceptor);
			},
		},
		response: {
			use: (
				successInterceptor?: (response: FetchResponse) => FetchResponse | Promise<FetchResponse>,
				errorInterceptor?: (error: FetchError) => FetchError | Promise<FetchError> | void | Promise<void>
			) => {
				if (successInterceptor) {
					this.responseInterceptors.push(successInterceptor);
				}
				if (errorInterceptor) {
					this.errorInterceptors.push(errorInterceptor);
				}
			},
		},
	};

	constructor(baseURL: string = import.meta.env.VITE_REACT_APP_BASE_URL) {
		this.baseURL = baseURL;
	}

	/**
	 * GET request
	 */
	async get<T = any>(url: string, config?: Omit<RequestConfig, 'method' | 'url'>): Promise<FetchResponse<T>> {
		return this.executeRequest({ ...config, method: 'GET', url });
	}

	/**
	 * POST request
	 */
	async post<T = any>(url: string, data?: any, config?: Omit<RequestConfig, 'method' | 'url' | 'body'>): Promise<FetchResponse<T>> {
		const body = data ? JSON.stringify(data) : undefined;
		return this.executeRequest({ ...config, method: 'POST', url, body });
	}

	/**
	 * PUT request
	 */
	async put<T = any>(url: string, data?: any, config?: Omit<RequestConfig, 'method' | 'url' | 'body'>): Promise<FetchResponse<T>> {
		const body = data ? JSON.stringify(data) : undefined;
		return this.executeRequest({ ...config, method: 'PUT', url, body });
	}

	/**
	 * DELETE request
	 */
	async delete<T = any>(url: string, config?: Omit<RequestConfig, 'method' | 'url'>): Promise<FetchResponse<T>> {
		return this.executeRequest({ ...config, method: 'DELETE', url });
	}

	/**
	 * PATCH request
	 */
	async patch<T = any>(url: string, data?: any, config?: Omit<RequestConfig, 'method' | 'url' | 'body'>): Promise<FetchResponse<T>> {
		const body = data ? JSON.stringify(data) : undefined;
		return this.executeRequest<T>({ ...config, method: 'PATCH', url, body });
	}

	/**
	 * Generic request method
	 */
	async request<T = any>(config: RequestConfig): Promise<FetchResponse<T>> {
		return this.executeRequest(config);
	}

	/**
	 * Execute request with interceptors
	 */
	private async executeRequest<T>(config: RequestConfig): Promise<FetchResponse<T>> {
		// Apply request interceptors
		let processedConfig = config;
		for (const interceptor of this.requestInterceptors) {
			processedConfig = await interceptor(processedConfig);
		}

		const { url, params, ...fetchConfig } = processedConfig;
		const fullURL = buildURL(this.baseURL, url || '', params);

		try {
			const response = await fetch(fullURL, fetchConfig);
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
			for (const interceptor of this.responseInterceptors) {
				processedResponse = await interceptor(processedResponse);
			}

			return processedResponse;
		} catch (error) {
			const fetchError = createFormattedError(error as Error, 0, 'Network error. Please check your connection and try again.');

			// Apply error interceptors
			let processedError = fetchError;
			for (const interceptor of this.errorInterceptors) {
				const result = await interceptor(processedError);
				if (result !== undefined) {
					processedError = result;
				}
			}

			throw processedError;
		}
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
	async <T = any>(url: string, config?: Omit<RequestConfig, 'method' | 'url'>): Promise<FetchResponse<T>> => {
		return fetchInstance.get(url, config);
	},
	fetchInstance
);

// Export the client instance for direct use
export default FetchClient;
