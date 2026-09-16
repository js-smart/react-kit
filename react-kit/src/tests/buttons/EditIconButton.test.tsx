import { expect, test, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { EditIconButton } from '../../lib/components/buttons/EditIconButton';

test('renders accessible edit control and calls onClick', async () => {
	const onClick = vi.fn();
	await render(<EditIconButton tooltipTitle="Edit Item" onClick={onClick} />);

	const button = page.getByRole('button', { name: 'Edit Item' });
	await expect.element(button).toBeVisible();
	await button.click();
	expect(onClick).toHaveBeenCalledOnce();
	expect(onClick).toHaveBeenCalledWith(true);
});
