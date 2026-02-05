import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HistoryButton } from '../../lib/components/buttons/HistoryButton';
import jest from 'jest-mock';

describe('HistoryButton', () => {
	const mockOnClick = jest.fn();

	beforeEach(() => {
		mockOnClick.mockClear();
	});

	it('renders with the correct default properties', () => {
		render(<HistoryButton onClick={mockOnClick} name={'History'} />);
		const button = screen.getByRole('button', { name: 'History' });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('MuiButton-containedPrimary');
	});

	it('calls onClick when clicked', () => {
		render(<HistoryButton onClick={mockOnClick} name={'History'} />);
		fireEvent.click(screen.getByRole('button', { name: 'History' }));
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	it('renders with custom properties', () => {
		render(
			<HistoryButton
				onClick={mockOnClick}
				name="custom-name"
				dataCy="custom-data-cy"
				variant="outlined"
				color="secondary"
				startIcon={<span data-testid="custom-icon" />}>
				Custom History
			</HistoryButton>
		);
		const button = screen.getByRole('button', { name: 'custom-name' });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('MuiButton-outlinedSecondary');
		expect(button).toHaveAttribute('name', 'custom-name');
		expect(button).toHaveAttribute('data-cy', 'custom-data-cy');
		expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
	});
});
