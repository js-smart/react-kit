import { expect, test } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { AppSnackBar } from '../../lib/components/snack-bar/AppSnackBar';
import { ProgressState } from '../../lib/types/ProgressState';

const successState: ProgressState = {
	isSuccess: true,
	isError: false,
	message: 'Success!',
	isLoading: false,
	isComplete: false,
};

const errorState: ProgressState = {
	isSuccess: false,
	isError: true,
	message: 'Error!',
	isLoading: false,
	isComplete: false,
};

test('shows success alert when progressState is success', async () => {
	await render(<AppSnackBar open={true} progressState={successState} />);

	const alert = page.getByRole('alert');
	await expect.element(alert).toBeVisible();
	await expect.element(alert).toHaveTextContent('Success!');
});

test('shows error alert when progressState is error', async () => {
	await render(<AppSnackBar open={true} progressState={errorState} />);

	const alert = page.getByRole('alert');
	await expect.element(alert).toBeVisible();
	await expect.element(alert).toHaveTextContent('Error!');
});

test('closes the snackbar when the close button is clicked', async () => {
	await render(<AppSnackBar open={true} progressState={successState} />);

	await expect.element(page.getByRole('alert')).toBeVisible();
	await page.getByRole('button', { name: /close/i }).click();
	await expect.element(page.getByRole('alert')).not.toBeInTheDocument();
});
