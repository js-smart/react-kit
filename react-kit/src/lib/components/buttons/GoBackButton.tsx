import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

interface GoBackButtonProps {
	name?: string;
	children?: React.ReactNode;
}

export function GoBackButton(props: GoBackButtonProps) {
	const navigate = useNavigate();
	return (
		<Tooltip title="Go Back to Previous Page">
			<IconButton name={props.name} color="primary" onClick={() => navigate(-1)}>
				<ArrowBackIosIcon />
				{props.children}
			</IconButton>
		</Tooltip>
	);
}
