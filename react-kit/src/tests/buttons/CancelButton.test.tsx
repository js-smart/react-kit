import { render, screen } from '@testing-library/react';
import { CancelButton } from '../../lib/components/buttons/CancelButton';
import '@testing-library/jest-dom';

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
