import { SxProps, Theme } from '@mui/material';

/**
 * Merges base styles with an optional consumer `sx`, so consumer styles win. Uses MUI's array form,
 * which resolves each entry against the theme.
 *
 * @author Pavan Kumar Jadda
 * @since 6.1.0
 */
export function mergeSx(base: SxProps<Theme>, sx?: SxProps<Theme>): SxProps<Theme> {
	if (!sx) return base;
	return [...(Array.isArray(base) ? base : [base]), ...(Array.isArray(sx) ? sx : [sx])] as SxProps<Theme>;
}
