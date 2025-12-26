/**
 * Get the value of a CSS variable
 *
 * @param variable The name of the CSS variable
 *
 * @returns The value of the CSS variable
 *
 * @author Pavan Kumar Jadda
 * @since 1.6.0
 */
export function getCssVariable(variable: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}
