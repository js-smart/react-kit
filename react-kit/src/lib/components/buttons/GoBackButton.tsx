import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';

export default function GoBackButton() {
	const router = useRouter();
	return (
		<Tooltip title="Go Back to Previous Page">
			<IconButton color="primary" onClick={() => router.back()}>
				<ArrowBackIosIcon />
			</IconButton>
		</Tooltip>
	);
}
