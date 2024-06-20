import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';

interface ManageButtonProps {
	size?: 'small' | 'medium' | 'large';
	dataCy?: string;
	startIcon?: React.ReactNode;
	onClick: () => void;
	children?: React.ReactNode;
}

export function ManageButton(props: ManageButtonProps) {
	return (
		<Button
			data-cy={props.dataCy ?? 'manage-button'}
			className="pushRight"
			onClick={() => props.onClick()}
			variant="contained"
			color="primary"
			size={props.size ?? 'large'}
			startIcon={props.startIcon ?? <SettingsIcon />}>
			{props.children ? props.children : 'Manage'}
		</Button>
	);
}
