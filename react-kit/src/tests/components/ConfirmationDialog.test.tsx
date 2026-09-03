import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ConfirmDialog } from '../../lib/components/ConfirmationDialog';
import jest from 'jest-mock';

describe('ConfirmDialog', () => {
	const mockOnClose = jest.fn();

	beforeEach(() => {
		mockOnClose.mockClear();
	});

	it('renders with default title "Confirm"', () => {
		render(<ConfirmDialog id="dlg" keepMounted open message="Are you sure?" value="yes" onClose={mockOnClose} />);
		expect(screen.getByText('Confirm')).toBeInTheDocument();
		expect(screen.getByText('Are you sure?')).toBeInTheDocument();
	});

	it('renders with custom title', () => {
		render(<ConfirmDialog id="dlg" keepMounted open title="Delete?" message="This is permanent" value="yes" onClose={mockOnClose} />);
		expect(screen.getByText('Delete?')).toBeInTheDocument();
	});

	it('calls onClose with "No" when Cancel is clicked', () => {
		render(<ConfirmDialog id="dlg" keepMounted open message="Sure?" value="yes" onClose={mockOnClose} />);
		fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
		expect(mockOnClose).toHaveBeenCalledWith('No');
	});

	it('calls onClose with "Yes" when Yes is clicked', () => {
		render(<ConfirmDialog id="dlg" keepMounted open message="Sure?" value="yes" onClose={mockOnClose} />);
		fireEvent.click(screen.getByRole('button', { name: 'Yes' }));
		expect(mockOnClose).toHaveBeenCalledWith('Yes');
	});

	it('does not render dialog content when closed', () => {
		render(<ConfirmDialog id="dlg" keepMounted open={false} message="Hidden" value="" onClose={mockOnClose} />);
		expect(screen.queryByText('Hidden')).not.toBeVisible();
	});
});
