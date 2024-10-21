import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ManageButton } from '../../lib/components/buttons/ManageButton';
import jest from 'jest-mock';

describe('ManageButton', () => {
	const mockOnClick = jest.fn();

	beforeEach(() => {
		mockOnClick.mockClear();
	});

	it('renders with the correct default properties', () => {
		render(<ManageButton onClick={mockOnClick} />);
		const button = screen.getByRole('button', { name: 'Manage' });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('MuiButton-containedPrimary');
		expect(button).toHaveClass('MuiButton-sizeLarge');
	});

	it('calls onClick when clicked', () => {
		render(<ManageButton onClick={mockOnClick} />);
		fireEvent.click(screen.getByRole('button', { name: 'Manage' }));
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	it('renders with custom properties', () => {
		render(
			<ManageButton
				onClick={mockOnClick}
				name="custom-name"
				dataCy="custom-data-cy"
				variant="outlined"
				color="secondary"
				size="small"
				startIcon={<span data-testid="custom-icon" />}>
				Custom Manage
			</ManageButton>
		);
		const button = screen.getByRole('button', { name: 'Custom Manage' });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('MuiButton-outlinedSecondary');
		expect(button).toHaveClass('MuiButton-sizeSmall');
		expect(button).toHaveAttribute('name', 'custom-name');
		expect(button).toHaveAttribute('data-cy', 'custom-data-cy');
		expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
	});
});
