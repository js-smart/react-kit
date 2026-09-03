import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QuerySnackBar } from '../../lib/components/snack-bar/QuerySnackBar';

describe('QuerySnackBar', () => {
	it('renders success message when open and isSuccess', () => {
		render(<QuerySnackBar open={true} isSuccess={true} isError={false} message="Saved!" />);
		expect(screen.getByText('Saved!')).toBeInTheDocument();
	});

	it('renders error message when open and isError', () => {
		render(<QuerySnackBar open={true} isSuccess={false} isError={true} message="Failed!" />);
		expect(screen.getByText('Failed!')).toBeInTheDocument();
	});

	it('does not render message when closed', () => {
		render(<QuerySnackBar open={false} isSuccess={true} isError={false} message="Hidden" />);
		expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
	});

	it('renders success alert with correct severity', () => {
		render(<QuerySnackBar open={true} isSuccess={true} isError={false} message="OK" />);
		expect(screen.getByRole('alert')).toBeInTheDocument();
	});
});
