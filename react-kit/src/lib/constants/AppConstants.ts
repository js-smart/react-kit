/**
 * Global System settings used in the application
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export enum SystemConfig {
  SYSTEM_TIME_ZONE = "America/New_York",
  SYSTEM_LOCALE = "en-US",
  SYSTEM_DATE_FORMAT = "MM/dd/yyyy",
  SYSTEM_DATE_TIME_FORMAT = "MM/dd/yyyy hh:mm:ss a",
  ISO_DATE_FORMAT = "yyyy-MM-dd",

  //Default Cookie expiration is 24 hours(Server sends usually cookie with 60 minutes timeout)
  SYSTEM_COOKIE_TIMEOUT_HOURS = 24,
  SYSTEM_COOKIE_TIMEOUT_MILLI_SECONDS = 3600000,
}
