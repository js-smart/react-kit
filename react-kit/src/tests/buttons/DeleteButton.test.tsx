import { expect, test, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { DeleteButton } from '../../lib/components/buttons/DeleteButton';

test('renders Delete button and calls onClick', async () => {
	const onClick = vi.fn();
	await render(<DeleteButton loading={false} onClick={onClick} />);

	const button = page.getByRole('button', { name: 'Delete' });
	await expect.element(button).toBeVisible();
	await button.click();
	expect(onClick).toHaveBeenCalledOnce();
});

test('renders custom label', async () => {
	await render(<DeleteButton loading={false} label="Remove" onClick={vi.fn()} />);

	await expect.element(page.getByRole('button', { name: 'Remove' })).toBeVisible();
});

test('forwards button props', async () => {
	await render(
		<DeleteButton
			loading={false}
			name="Delete"
			dataCy="custom-delete-button"
			type="submit"
			startIcon={<span data-testid="custom-icon" />}
			onClick={vi.fn()}
		/>
	);

	const button = page.getByRole('button', { name: 'Delete' });
	await expect.element(button).toHaveAttribute('data-cy', 'custom-delete-button');
	await expect.element(button).toHaveAttribute('type', 'submit');
	await expect.element(page.getByTestId('custom-icon')).toBeInTheDocument();
});

test('disables interaction while loading', async () => {
	const onClick = vi.fn();
	await render(<DeleteButton loading={true} onClick={onClick} />);

	const button = page.getByRole('button', { name: 'Delete' });
	await expect.element(button).toBeDisabled();
});
