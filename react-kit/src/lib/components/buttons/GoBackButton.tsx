import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavigateFunction } from 'react-router-dom';

interface GoBackButtonProps {
	name?: string;
	children?: React.ReactNode;
	navigate: NavigateFunction;
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export function GoBackButton(props: GoBackButtonProps) {
	return (
		<Tooltip title="Go Back to Previous Page">
			<IconButton name={props.name} color={props.color ?? 'primary'} onClick={() => props.navigate(-1)}>
				<ArrowBackIosIcon />
				{props.children}
			</IconButton>
		</Tooltip>
	);
}
