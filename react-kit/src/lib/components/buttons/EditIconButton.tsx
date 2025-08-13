import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

interface EditIconButtonProps {
	tooltipTitle: string;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
	color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export function EditIconButton(props: Readonly<EditIconButtonProps>) {
	return (
		<Tooltip title={props.tooltipTitle}>
			<IconButton
				sx={{ pt: 0, pb: 0 }}
				color={props.color ?? 'primary'}
				onClick={() => props.onClick(true)}
				aria-label={props.tooltipTitle}>
				<EditIcon />
			</IconButton>
		</Tooltip>
	);
}
