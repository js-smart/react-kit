import { expect, test, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { SuccessButton } from '../../lib/components/buttons/SuccessButton';

test('renders default Save button and calls onClick', async () => {
	const onClick = vi.fn();
	await render(<SuccessButton onClick={onClick}>Success</SuccessButton>);

	const button = page.getByRole('button', { name: 'Save' });
	await expect.element(button).toBeVisible();
	await button.click();
	expect(onClick).toHaveBeenCalledOnce();
});

test('forwards button props', async () => {
	const onClick = vi.fn();
	await render(
		<SuccessButton
			onClick={onClick}
			name="custom-name"
			dataCy="custom-data-cy"
			type="submit"
			className="custom-class"
			startIcon={<span data-testid="custom-icon" />}>
			Custom Success
		</SuccessButton>
	);

	const button = page.getByRole('button', { name: 'custom-name' });
	await expect.element(button).toBeVisible();
	await expect.element(button).toHaveAttribute('name', 'custom-name');
	await expect.element(button).toHaveAttribute('data-cy', 'custom-data-cy');
	await expect.element(button).toHaveAttribute('type', 'submit');
	await expect.element(button).toHaveClass('custom-class');
	await expect.element(page.getByTestId('custom-icon')).toBeInTheDocument();
});
