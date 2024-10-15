import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface GoBackButtonProps {
	onClick: () => void;
	name?: string;
	children?: React.ReactNode;
}

export function GoBackButton(props: GoBackButtonProps) {
	return (
		<Tooltip title="Go Back to Previous Page">
			<IconButton name={props.name} color="primary" onClick={() => props.onClick()}>
				<ArrowBackIosIcon />
				{props.children ?? props.name}
			</IconButton>
		</Tooltip>
	);
}
