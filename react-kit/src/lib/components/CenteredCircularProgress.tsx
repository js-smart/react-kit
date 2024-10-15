import React from 'react';
import { CircularProgress } from '@mui/material';

/**
 * Reusable Circular Progress component
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export function CenteredCircularProgress() {
	return (
		<div style={{ margin: '1.5rem' }} className="custom-flex-justify-center">
			<CircularProgress />
		</div>
	);
}
