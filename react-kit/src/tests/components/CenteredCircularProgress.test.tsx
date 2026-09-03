import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CenteredCircularProgress } from '../../lib/components/CenteredCircularProgress';

describe('CenteredCircularProgress', () => {
	it('renders with status role', () => {
		render(<CenteredCircularProgress />);
		expect(screen.getByRole('status')).toBeInTheDocument();
	});

	it('has Loading aria-label', () => {
		render(<CenteredCircularProgress />);
		expect(screen.getByLabelText('Loading')).toBeInTheDocument();
	});

	it('renders a CircularProgress (MUI progressbar)', () => {
		render(<CenteredCircularProgress />);
		expect(screen.getByRole('progressbar')).toBeInTheDocument();
	});
});
