import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToastContainer } from '../../lib/components/toast/ToastContainer';
import { toastStore } from '../../lib/components/toast/ToastManager';

describe('ToastContainer', () => {
	afterEach(() => {
		toastStore.close();
	});

	it('does not show alert when toast is closed', () => {
		render(<ToastContainer />);
		expect(screen.queryByRole('alert')).not.toBeInTheDocument();
	});

	it('shows alert when toast is open', () => {
		toastStore.show('Hello toast', 'success');
		render(<ToastContainer />);
		expect(screen.getByText('Hello toast')).toBeInTheDocument();
		expect(screen.getByRole('alert')).toBeInTheDocument();
	});
});
