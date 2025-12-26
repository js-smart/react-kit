/**
 * Returns `true` if the provided string is `undefined`, `null` or empty '' string otherwise returns false
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export function parseBoolean(value: boolean | string | null | undefined): boolean {
  if (typeof value === "boolean") {
    return value;
  } else if (typeof value === "string") {
    return value.toLowerCase() === "true";
  } else return false;
}
