/**
 * Returns `true` if the provided string is `undefined`, `null` or empty '' string otherwise returns false
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export function isBlankOrEmpty(value: any): boolean {
	if (value === null || value === undefined) {
		return true;
	} else if (typeof value === 'string') {
		return value.trim() === '';
	}
	return false;
}
