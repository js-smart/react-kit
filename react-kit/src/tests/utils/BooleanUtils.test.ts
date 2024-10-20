import { parseBoolean } from '../../lib/utils/BooleanUtils';

describe('parseBoolean', () => {
	it('should return true for boolean true', () => {
		expect(parseBoolean(true)).toBe(true);
	});

	it('should return false for boolean false', () => {
		expect(parseBoolean(false)).toBe(false);
	});

	it('should return true for string "true"', () => {
		expect(parseBoolean('true')).toBe(true);
	});

	it('should return false for string "false"', () => {
		expect(parseBoolean('false')).toBe(false);
	});

	it('should return false for null', () => {
		expect(parseBoolean(null)).toBe(false);
	});

	it('should return false for undefined', () => {
		expect(parseBoolean(undefined)).toBe(false);
	});

	it('should return false for an empty string', () => {
		expect(parseBoolean('')).toBe(false);
	});

	it('should return false for any other string', () => {
		expect(parseBoolean('random')).toBe(false);
	});
});
