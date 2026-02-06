import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

interface EditIconButtonProps {
	tooltipTitle: string;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
	color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	ariaLabel?: string;
}

export function EditIconButton(props: Readonly<EditIconButtonProps>) {
	return (
		<Tooltip title={props.tooltipTitle}>
			<IconButton
				sx={{ padding: '0.25rem' }}
				color={props.color ?? 'primary'}
				onClick={() => props.onClick(true)}
				aria-label={props.ariaLabel ?? props.tooltipTitle}>
				<EditIcon />
			</IconButton>
		</Tooltip>
	);
}
