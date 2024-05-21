import React from 'react';
import { Icon } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface OpenInNewIconLinkProps {
	href: string;
	linkText: string;
	target: string;
	children?: React.ReactNode;
}

/**
 * Reusable component to open a link in new tab and show open new icon at the end
 *
 * @param props Properties of the component
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.24
 */
export default function OpenInNewIconLink(props: OpenInNewIconLinkProps) {
	return (
		<a href={props.href} target={'_blank'} rel="noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
			{props.linkText}
			<Icon sx={{ fontSize: '1.1rem', mx: 0.75 }} component={OpenInNewIcon} />
			{props.children}
		</a>
	);
}
