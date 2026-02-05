import { Temporal } from '@js-temporal/polyfill';
import { SystemConfig, TEMPORAL_DATE_FORMAT, TEMPORAL_DATE_TIME_FORMAT } from '../constants/AppConstants';

// --- Format to App display (date/time strings for UI) ---

/**
 * Format date using Temporal API to App Date Time Format
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const formatToAppDateTime = (date: Date | string | undefined): string => {
	if (!date) {
		return '';
	}

	const instant = typeof date === 'string' ? Temporal.Instant.from(date) : Temporal.Instant.fromEpochMilliseconds(date.getTime());
	const zonedDateTime = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
	return zonedDateTime.toLocaleString(SystemConfig.SYSTEM_LOCALE, TEMPORAL_DATE_TIME_FORMAT);
};

/**
 * Format date using Temporal API to App Date Format
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const formatToAppDate = (date: Date | string | undefined): string => {
	if (!date) {
		return '';
	}

	const instant = typeof date === 'string' ? Temporal.Instant.from(date) : Temporal.Instant.fromEpochMilliseconds(date.getTime());
	const zonedDateTime = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
	return zonedDateTime.toLocaleString(SystemConfig.SYSTEM_LOCALE, TEMPORAL_DATE_FORMAT);
};

/**
 * Format ISO formatted date to App Date Format
 *
 * @param date - The ISO formatted date to format
 * @returns The formatted date
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const formatIsoToAppDate = (date: string | undefined): string => {
	if (!date) {
		return '';
	}

	return Temporal.PlainDate.from(date).toLocaleString(SystemConfig.SYSTEM_LOCALE, TEMPORAL_DATE_FORMAT);
};

// --- Format to ISO (YYYY-MM-DD) ---

/**
 * Format old date to ISO format date string (YYYY-MM-DD)
 *
 * @param date - The old date to format
 * @returns The formatted date
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const formatOldDateToIsoString = (date: Date | string | undefined | null): string => {
	if (!date) {
		return '';
	}

	const instant = typeof date === 'string' ? Temporal.Instant.from(date) : Temporal.Instant.fromEpochMilliseconds(date.getTime());
	return instant.toZonedDateTimeISO(Temporal.Now.timeZoneId()).toPlainDate().toString();
};

/**
 * Format old date to ISO format date string (YYYY-MM-DD)
 *
 * @param date - The old date to format
 * @returns The formatted date
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.30
 */
export const formatOldDateToIsoDate = (date: Date | string | undefined): string => {
	if (!date) {
		return '';
	}
	return formatOldDateToIsoString(date);
};

// --- Parse / convert to Date ---

/**
 * Parse ISO formatted date to old date object
 *
 * @param date - The ISO formatted date to parse
 * @returns The parsed date
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const parseIsoDate = (date: string | undefined | null): Date | null => {
	if (!date) {
		return null;
	}
	const plainDate = Temporal.PlainDate.from(date);

	// Use local midnight to avoid UTC date shift.
	return new Date(plainDate.year, plainDate.month - 1, plainDate.day);
};

/**
 * Format Unix time to old date object
 *
 * @param date - The Unix time to format
 * @returns The formatted date
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const formatUnixTimeToOldDate = (date: number | string | undefined): Date | undefined => {
	if (!date) {
		return undefined;
	}
	const instant = Temporal.Instant.fromEpochMilliseconds(Number(date));
	return new Date(instant.toZonedDateTimeISO(Temporal.Now.timeZoneId()).toPlainDate().toString());
};

// --- Comparison ---

/**
 * Check if date1 is after date2
 *
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @returns True if date1 is after date2, false otherwise
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const isAfter = (date1: Date | string | undefined, date2: Date | string | undefined): boolean => {
	if (!date1 || !date2) {
		return false;
	}
	const instantA = typeof date1 === 'string' ? Temporal.Instant.from(date1) : Temporal.Instant.fromEpochMilliseconds(date1.getTime());
	const instantB = typeof date2 === 'string' ? Temporal.Instant.from(date2) : Temporal.Instant.fromEpochMilliseconds(date2.getTime());

	// The most readable way:
	return Temporal.Instant.compare(instantA, instantB) > 0;
};
