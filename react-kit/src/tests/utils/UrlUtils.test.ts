import { isEncoded } from '../../lib/utils/UrlUtils';

describe('isEncoded', () => {
	it('should return true for an encoded URL', () => {
		expect(isEncoded('https%3A%2F%2Fexample.com')).toBe(true);
	});

	it('should return false for a non-encoded URL', () => {
		expect(isEncoded('https://example.com')).toBe(false);
	});

	it('should return false for an improperly encoded URL', () => {
		expect(isEncoded('%E0%A4%A')).toBe(false);
	});

	it('should return false for an empty string', () => {
		expect(isEncoded('')).toBe(false);
	});
});
