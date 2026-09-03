import {
	formatToAppDateTime,
	formatToAppDate,
	formatIsoToAppDate,
	formatOldDateToIsoString,
	formatOldDateToIsoDate,
	parseIsoDate,
	formatUnixTimeToOldDate,
	isAfter,
} from '../../lib/utils/DateUtil';

describe('DateUtil', () => {
	// --- Null / undefined guards ---

	describe('null/undefined guards', () => {
		it('formatToAppDateTime returns empty string for undefined', () => {
			expect(formatToAppDateTime(undefined)).toBe('');
		});

		it('formatToAppDate returns empty string for undefined', () => {
			expect(formatToAppDate(undefined)).toBe('');
		});

		it('formatIsoToAppDate returns empty string for undefined', () => {
			expect(formatIsoToAppDate(undefined)).toBe('');
		});

		it('formatOldDateToIsoString returns empty string for null', () => {
			expect(formatOldDateToIsoString(null)).toBe('');
		});

		it('formatOldDateToIsoString returns empty string for undefined', () => {
			expect(formatOldDateToIsoString(undefined)).toBe('');
		});

		it('formatOldDateToIsoDate returns empty string for undefined', () => {
			expect(formatOldDateToIsoDate(undefined)).toBe('');
		});

		it('parseIsoDate returns null for null', () => {
			expect(parseIsoDate(null)).toBeNull();
		});

		it('parseIsoDate returns null for undefined', () => {
			expect(parseIsoDate(undefined)).toBeNull();
		});

		it('formatUnixTimeToOldDate returns undefined for undefined', () => {
			expect(formatUnixTimeToOldDate(undefined)).toBeUndefined();
		});

		it('isAfter returns false when date1 is undefined', () => {
			expect(isAfter(undefined, new Date())).toBe(false);
		});

		it('isAfter returns false when date2 is undefined', () => {
			expect(isAfter(new Date(), undefined)).toBe(false);
		});
	});

	// --- formatIsoToAppDate ---

	describe('formatIsoToAppDate', () => {
		it('formats ISO date string to en-US locale date', () => {
			expect(formatIsoToAppDate('2024-01-15')).toBe('01/15/2024');
		});

		it('formats another ISO date', () => {
			expect(formatIsoToAppDate('2023-12-25')).toBe('12/25/2023');
		});
	});

	// --- formatOldDateToIsoString / formatOldDateToIsoDate ---

	describe('formatOldDateToIsoString', () => {
		it('formats a Date object to ISO string', () => {
			const date = new Date(2024, 0, 15, 12, 0, 0); // Jan 15, 2024 noon local
			expect(formatOldDateToIsoString(date)).toBe('2024-01-15');
		});

		it('formatOldDateToIsoDate delegates to formatOldDateToIsoString', () => {
			const date = new Date(2024, 5, 20, 12, 0, 0);
			expect(formatOldDateToIsoDate(date)).toBe(formatOldDateToIsoString(date));
		});
	});

	// --- parseIsoDate ---

	describe('parseIsoDate', () => {
		it('parses ISO date to local midnight Date', () => {
			const result = parseIsoDate('2024-01-15');
			expect(result).not.toBeNull();
			expect(result!.getFullYear()).toBe(2024);
			expect(result!.getMonth()).toBe(0); // January
			expect(result!.getDate()).toBe(15);
			expect(result!.getHours()).toBe(0);
		});
	});

	// --- formatUnixTimeToOldDate ---

	describe('formatUnixTimeToOldDate', () => {
		it('converts unix milliseconds to Date', () => {
			const ms = Date.UTC(2024, 0, 15, 12, 0, 0);
			const result = formatUnixTimeToOldDate(ms);
			expect(result).toBeDefined();
			expect(result).toBeInstanceOf(Date);
			// Verify the ISO date portion is 2024-01-15
			expect(result!.toISOString().startsWith('2024-01-15')).toBe(true);
		});

		it('accepts string unix time', () => {
			const ms = String(Date.UTC(2024, 0, 15, 12, 0, 0));
			const result = formatUnixTimeToOldDate(ms);
			expect(result).toBeDefined();
			expect(result!.toISOString().startsWith('2024-01-15')).toBe(true);
		});
	});

	// --- isAfter ---

	describe('isAfter', () => {
		it('returns true when date1 is after date2', () => {
			const later = new Date(2024, 5, 1);
			const earlier = new Date(2024, 0, 1);
			expect(isAfter(later, earlier)).toBe(true);
		});

		it('returns false when date1 is before date2', () => {
			const earlier = new Date(2024, 0, 1);
			const later = new Date(2024, 5, 1);
			expect(isAfter(earlier, later)).toBe(false);
		});

		it('returns false when dates are equal', () => {
			const date = '2024-06-01T00:00:00Z';
			expect(isAfter(date, date)).toBe(false);
		});

		it('works with ISO string inputs', () => {
			expect(isAfter('2024-06-01T00:00:00Z', '2024-01-01T00:00:00Z')).toBe(true);
		});
	});
});
