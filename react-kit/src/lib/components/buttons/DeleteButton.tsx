import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';

interface DeleteButtonProps {
	loading: boolean;
	label?: string;
	loadingLabel?: string;
	loadingPosition?: 'start' | 'end' | 'center';
	type?: 'button' | 'submit' | 'reset' | undefined;
	variant?: 'text' | 'outlined' | 'contained';
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	name?: string;
	dataCy?: string;
	startIcon?: React.ReactNode;
	onClick: () => void;
	ariaLabel?: string;
}

export function DeleteButton(props: DeleteButtonProps) {
	return (
		<Button
			data-cy={props.dataCy ?? 'delete-button'}
			loading={props.loading ?? false}
			loadingPosition={props.loadingPosition ?? 'start'}
			startIcon={props.startIcon ?? <DeleteForeverIcon />}
			name={props.name}
			variant={props.variant ?? 'contained'}
			color={props.color ?? 'error'}
			sx={{ m: 1 }}
			type={props.type ?? 'button'}
			aria-label={props.ariaLabel ?? props.ariaLabel ?? 'Delete'}
			onClick={props.onClick}>
			{props.label ? props.label : 'Delete'}
		</Button>
	);
}
