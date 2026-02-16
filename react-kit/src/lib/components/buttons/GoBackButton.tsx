import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavigateFunction } from 'react-router-dom';

interface GoBackButtonProps {
	name?: string;
	children?: ReactNode;
	navigate: NavigateFunction;
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	ariaLabel?: string;
}

export function GoBackButton(props: GoBackButtonProps) {
	return (
		<Tooltip title="Go Back to Previous Page">
			<IconButton
				name={props.name}
				color={props.color ?? 'primary'}
				onClick={() => props.navigate(-1)}
				aria-label={props.ariaLabel ?? 'Go back to previous page'}>
				<ArrowBackIosIcon />
				{props.children}
			</IconButton>
		</Tooltip>
	);
}
