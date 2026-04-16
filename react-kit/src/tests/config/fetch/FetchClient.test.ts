import FetchClient from '../../../lib/config/fetch/FetchClient';
import { FetchError } from '../../../lib/config/fetch/FetchClientTypes';
import { createFormattedError, parseResponseData } from '../../../lib/config/fetch/FetchClientUtils';

describe('FetchClient', () => {
	const responseInterceptorIds: number[] = [];

	afterEach(() => {
		for (const id of responseInterceptorIds.splice(0)) {
			FetchClient.interceptors.response.eject(id);
		}

		vi.unstubAllGlobals();
		vi.restoreAllMocks();
	});

	it('rejects non-ok responses and lets error interceptors reshape the error', async () => {
		const fetchMock = vi.fn().mockResolvedValue(
			new Response(JSON.stringify({ message: 'Missing resource' }), {
				status: 404,
				statusText: 'Not Found',
				headers: {
					'Content-Type': 'application/json',
				},
			})
		);
		vi.stubGlobal('fetch', fetchMock);

		const interceptorId = FetchClient.interceptors.response.use(undefined, async (error: FetchError) => {
			const payload = error.response ? ((await parseResponseData(error.response)) as { message?: string }) : undefined;

			return createFormattedError(error, error.statusCode, payload?.message ?? error.message, error.response);
		});
		responseInterceptorIds.push(interceptorId);

		await expect(FetchClient.get('/missing', { baseURL: 'https://api.example.com' })).rejects.toMatchObject({
			statusCode: 404,
			message: 'Missing resource',
		});

		expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/missing', { method: 'GET' });
	});

	it('uses request baseURL overrides and preserves falsy JSON bodies', async () => {
		const fetchMock = vi.fn().mockResolvedValue(
			new Response(null, {
				status: 204,
			})
		);
		vi.stubGlobal('fetch', fetchMock);

		const response = await FetchClient.post('/flags', false, { baseURL: 'https://api.example.com' });

		expect(fetchMock).toHaveBeenCalledWith(
			'https://api.example.com/flags',
			expect.objectContaining({
				method: 'POST',
				body: 'false',
			})
		);
		expect(response.data).toBeUndefined();
	});
});
