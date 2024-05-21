import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

interface ManageButtonProps {
	url: string;
	size?: 'small' | 'medium' | 'large';
	startIcon?: React.ReactNode;
}

export default function ManageButton(props: ManageButtonProps) {
	const router = useRouter();
	return (
		<Button
			className="pushRight"
			onClick={() => router.push(props.url)}
			variant="contained"
			color="primary"
			size={props.size ?? 'large'}
			startIcon={props.startIcon ?? <SettingsIcon />}>
			Manage
		</Button>
	);
}
