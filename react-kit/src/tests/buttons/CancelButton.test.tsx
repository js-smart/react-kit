import { expect, test, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { CancelButton } from '../../lib/components/buttons/CancelButton';

test('renders Cancel button and calls onClick', async () => {
	const onClick = vi.fn();
	await render(<CancelButton name="Cancel" onClick={onClick} />);

	const button = page.getByRole('button', { name: 'Cancel' });
	await expect.element(button).toBeVisible();
	await button.click();
	expect(onClick).toHaveBeenCalledOnce();
});

test('renders children as button content', async () => {
	await render(<CancelButton onClick={vi.fn()}>Go Back</CancelButton>);

	await expect.element(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
	await expect.element(page.getByText('Go Back')).toBeVisible();
});

test('forwards button props', async () => {
	await render(
		<CancelButton
			name="Cancel"
			className="custom-class"
			dataCy="custom-cancel-button"
			type="submit"
			startIcon={<span data-testid="custom-icon" />}
			onClick={vi.fn()}
		/>
	);

	const button = page.getByRole('button', { name: 'Cancel' });
	await expect.element(button).toHaveClass('custom-class');
	await expect.element(button).toHaveAttribute('data-cy', 'custom-cancel-button');
	await expect.element(button).toHaveAttribute('type', 'submit');
	await expect.element(page.getByTestId('custom-icon')).toBeInTheDocument();
});
