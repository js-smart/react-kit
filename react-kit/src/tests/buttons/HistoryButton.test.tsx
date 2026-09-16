import { expect, test, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { HistoryButton } from '../../lib/components/buttons/HistoryButton';

test('renders History button and calls onClick', async () => {
	const onClick = vi.fn();
	await render(<HistoryButton onClick={onClick} name="History" />);

	const button = page.getByRole('button', { name: 'History' });
	await expect.element(button).toBeVisible();
	await button.click();
	expect(onClick).toHaveBeenCalledOnce();
});

test('forwards button props', async () => {
	await render(
		<HistoryButton
			onClick={vi.fn()}
			name="custom-name"
			dataCy="custom-data-cy"
			startIcon={<span data-testid="custom-icon" />}>
			Custom History
		</HistoryButton>
	);

	const button = page.getByRole('button', { name: 'custom-name' });
	await expect.element(button).toBeVisible();
	await expect.element(button).toHaveAttribute('name', 'custom-name');
	await expect.element(button).toHaveAttribute('data-cy', 'custom-data-cy');
	await expect.element(page.getByTestId('custom-icon')).toBeInTheDocument();
});
