import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface GoBackButtonProps {
	onClick: () => void;
	children?: React.ReactNode;
}

export function GoBackButton(props: GoBackButtonProps) {
	return (
		<Tooltip title="Go Back to Previous Page">
			<IconButton color="primary" onClick={() => props.onClick()}>
				<ArrowBackIosIcon />
				{props.children}
			</IconButton>
		</Tooltip>
	);
}
