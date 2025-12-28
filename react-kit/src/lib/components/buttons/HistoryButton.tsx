import HistoryIcon from '@mui/icons-material/History';
import { Button, SxProps, Theme } from '@mui/material';
import React from 'react';

/**
 * Reusable History Button component properties
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.15
 */
interface HistoryButtonProps {
	children?: React.ReactNode;
	className?: string;
	name?: string;
	dataCy?: string;
	sx?: SxProps<Theme>;
	type?: 'button' | 'submit' | 'reset';
	onClick: () => void;
	startIcon?: React.ReactNode;
	variant?: 'text' | 'outlined' | 'contained';
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

/**
 * Reusable History Button component
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.15
 */
export function HistoryButton(props: HistoryButtonProps): React.JSX.Element {
	return (
		<Button
			name={props.name}
			data-cy={props.dataCy ?? 'history-button'}
			className={props.className}
			sx={props.sx ?? { p: 1, m: 1 }}
			startIcon={props.startIcon ?? <HistoryIcon />}
			variant={props.variant ?? 'contained'}
			color={props.color ?? 'primary'}
			type={props.type ?? 'button'}
			onClick={() => props.onClick()}>
			{props.children ?? props.name}
		</Button>
	);
}
