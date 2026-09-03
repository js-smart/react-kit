import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ExcelButton } from '../../lib/components/buttons/ExcelButton';
import jest from 'jest-mock';

describe('ExcelButton', () => {
	const mockOnClick = jest.fn();

	beforeEach(() => {
		mockOnClick.mockClear();
	});

	it('renders with default properties', () => {
		render(<ExcelButton onClick={mockOnClick}>Export</ExcelButton>);
		const button = screen.getByRole('button', { name: 'Export to Excel' });
		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('data-cy', 'excel-button');
		expect(button).toHaveClass('MuiButton-contained');
		expect(button).toHaveClass('MuiButton-colorSuccess');
	});

	it('calls onClick when clicked', () => {
		render(<ExcelButton onClick={mockOnClick}>Export</ExcelButton>);
		fireEvent.click(screen.getByRole('button', { name: 'Export to Excel' }));
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	it('renders with custom dataCy and ariaLabel', () => {
		render(
			<ExcelButton onClick={mockOnClick} dataCy="custom-cy" ariaLabel="Download Excel" name="dl-btn">
				Download
			</ExcelButton>,
		);
		const button = screen.getByRole('button', { name: 'Download Excel' });
		expect(button).toHaveAttribute('data-cy', 'custom-cy');
		expect(button).toHaveAttribute('name', 'dl-btn');
	});

	it('renders name as children when children not provided', () => {
		render(<ExcelButton onClick={mockOnClick} name="Export XLS" />);
		const button = screen.getByRole('button');
		expect(button).toHaveTextContent('Export XLS');
	});

	it('defaults type to button', () => {
		render(<ExcelButton onClick={mockOnClick}>Go</ExcelButton>);
		expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
	});

	it('accepts type submit', () => {
		render(
			<ExcelButton onClick={mockOnClick} type="submit">
				Go
			</ExcelButton>,
		);
		expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
	});
});
