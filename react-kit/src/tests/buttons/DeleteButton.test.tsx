import { fireEvent, render, screen } from '@testing-library/react';
import { DeleteButton } from '../../lib/components/buttons/DeleteButton';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

test('renders DeleteButton component', () => {
	render(
		<DeleteButton
			loading={false}
			onClick={() => {
				console.log('Clicked Delete Button');
			}}
		/>
	);

	const deleteButton = screen.getByRole('button', { name: 'Delete' });
	expect(deleteButton).toBeInTheDocument();
});

test('renders DeleteButton with custom label', () => {
	render(
		<DeleteButton
			loading={false}
			label="Remove"
			ariaLabel={'Remove'}
			onClick={() => {
				console.log('Clicked Delete Button');
			}}
		/>
	);

	const deleteButton = screen.getByRole('button', { name: 'Remove' });
	expect(deleteButton).toBeInTheDocument();
});

test('renders with custom data-cy attribute', () => {
	render(<DeleteButton loading={false} name="Delete" dataCy="custom-delete-button" onClick={() => {}} />);

	const deleteButton = screen.getByRole('button', { name: 'Delete' });
	expect(deleteButton).toHaveAttribute('data-cy', 'custom-delete-button');
});

test('renders with custom startIcon', () => {
	render(<DeleteButton loading={false} name="Delete" startIcon={<span data-testid="custom-icon" />} onClick={() => {}} />);

	const customIcon = screen.getByTestId('custom-icon');
	expect(customIcon).toBeInTheDocument();
});

test('renders with custom type', () => {
	render(<DeleteButton loading={false} name="Delete" type="submit" onClick={() => {}} />);

	const deleteButton = screen.getByRole('button', { name: 'Delete' });
	expect(deleteButton).toHaveAttribute('type', 'submit');
});

test('calls onClick when clicked', () => {
	const handleClick = vi.fn();
	render(<DeleteButton loading={false} name="Delete" onClick={handleClick} />);

	const deleteButton = screen.getByRole('button', { name: 'Delete' });
	fireEvent.click(deleteButton);
	expect(handleClick).toHaveBeenCalledTimes(1);
});
