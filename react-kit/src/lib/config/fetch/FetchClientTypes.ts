/**
 * Interface for error response structure
 */
export interface ErrorResponse {
	message: string;
	errorCode: string | null;
	status: string;
	statusCode: number;
	timestamp: string;
	errors: any[] | null;
	path: string | null;
}

/**
 * Interface for request configuration
 */
export interface RequestConfig extends RequestInit {
	baseURL?: string;
	url?: string;
	params?: Record<string, any>;
}

/**
 * Interface for response structure
 */
export interface FetchResponse<T = any> {
	data: T;
	status: number;
	statusText: string;
	headers: Headers;
	config: RequestConfig;
}

/**
 * Interface for error structure
 */
export interface FetchError extends Error {
	statusCode: number;
	originalError: Error;
	response?: Response;
	request?: Request;
}
