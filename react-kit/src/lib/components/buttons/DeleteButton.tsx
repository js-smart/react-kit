import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface DeleteButtonProps {
	loading: boolean;
	label?: string;
	loadingLabel?: string;
	loadingPosition?: 'start' | 'end' | 'center';
	type?: 'button' | 'submit' | 'reset' | undefined;
	name?: string;
	dataCy?: string;
	startIcon?: React.ReactNode;
	onClick: () => void;
}

export function DeleteButton(props: DeleteButtonProps) {
	return (
		<LoadingButton
			data-cy={props.dataCy ?? 'delete-button'}
			loading={props.loading ?? false}
			loadingPosition={props.loadingPosition ?? 'start'}
			startIcon={props.startIcon ?? <DeleteForeverIcon />}
			name={props.name}
			color={'error'}
			variant={'contained'}
			sx={{ m: 1 }}
			type={props.type ?? 'button'}
			onClick={props.onClick}>
			{props.label ? props.label : 'Delete'}
		</LoadingButton>
	);
}
