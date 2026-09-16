import { expect, test, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { ManageButton } from '../../lib/components/buttons/ManageButton';

test('renders Manage button and calls onClick', async () => {
	const onClick = vi.fn();
	await render(<ManageButton onClick={onClick} />);

	const button = page.getByRole('button', { name: 'Manage' });
	await expect.element(button).toBeVisible();
	await button.click();
	expect(onClick).toHaveBeenCalledOnce();
});

test('forwards button props', async () => {
	await render(
		<ManageButton
			onClick={vi.fn()}
			name="custom-name"
			dataCy="custom-data-cy"
			startIcon={<span data-testid="custom-icon" />}>
			Custom Manage
		</ManageButton>
	);

	const button = page.getByRole('button', { name: 'Custom Manage' });
	await expect.element(button).toBeVisible();
	await expect.element(button).toHaveAttribute('name', 'custom-name');
	await expect.element(button).toHaveAttribute('data-cy', 'custom-data-cy');
	await expect.element(page.getByTestId('custom-icon')).toBeInTheDocument();
});
