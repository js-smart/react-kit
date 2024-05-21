import React from 'react';
import { Button, SxProps, Theme } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

/**
 * Reusable History Button component properties
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.15
 */
interface HistoryButtonProps {
	children?: React.ReactNode;
	className?: string;
	sx?: SxProps<Theme>;
	type?: 'button' | 'submit' | 'reset';
	onClick: () => void;
	startIcon?: React.ReactNode;
}

/**
 * Reusable History Button component
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.15
 */
export default function HistoryButton(props: HistoryButtonProps): React.JSX.Element {
	return (
		<Button
			className={props.className}
			sx={props.sx ?? { p: 1, m: 1 }}
			startIcon={props.startIcon ?? <HistoryIcon />}
			variant="contained"
			color="primary"
			type={props.type ?? 'button'}
			onClick={() => props.onClick()}>
			{props.children}
		</Button>
	);
}
