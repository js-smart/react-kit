import UndoIcon from '@mui/icons-material/Undo';
import { Button, SxProps, Theme } from '@mui/material';
import React, { ReactNode } from 'react';

/**
 * Reusable Success Button component properties
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.14
 */
interface CancelButtonProps {
	children?: ReactNode;
	className?: string;
	name?: string;
	dataCy?: string;
	sx?: SxProps<Theme>;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'text' | 'outlined' | 'contained';
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	onClick: () => void;
	startIcon?: ReactNode;
	ariaLabel?: string;
}

/**
 * Reusable Cancel Button component
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.14
 */
export function CancelButton(props: CancelButtonProps): ReactNode {
	return (
		<Button
			name={props.name}
			data-cy={props.dataCy ?? 'cancel-button'}
			className={props.className}
			sx={props.sx}
			startIcon={props.startIcon ?? <UndoIcon />}
			variant={props.variant ?? 'contained'}
			color={props.color ?? 'secondary'}
			type={props.type ?? 'button'}
			onClick={() => props.onClick()}
			aria-label={props.ariaLabel ?? props.name ?? 'Cancel'}>
			{props.children ?? props.name}
		</Button>
	);
}
