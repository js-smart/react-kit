// ToastContainer.tsx
import { Alert, Snackbar } from '@mui/material';
import React, { useSyncExternalStore } from 'react';
import { toastStore } from './ToastManager';

/**
 * ToastContainer is a component that displays a toast notification.
 * It is used to display a toast notification when a toast is shown.
 * It is a wrapper around the Snackbar component from MUI.
 *
 * @author Pavan Kumar Jadda
 * @since 5.20.0
 */
export const ToastContainer = () => {
	const state = useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot);

	const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') return;
		toastStore.close();
	};

	return (
		<Snackbar
			open={state.open}
			autoHideDuration={state.autoHideDuration}
			onClose={handleClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
			<Alert severity={state.type} variant="filled" onClose={handleClose}>
				{state.message}
			</Alert>
		</Snackbar>
	);
};
