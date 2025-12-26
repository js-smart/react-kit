/**
 * Returns number parsed from the given string
 *
 * @author Pavan Kumar Jadda
 * @since 0.3.5
 */
export function parseNumber(value: string | null | undefined): number | undefined {
  if (typeof value === "string") {
    return Number.parseInt(value, 10);
  }
  return undefined;
}
