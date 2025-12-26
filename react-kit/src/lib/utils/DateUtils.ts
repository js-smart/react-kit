/**
 * Utility class for date related operations.
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.6
 */
import { format, parseISO } from "date-fns";
import { SystemConfig } from "../constants/AppConstants";

/**
 * Sets Cookie expiration to 24 hours. By default, server sets 60 minutes expiration but after each API request it extends to another 60 minutes. In client side set 24 hours as expiration date,
 * if the user hasn't refreshed web page in 60 minutes, they would get HTTP 401 isError and redirected to login page. And redirect URL will be stored in cookie
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.30
 */
export const setCookieExpirationDate = (): Date => {
  const utcEpochTime = +new Date();
  return new Date(utcEpochTime + SystemConfig.SYSTEM_COOKIE_TIMEOUT_MILLI_SECONDS);
};

/**
 * Convert String format browser Date Time to ISO Date
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.30
 */
export const convertToIsoDate = (currentDateTime: string): string => {
  return format(new Date(currentDateTime), SystemConfig.ISO_DATE_FORMAT);
};

/**
 * Convert String format browser Date Time to ISO Date
 *
 * @author Pavan Kumar Jadda
 * @since 0.2.30
 */
export const formatDate = (date: string | undefined, newFormat: string): string => {
  if (!date) {
    return "";
  }
  return format(parseISO(date), newFormat);
};
