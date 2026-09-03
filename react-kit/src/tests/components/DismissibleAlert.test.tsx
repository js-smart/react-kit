import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DismissibleAlert } from '../../lib/components/DismissibleAlert';

describe('DismissibleAlert', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('renders alert message', () => {
		render(<DismissibleAlert message="Something happened" severity="info" />);
		expect(screen.getByText('Something happened')).toBeInTheDocument();
	});

	it('renders with correct severity', () => {
		render(<DismissibleAlert message="Error!" severity="error" />);
		expect(screen.getByRole('alert')).toBeInTheDocument();
	});

	it('has default aria-label', () => {
		render(<DismissibleAlert message="Info" severity="info" />);
		expect(screen.getByLabelText('Dismissible Alert')).toBeInTheDocument();
	});

	it('renders custom aria-label', () => {
		render(<DismissibleAlert message="Info" severity="info" ariaLabel="Custom Alert" />);
		expect(screen.getByLabelText('Custom Alert')).toBeInTheDocument();
	});

	it('dismisses when close button is clicked', () => {
		render(<DismissibleAlert message="Bye" severity="warning" />);
		fireEvent.click(screen.getByRole('button', { name: 'close' }));
		expect(screen.queryByText('Bye')).not.toBeInTheDocument();
	});

	it('auto-dismisses after timeout', () => {
		render(<DismissibleAlert message="Temp" severity="success" dismissTimeOut={1000} />);
		expect(screen.getByText('Temp')).toBeInTheDocument();
		act(() => {
			vi.advanceTimersByTime(1100);
		});
		expect(screen.queryByText('Temp')).not.toBeInTheDocument();
	});

	it('does not auto-dismiss when dismissOnTimeOut is false', () => {
		render(<DismissibleAlert message="Stay" severity="info" dismissOnTimeOut={false} dismissTimeOut={1000} />);
		vi.advanceTimersByTime(2000);
		expect(screen.getByText('Stay')).toBeInTheDocument();
	});

	it('hides close button when dismissible is false', () => {
		render(<DismissibleAlert message="Permanent" severity="info" dismissible={false} />);
		expect(screen.queryByRole('button', { name: 'close' })).not.toBeInTheDocument();
	});
});
