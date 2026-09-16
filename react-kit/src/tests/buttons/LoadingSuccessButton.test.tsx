import { expect, test, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { LoadingSuccessButton } from '../../lib/components/buttons/LoadingSuccessButton';

test('renders Save button and calls onClick when not loading', async () => {
	const onClick = vi.fn();
	await render(
		<LoadingSuccessButton onClick={onClick} loading={false}>
			Save
		</LoadingSuccessButton>
	);

	const button = page.getByRole('button', { name: 'Save' });
	await expect.element(button).toBeVisible();
	await button.click();
	expect(onClick).toHaveBeenCalledOnce();
});

test('forwards button props', async () => {
	await render(
		<LoadingSuccessButton
			onClick={vi.fn()}
			name="custom-name"
			dataCy="custom-data-cy"
			loading={false}
			startIcon={<span data-testid="custom-icon" />}>
			Custom Success
		</LoadingSuccessButton>
	);

	const button = page.getByRole('button', { name: 'custom-name' });
	await expect.element(button).toBeVisible();
	await expect.element(button).toHaveAttribute('name', 'custom-name');
	await expect.element(button).toHaveAttribute('data-cy', 'custom-data-cy');
	await expect.element(page.getByTestId('custom-icon')).toBeInTheDocument();
});

test('disables interaction while loading', async () => {
	await render(
		<LoadingSuccessButton onClick={vi.fn()} loading={true}>
			Save
		</LoadingSuccessButton>
	);

	await expect.element(page.getByRole('button', { name: 'Save' })).toBeDisabled();
});
