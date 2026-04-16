import { useOidc, useOidcIdToken } from '@axa-fr/react-oidc';
import { ReactNode, useEffect } from 'react';
import {
	HTTP_401,
	HTTP_403,
	HTTP_404,
	HTTP_405,
	HTTP_409,
} from '../../constants/HttpConstants';
import FetchClient from './FetchClient';
import { ErrorResponse, FetchError, FetchResponse } from './FetchClientTypes';
import { createFormattedError, getDefaultErrorMessage, parseResponseData } from './FetchClientUtils';

/**
 * Adds error handling interceptor
 *
 * @author Pavan Kumar Jadda
 * @since 1.1.1
 */
export const FetchInterceptor = (props: { children: ReactNode }) => {
	const { idToken } = useOidcIdToken();
	const { login } = useOidc();

	useEffect(() => {
		const requestInterceptorId = FetchClient.interceptors.request.use((config) => {
			// Attach the bearer token to the request header if available.
			if (idToken) {
				config.headers = {
					...config.headers,
					Authorization: `Bearer ${idToken}`,
				};
			}

			// Set default headers.
			config.headers = {
				'Content-Type': 'application/json',
				...config.headers,
			};

			return config;
		});

		const responseInterceptorId = FetchClient.interceptors.response.use(
			(response: FetchResponse) => response,
			async (error: FetchError) => {
				const statusCode = error.statusCode;
				const errorResponse = error.response
					? ((await parseResponseData(error.response.clone())) as ErrorResponse | null)
					: null;
				const message = errorResponse?.message || error.message || getDefaultErrorMessage(statusCode || 0);

				// Handle 401 Unauthorized - redirect to login.
				if (statusCode === HTTP_401) {
					await login();
					return createFormattedError(error, HTTP_401, message, error.response);
				}

				// Handle 403 Forbidden.
				if (statusCode === HTTP_403) {
					console.error('Access Forbidden:', message);
					return createFormattedError(error, HTTP_403, message, error.response);
				}

				// Handle 404 Not Found.
				if (statusCode === HTTP_404) {
					console.error('Resource Not Found:', message);
					return createFormattedError(error, HTTP_404, message, error.response);
				}

				// Handle 405 Method Not Allowed.
				if (statusCode === HTTP_405) {
					return createFormattedError(error, HTTP_405, message, error.response);
				}

				// Handle 409 Conflict.
				if (statusCode === HTTP_409) {
					return createFormattedError(error, HTTP_409, message, error.response);
				}

				// Handle 5xx Server Errors.
				if (statusCode >= 500 && statusCode <= 599) {
					console.error(`Server Error (${statusCode}):`, message);
					return createFormattedError(error, statusCode, message, error.response);
				}

				// Handle network errors (no response).
				if (!error.response) {
					console.error('Network Error:', error.message);
					return createFormattedError(error, 0, 'Network error. Please check your connection and try again.');
				}

				// Handle any other errors.
				console.error(`HTTP Error (${statusCode}):`, message);
				return createFormattedError(error, statusCode || 0, message, error.response);
			}
		);

		return () => {
			FetchClient.interceptors.request.eject(requestInterceptorId);
			FetchClient.interceptors.response.eject(responseInterceptorId);
		};
	}, [idToken, login]);

	return props.children;
};
