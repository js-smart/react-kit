import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface EditIconButtonProps {
	tooltipTitle: string;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
	color: 'primary';
}

export function EditIconButton(props: EditIconButtonProps) {
	return (
		<Tooltip title={props.tooltipTitle}>
			<IconButton sx={{ pt: 0, pb: 0 }} color={props.color} onClick={() => props.onClick(true)} aria-label={props.tooltipTitle}>
				<EditIcon />
			</IconButton>
		</Tooltip>
	);
}
