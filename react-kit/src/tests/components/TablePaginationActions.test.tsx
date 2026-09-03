import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TablePaginationActions } from '../../lib/components/table/TablePaginationActions';
import jest from 'jest-mock';

describe('TablePaginationActions', () => {
	const mockPageChange = jest.fn();

	beforeEach(() => {
		mockPageChange.mockClear();
	});

	const renderActions = (page: number, count = 100, rowsPerPage = 10) =>
		render(<TablePaginationActions count={count} page={page} rowsPerPage={rowsPerPage} onPageChange={mockPageChange} />);

	it('disables first page and previous buttons on first page', () => {
		renderActions(0);
		expect(screen.getByLabelText('first page')).toBeDisabled();
		expect(screen.getByLabelText('previous page')).toBeDisabled();
	});

	it('disables next and last page buttons on last page', () => {
		renderActions(9); // page 9 = last page for 100 items / 10 per page
		expect(screen.getByLabelText('next page')).toBeDisabled();
		expect(screen.getByLabelText('last page')).toBeDisabled();
	});

	it('enables all buttons on a middle page', () => {
		renderActions(5);
		expect(screen.getByLabelText('first page')).not.toBeDisabled();
		expect(screen.getByLabelText('previous page')).not.toBeDisabled();
		expect(screen.getByLabelText('next page')).not.toBeDisabled();
		expect(screen.getByLabelText('last page')).not.toBeDisabled();
	});

	it('calls onPageChange with 0 for first page button', () => {
		renderActions(5);
		fireEvent.click(screen.getByLabelText('first page'));
		expect(mockPageChange).toHaveBeenCalledWith(expect.anything(), 0);
	});

	it('calls onPageChange with page-1 for previous button', () => {
		renderActions(5);
		fireEvent.click(screen.getByLabelText('previous page'));
		expect(mockPageChange).toHaveBeenCalledWith(expect.anything(), 4);
	});

	it('calls onPageChange with page+1 for next button', () => {
		renderActions(5);
		fireEvent.click(screen.getByLabelText('next page'));
		expect(mockPageChange).toHaveBeenCalledWith(expect.anything(), 6);
	});

	it('calls onPageChange with last page for last page button', () => {
		renderActions(5);
		fireEvent.click(screen.getByLabelText('last page'));
		expect(mockPageChange).toHaveBeenCalledWith(expect.anything(), 9);
	});
});
