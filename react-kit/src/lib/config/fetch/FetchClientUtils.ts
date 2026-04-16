import { FetchError } from './FetchClientTypes';

/**
 * Parse response data based on content type.
 */
export const parseResponseData = async (response: Response): Promise<unknown> => {
	const contentType = response.headers.get('content-type');

	if (response.status === 204 || response.status === 205 || response.headers.get('content-length') === '0') {
		return undefined;
	}

	if (contentType?.includes('application/json')) {
		const text = await response.text();

		if (!text) {
			return undefined;
		}

		try {
			return JSON.parse(text);
		} catch {
			return text;
		}
	}

	if (contentType?.includes('text/')) {
		return await response.text();
	}

	return await response.blob();
};

/**
 * Get a default error message based on HTTP status code.
 */
export const getDefaultErrorMessage = (statusCode: number): string => {
	switch (statusCode) {
		case 401:
			return 'Authentication required. Please log in again.';
		case 403:
			return 'Access denied. You do not have permission to access this resource.';
		case 404:
			return 'The requested resource was not found.';
		case 405:
			return 'Method not allowed. This operation is not supported.';
		case 409:
			return 'Conflict. The request conflicts with the current state of the resource.';
		case 500:
			return 'Internal server error. Please try again later.';
		case 501:
			return 'Not implemented. This feature is not available.';
		case 502:
			return 'Bad gateway. The server received an invalid response.';
		case 503:
			return 'Service unavailable. The server is temporarily unavailable.';
		case 504:
			return 'Gateway timeout. The request timed out.';
		case 505:
			return 'HTTP version not supported.';
		default:
			return 'An unexpected error occurred.';
	}
};

/**
 * Creates a formatted error object with additional context.
 */
export const createFormattedError = (
	error: Error,
	statusCode: number,
	message: string,
	response?: Response,
	request?: Request
): FetchError => {
	const formattedError = new Error(message) as FetchError;
	formattedError.statusCode = statusCode;
	formattedError.originalError = error;
	formattedError.response = response;
	formattedError.request = request;
	return formattedError;
};
