import React from 'react';
import { Box, Typography } from '@mui/material';

export function TabPanel(props: TabPanelProps) {
	const { children, index, ...other } = props;
	return (
		<div className="tabPanel" role="tabpanel" id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
			<Box sx={{ p: 3 }}>
				<Typography component={'span'}>{children}</Typography>
			</Box>
		</div>
	);
}

export function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: string;
}
