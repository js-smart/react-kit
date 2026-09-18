import { SxProps, Theme } from '@mui/material';

/**
 * Corner radius shared by all React Kit text buttons. Matches Tailwind's `rounded-md` (0.375rem / 6px)
 * instead of MUI's 4px default.
 *
 * @author Pavan Kumar Jadda
 * @since 6.1.0
 */
export const BUTTON_BORDER_RADIUS = '0.375rem';

/**
 * Base `sx` applied to every React Kit button. Consumers can still override it via the `sx` prop,
 * which is merged after these styles.
 *
 * @author Pavan Kumar Jadda
 * @since 6.1.0
 */
export const baseButtonSx: SxProps<Theme> = {
	borderRadius: BUTTON_BORDER_RADIUS,
};
