import React, { ReactNode } from 'react';
import { Button, SxProps, Theme } from '@mui/material';

/**
 * Reusable Success Button component properties
 *
 * @author Pavan Kumar Jadda
 * @since 0.3.3
 */
interface SuccessButtonProps {
	children?: ReactNode;
	className?: string;
	name?: string;
	dataCy?: string;
	sx?: SxProps<Theme>;
	type?: 'button' | 'submit' | 'reset';
	onClick: () => void;
	startIcon?: ReactNode;
	variant?: 'text' | 'outlined' | 'contained';
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	ariaLabel?: string;
}

/**
 * Reusable Success Button component
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export function SuccessButton(props: SuccessButtonProps): ReactNode {
	return (
		<Button
			name={props.name}
			data-cy={props.dataCy ?? 'success-button'}
			className={props.className}
			sx={props.sx}
			startIcon={props.startIcon}
			variant={props.variant ?? 'contained'}
			color={props.color ?? 'success'}
			type={props.type ?? 'button'}
			onClick={() => props.onClick()}
			aria-label={props.ariaLabel ?? props.name ?? 'Save'}>
			{props.children ?? props.name}
		</Button>
	);
}
