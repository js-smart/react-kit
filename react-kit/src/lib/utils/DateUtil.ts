import { format, isAfter as dateFnsIsAfter, parse, parseISO, toDate } from 'date-fns';
import { SystemConfig } from '../constants/AppConstants';

const APP_DATE_FORMAT = SystemConfig.SYSTEM_DATE_FORMAT;
const APP_DATE_TIME_FORMAT = SystemConfig.SYSTEM_DATE_TIME_FORMAT;

// --- Format to App display (date/time strings for UI) ---

/**
 * Format date to App Date Time Format
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const formatToAppDateTime = (date: Date | string | undefined): string => {
	if (!date) {
		return '';
	}
	const d = typeof date === 'string' ? parseISO(date) : date;
	return format(d, APP_DATE_TIME_FORMAT);
};

/**
 * Format date to App Date Format
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const formatToAppDate = (date: Date | string | undefined): string => {
	if (!date) {
		return '';
	}
	const d = typeof date === 'string' ? parseISO(date) : date;
	return format(d, APP_DATE_FORMAT);
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
	return format(parseISO(date), APP_DATE_FORMAT);
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
	const d = typeof date === 'string' ? parseISO(date) : date;
	return format(d, SystemConfig.ISO_DATE_FORMAT);
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
	// Parse as local date (YYYY-MM-DD) to avoid UTC date shift
	return parse(date, 'yyyy-MM-dd', new Date(0));
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
	return toDate(Number(date));
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
	const d1 = typeof date1 === 'string' ? parseISO(date1) : date1;
	const d2 = typeof date2 === 'string' ? parseISO(date2) : date2;
	return dateFnsIsAfter(d1, d2);
};
