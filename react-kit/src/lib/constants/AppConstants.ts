/**
 * Global System settings used in the application
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export enum SystemConfig {
	SYSTEM_TIME_ZONE = 'America/New_York',
	SYSTEM_LOCALE = 'en-US',
	SYSTEM_DATE_FORMAT = 'MM/dd/yyyy',
	SYSTEM_DATE_TIME_FORMAT = 'MM/dd/yyyy hh:mm:ss a',
	ISO_DATE_FORMAT = 'yyyy-MM-dd',
}

/**
 * Temporal Date Format Options
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const TEMPORAL_DATE_FORMAT: Intl.DateTimeFormatOptions = {
	month: '2-digit',
	day: '2-digit',
	year: 'numeric',
};

/**
 * Temporal Date Time Format Options
 *
 * @author Pavan Kumar Jadda
 * @since 1.10.2
 */
export const TEMPORAL_DATE_TIME_FORMAT: Intl.DateTimeFormatOptions = {
	...TEMPORAL_DATE_FORMAT,
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hour12: true,
};
