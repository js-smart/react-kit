import { useOidc, useOidcIdToken } from "@axa-fr/react-oidc";
import React from "react";
import {
  HTTP_401,
  HTTP_403,
  HTTP_404,
  HTTP_405,
  HTTP_409,
  HTTP_500,
  HTTP_501,
  HTTP_502,
  HTTP_503,
  HTTP_504,
  HTTP_505,
} from "../../constants/HttpConstants";
import FetchClient from "./FetchClient";
import { ErrorResponse, FetchError, FetchResponse } from "./FetchClientTypes";

/**
 * Adds error handling interceptor
 *
 * @author Pavan Kumar Jadda
 * @since 1.1.1
 */
export const FetchInterceptor = (props: { children: React.JSX.Element }) => {
  const { idToken } = useOidcIdToken();
  const { login } = useOidc();

  // Request interceptor for API calls
  FetchClient.interceptors.request.use((config) => {
    // Attach the bearer token to the request header if available
    if (idToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${idToken}`,
      };
    }

    // Set default headers
    config.headers = {
      "Content-Type": "application/json",
      ...config.headers,
    };

    return config;
  });

  // Response interceptor for API calls
  FetchClient.interceptors.response.use(
    (response: FetchResponse) => response,
    (error: FetchError) => {
      const statusCode = error.statusCode;

      // Handle 401 Unauthorized - redirect to login
      if (statusCode === HTTP_401) {
        login().then((r) => r);
        return;
      }

      // Handle other errors asynchronously
      (async () => {
        // Handle 403 Forbidden
        if (statusCode === HTTP_403) {
          const errorResponse = error.response
            ? ((await parseResponseData(error.response)) as ErrorResponse)
            : null;
          const message = errorResponse?.message || getDefaultErrorMessage(HTTP_403);
          const formattedError = createFormattedError(error, HTTP_403, message, error.response);

          console.error("Access Forbidden:", message);
          return Promise.reject(formattedError);
        }

        // Handle 404 Not Found
        if (statusCode === HTTP_404) {
          const errorResponse = error.response
            ? ((await parseResponseData(error.response)) as ErrorResponse)
            : null;
          const message = errorResponse?.message || getDefaultErrorMessage(HTTP_404);
          const formattedError = createFormattedError(error, HTTP_404, message, error.response);

          console.error("Resource Not Found:", message);
          return Promise.reject(formattedError);
        }

        // Handle 405 Method Not Allowed
        if (statusCode === HTTP_405) {
          const errorResponse = error.response
            ? ((await parseResponseData(error.response)) as ErrorResponse)
            : null;
          const message = errorResponse?.message || getDefaultErrorMessage(HTTP_405);
          const formattedError = createFormattedError(error, HTTP_405, message, error.response);

          return Promise.reject(formattedError);
        }

        // Handle 409 Conflict
        if (statusCode === HTTP_409) {
          const errorResponse = error.response
            ? ((await parseResponseData(error.response)) as ErrorResponse)
            : null;
          const message = errorResponse?.message || getDefaultErrorMessage(HTTP_409);
          const formattedError = createFormattedError(error, HTTP_409, message, error.response);

          return Promise.reject(formattedError);
        }

        // Handle 5xx Server Errors
        if (statusCode && statusCode >= 500 && statusCode <= 599) {
          const errorResponse = error.response
            ? ((await parseResponseData(error.response)) as ErrorResponse)
            : null;
          const message = errorResponse?.message || getDefaultErrorMessage(statusCode);
          const formattedError = createFormattedError(error, statusCode, message, error.response);

          console.error(`Server Error (${statusCode}):`, message);
          return Promise.reject(formattedError);
        }

        // Handle network errors (no response)
        if (!error.response) {
          const networkError = createFormattedError(
            error,
            0,
            "Network error. Please check your connection and try again.",
          );

          console.error("Network Error:", error.message);
          return Promise.reject(networkError);
        }

        // Handle any other errors
        const errorResponse = error.response
          ? ((await parseResponseData(error.response)) as ErrorResponse)
          : null;
        const message =
          errorResponse?.message || error.message || getDefaultErrorMessage(statusCode || 0);
        const formattedError = createFormattedError(
          error,
          statusCode || 0,
          message,
          error.response,
        );

        console.error(`HTTP Error (${statusCode}):`, message);
        return Promise.reject(formattedError);
      })();
    },
  );

  return props.children;
};

/**
 * Parse response data based on content type
 * @param response Fetch response
 * @returns Parsed data
 */
const parseResponseData = async (response: Response): Promise<any> => {
  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    return await response.json();
  } else if (contentType?.includes("text/")) {
    return await response.text();
  } else {
    return await response.blob();
  }
};

/**
 * Get default error message based on HTTP status code
 * @param statusCode HTTP status code
 * @returns Default error message
 */
const getDefaultErrorMessage = (statusCode: number): string => {
  switch (statusCode) {
    case HTTP_401:
      return "Authentication required. Please log in again.";
    case HTTP_403:
      return "Access denied. You do not have permission to access this resource.";
    case HTTP_404:
      return "The requested resource was not found.";
    case HTTP_405:
      return "Method not allowed. This operation is not supported.";
    case HTTP_409:
      return "Conflict. The request conflicts with the current state of the resource.";
    case HTTP_500:
      return "Internal server error. Please try again later.";
    case HTTP_501:
      return "Not implemented. This feature is not available.";
    case HTTP_502:
      return "Bad gateway. The server received an invalid response.";
    case HTTP_503:
      return "Service unavailable. The server is temporarily unavailable.";
    case HTTP_504:
      return "Gateway timeout. The request timed out.";
    case HTTP_505:
      return "HTTP version not supported.";
    default:
      return "An unexpected error occurred.";
  }
};

/**
 * Creates a formatted error object with additional context
 * @param error The original error
 * @param statusCode HTTP status code
 * @param message Error message
 * @param response Response object
 * @param request Request object
 * @returns Formatted error object
 */
export const createFormattedError = (
  error: Error,
  statusCode: number,
  message: string,
  response?: Response,
  request?: Request,
): FetchError => {
  const formattedError = new Error(message) as FetchError;
  formattedError.statusCode = statusCode;
  formattedError.originalError = error;
  formattedError.response = response;
  formattedError.request = request;
  return formattedError;
};
