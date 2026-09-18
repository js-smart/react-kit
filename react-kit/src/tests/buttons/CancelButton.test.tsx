import { fireEvent, render, screen } from '@testing-library/react';
import { CancelButton } from '../../lib/components/buttons/CancelButton';
import '@testing-library/jest-dom';
import jest from 'jest-mock';

test('renders CancelButton component', () => {
	render(
		<CancelButton
			name={'Cancel'}
			onClick={() => {
				console.log('Clicked Cancel Button');
			}}
		/>
	);

	const cancelButton = screen.getByRole('button', { name: 'Cancel' });
	expect(cancelButton).toBeInTheDocument();
});

test('renders CancelButton with children', () => {
	render(
		<CancelButton
			onClick={() => {
				console.log('Clicked Cancel Button');
			}}>
			Cancel
		</CancelButton>
	);

	const cancelButton = screen.getByRole('button', { name: 'Cancel' });
	expect(cancelButton).toBeInTheDocument();
});

test('renders with custom className', () => {
	render(<CancelButton name="Cancel" className="custom-class" onClick={() => {}} />);

	const cancelButton = screen.getByRole('button', { name: 'Cancel' });
	expect(cancelButton).toHaveClass('custom-class');
});

test('renders with custom data-cy attribute', () => {
	render(<CancelButton name="Cancel" dataCy="custom-cancel-button" onClick={() => {}} />);

	const cancelButton = screen.getByRole('button', { name: 'Cancel' });
	expect(cancelButton).toHaveAttribute('data-cy', 'custom-cancel-button');
});

test('renders with custom startIcon', () => {
	render(<CancelButton name="Cancel" startIcon={<span data-testid="custom-icon" />} onClick={() => {}} />);

	const customIcon = screen.getByTestId('custom-icon');
	expect(customIcon).toBeInTheDocument();
});

test('renders with custom type', () => {
	render(<CancelButton name="Cancel" type="submit" onClick={() => {}} />);

	const cancelButton = screen.getByRole('button', { name: 'Cancel' });
	expect(cancelButton).toHaveAttribute('type', 'submit');
});

test('calls onClick when clicked', () => {
	const handleClick = jest.fn();
	render(<CancelButton name="Cancel" onClick={handleClick} />);

	const cancelButton = screen.getByRole('button', { name: 'Cancel' });
	fireEvent.click(cancelButton);
	expect(handleClick).toHaveBeenCalledTimes(1);
});
