import { convertToIsoDate, formatDate, setCookieExpirationDate } from '../../lib/utils/DateUtils';
import { format, parseISO } from 'date-fns';
import { SystemConfig } from '../../lib/constants/AppConstants';
import '@testing-library/jest-dom';

describe('DateUtils', () => {
	describe('setCookieExpirationDate', () => {
		it('should set cookie expiration date to 24 hours from now', () => {
			const now = new Date();
			const expectedDate = new Date(now.getTime() + SystemConfig.SYSTEM_COOKIE_TIMEOUT_MILLI_SECONDS);

			const result = setCookieExpirationDate();

			expect(result).toEqual(expectedDate);
		});
	});

	describe('convertToIsoDate', () => {
		it('should convert current date time to ISO date format', () => {
			const currentDateTime = '2023-10-01T12:00:00Z';
			const formattedDate = format(new Date(currentDateTime), SystemConfig.ISO_DATE_FORMAT);

			const result = convertToIsoDate(currentDateTime);

			expect(result).toBe(formattedDate);
		});
	});

	describe('formatDate', () => {
		it('should return an empty string if date is undefined', () => {
			const result = formatDate(undefined, 'yyyy-MM-dd');
			expect(result).toBe('');
		});

		it('should format the date to the new format', () => {
			const date = '2023-10-01T12:00:00Z';
			const newFormat = 'yyyy-MM-dd';
			const parsedDate = parseISO(date);
			const formattedDate = format(parsedDate, newFormat);

			const result = formatDate(date, newFormat);

			expect(result).toBe(formattedDate);
		});
	});
});
