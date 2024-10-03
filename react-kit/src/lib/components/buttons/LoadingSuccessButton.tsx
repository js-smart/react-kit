import React from 'react';
import { LoadingButton } from '@mui/lab';
import { SxProps, Theme } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const style = {
	backgroundColor: '$primary-color',
	color: 'var(--white-color)',
	margin: '20px',
};

/**
 * Reusable Success Button component properties
 *
 * @author Pavan Kumar Jadda
 * @since 0.3.3
 */
interface Props {
	children?: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	loading: boolean;
	dataCy?: string;
	startIcon?: React.ReactNode;
	sx?: SxProps<Theme>;
	onClick?: () => void;
}

/**
 * Reusable Success Loading Button
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export function LoadingSuccessButton(props: Props) {
	return (
		<LoadingButton
			data-cy={props.dataCy ?? 'isLoading-isSuccess-button'}
			variant="contained"
			color="isSuccess"
			loadingPosition={'start'}
			startIcon={props.startIcon ?? <SaveIcon />}
			loading={props.loading}
			type={props.type ?? 'button'}
			style={style}
			sx={props.sx}
			onClick={props.onClick}>
			{props.children}
		</LoadingButton>
	);
}
