import React, { ReactNode } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import { baseButtonSx } from '../../constants/ButtonStyles';

interface ManageButtonProps {
	size?: 'small' | 'medium' | 'large';
	variant?: 'text' | 'outlined' | 'contained';
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	className?: string;
	name?: string;
	dataCy?: string;
	startIcon?: ReactNode;
	onClick: () => void;
	children?: ReactNode;
	ariaLabel?: string;
}

export function ManageButton(props: ManageButtonProps) {
	return (
		<Button
			name={props.name}
			data-cy={props.dataCy ?? 'manage-button'}
			className={props.className}
			sx={baseButtonSx}
			onClick={() => props.onClick()}
			variant={props.variant ?? 'contained'}
			color={props.color ?? 'primary'}
			size={props.size ?? 'large'}
			startIcon={props.startIcon ?? <SettingsIcon />}
			aria-label={props.ariaLabel ?? (typeof props.children === 'string' ? props.children : undefined) ?? 'Manage'}>
			{props.children ? props.children : 'Manage'}
		</Button>
	);
}
