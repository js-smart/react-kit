// ToastManager.ts
import { SnackbarOrigin } from '@mui/material';
type ToastType = 'success' | 'info' | 'warning' | 'error';

interface ToastState {
	message: string;
	open: boolean;
	autoHideDuration: number;
	anchorOrigin: SnackbarOrigin;
	type: ToastType;
}

let state: ToastState = {
	message: '',
	open: false,
	autoHideDuration: 3000,
	anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
	type: 'info',
};
const listeners = new Set<() => void>();

/**
 * toastStore is a store that manages the toast notification.
 * It is used to store the toast notification state and to notify listeners when the state changes.
 *
 * @author Pavan Kumar Jadda
 * @since 5.20.0
 */
export const toastStore = {
	subscribe(callback: () => void) {
		listeners.add(callback);
		return () => listeners.delete(callback);
	},
	getSnapshot() {
		return state;
	},
	// The "magic" function you call everywhere
	show(message: string, type: ToastType = 'info', autoHideDuration = 3000) {
		state = { message, type, open: true, autoHideDuration, anchorOrigin: { vertical: 'bottom', horizontal: 'center' } };
		listeners.forEach((callback) => callback());
	},
	close() {
		state = { ...state, open: false };
		listeners.forEach((callback) => callback());
	},
};

// Export the simple function
export const toast = (msg: string, type?: ToastType) => toastStore.show(msg, type);
