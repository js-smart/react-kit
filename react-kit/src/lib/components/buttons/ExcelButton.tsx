import React from 'react';
import { Button, SxProps, Theme } from '@mui/material';

/**
 * Reusable Excel Button component properties
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.9
 */
interface SuccessButtonProps {
	children?: React.ReactNode;
	className?: string;
	name?: string;
	sx?: SxProps<Theme>;
	type?: 'button' | 'submit' | 'reset';
	onClick: () => void;
	startIcon?: React.ReactNode;
	dataCy?: string;
	ariaLabel?: string;
}

/**
 * Reusable Excel Button component
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.9
 */
export function ExcelButton(props: SuccessButtonProps): React.JSX.Element {
	return (
		<Button
			data-cy={props.dataCy ?? 'excel-button'}
			style={{ borderRadius: '20px' }}
			className={props.className}
			name={props.name}
			sx={props.sx}
			startIcon={props.startIcon}
			variant="contained"
			color="success"
			type={props.type ?? 'button'}
			aria-label={props.ariaLabel ?? props.name ?? 'Excel'}
			onClick={() => props.onClick()}>
			{props.children ?? props.name}
		</Button>
	);
}
