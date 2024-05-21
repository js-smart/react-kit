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
export default function SuccessButton(props: SuccessButtonProps): React.JSX.Element {
	return (
		<Button
			className={props.className}
			sx={props.sx}
			startIcon={props.startIcon}
			variant="contained"
			color="success"
			type={props.type ?? 'button'}
			onClick={() => props.onClick()}>
			{props.children}
		</Button>
	);
}
