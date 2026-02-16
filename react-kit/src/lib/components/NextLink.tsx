import { Link as MuiLink } from '@mui/material';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	href: string;
	linkText?: string;
	target?: string;
	children?: ReactNode;
	ariaLabel?: string;
}

/**
 * Reusable custom Next.js 13 Link component.
 *
 * @param props Properties of the React Node
 *
 * @author Pavan Kumar Jadda
 * @since 0.3.2
 */
export function NextLink(props: Readonly<Props>): ReactNode {
	return (
		<MuiLink component={Link} to={props.href} className={'next-btn-link'} underline="hover" aria-label={props.ariaLabel}>
			{props.linkText ?? props.children}
		</MuiLink>
	);
}
