import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoadingSuccessButton } from '../../lib/components/buttons/LoadingSuccessButton';
import { vi } from 'vitest';

describe('LoadingSuccessButton', () => {
	const mockOnClick = vi.fn();

	beforeEach(() => {
		mockOnClick.mockClear();
	});

	it('renders with the correct default properties', () => {
		render(
			<LoadingSuccessButton onClick={mockOnClick} loading={false}>
				Save
			</LoadingSuccessButton>
		);
		const button = screen.getByRole('button', { name: 'Save' });
		expect(button).toBeInTheDocument();
	});

	it('calls onClick when clicked', () => {
		render(
			<LoadingSuccessButton onClick={mockOnClick} loading={false}>
				Save
			</LoadingSuccessButton>
		);
		fireEvent.click(screen.getByRole('button', { name: 'Save' }));
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	it('renders with custom properties', () => {
		render(
			<LoadingSuccessButton
				onClick={mockOnClick}
				name="custom-name"
				dataCy="custom-data-cy"
				variant="outlined"
				color="secondary"
				loading={false}
				ariaLabel={'Custom Success'}
				startIcon={<span data-testid="custom-icon" />}>
				Custom Success
			</LoadingSuccessButton>
		);
		const button = screen.getByRole('button', { name: 'Custom Success' });
		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('name', 'custom-name');
		expect(button).toHaveAttribute('data-cy', 'custom-data-cy');
		expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
	});
});
