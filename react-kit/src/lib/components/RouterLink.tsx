import { Link as MuiLink } from '@mui/material';
import { createLink } from '@tanstack/react-router';
import React from 'react';

// Create a default-styled MUI Link component with underline on hover
const MuiLinkWithDefaults = (props: React.ComponentProps<typeof MuiLink>) => {
	const mergedClassName = ['next-btn-link', props.className].filter(Boolean).join(' ');

	return <MuiLink {...props} className={mergedClassName} underline={props.underline ?? 'hover'} />;
};

// Create a TanStack Router-aware Link component (BOUND to your registered router)
export const RouterLink = createLink(MuiLinkWithDefaults);
