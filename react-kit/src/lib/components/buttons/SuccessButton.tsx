import React from 'react';
import { Button, SxProps, Theme } from '@mui/material';

/**
 * Reusable Success Button component properties
 *
 * @author Pavan Kumar Jadda
 * @since 0.3.3
 */
interface SuccessButtonProps {
	children?: React.ReactNode;
	className?: string;
	dataCy?: string;
	sx?: SxProps<Theme>;
	type?: 'button' | 'submit' | 'reset';
	onClick: () => void;
	startIcon?: React.ReactNode;
}

/**
 * Reusable Success Button component
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export function SuccessButton(props: SuccessButtonProps): React.JSX.Element {
	return (
		<Button
			data-cy={props.dataCy ?? 'isSuccess-button'}
			className={props.className}
			sx={props.sx}
			startIcon={props.startIcon}
			variant="contained"
			color="isSuccess"
			type={props.type ?? 'button'}
			onClick={() => props.onClick()}>
			{props.children}
		</Button>
	);
}
