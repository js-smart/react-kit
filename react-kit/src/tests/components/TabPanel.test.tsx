import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TabPanel, a11yProps } from '../../lib/components/tabs/TabPanel';

describe('TabPanel', () => {
	it('renders children', () => {
		render(
			<TabPanel index={0} value="0">
				Tab content
			</TabPanel>,
		);
		expect(screen.getByText('Tab content')).toBeInTheDocument();
	});

	it('has correct role and aria attributes', () => {
		render(
			<TabPanel index={2} value="2">
				Content
			</TabPanel>,
		);
		const panel = screen.getByRole('tabpanel');
		expect(panel).toHaveAttribute('id', 'vertical-tabpanel-2');
		expect(panel).toHaveAttribute('aria-labelledby', 'vertical-tab-2');
	});
});

describe('a11yProps', () => {
	it('returns correct id and aria-controls', () => {
		expect(a11yProps(3)).toEqual({
			id: 'vertical-tab-3',
			'aria-controls': 'vertical-tabpanel-3',
		});
	});
});
