import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton, Tooltip } from '@mui/material';
import { useRouter } from '@tanstack/react-router';
import { ReactNode } from 'react';

interface GoBackButtonProps {
	name?: string;
	children?: ReactNode;
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	ariaLabel?: string;
}

export function GoBackButton(props: GoBackButtonProps) {
  const router = useRouter();
	return (
		<Tooltip title="Go Back to Previous Page">
			<IconButton
				name={props.name}
				color={props.color ?? 'primary'}
				onClick={() => router.history.back()}
				aria-label={props.ariaLabel ?? 'Go back to previous page'}>
				<ArrowBackIosIcon />
				{props.children}
			</IconButton>
		</Tooltip>
	);
}
