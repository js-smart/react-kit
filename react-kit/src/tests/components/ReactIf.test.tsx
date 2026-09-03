import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReactIf } from '../../lib/components/ReactIf';

describe('ReactIf', () => {
	it('renders children when condition is true', () => {
		render(
			<ReactIf condition={true}>
				<span>Visible</span>
			</ReactIf>,
		);
		expect(screen.getByText('Visible')).toBeInTheDocument();
	});

	it('does not render children when condition is false', () => {
		render(
			<ReactIf condition={false}>
				<span>Hidden</span>
			</ReactIf>,
		);
		expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
	});

	it('does not render children when condition is null', () => {
		render(
			<ReactIf condition={null}>
				<span>Hidden</span>
			</ReactIf>,
		);
		expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
	});

	it('does not render children when condition is undefined', () => {
		render(
			<ReactIf condition={undefined}>
				<span>Hidden</span>
			</ReactIf>,
		);
		expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
	});

	it('renders else content when condition is false', () => {
		render(
			<ReactIf condition={false} else={<span>Fallback</span>}>
				<span>Main</span>
			</ReactIf>,
		);
		expect(screen.queryByText('Main')).not.toBeInTheDocument();
		expect(screen.getByText('Fallback')).toBeInTheDocument();
	});

	it('supports function children', () => {
		render(<ReactIf condition={true}>{() => <span>From fn</span>}</ReactIf>);
		expect(screen.getByText('From fn')).toBeInTheDocument();
	});

	it('supports function else', () => {
		render(
			<ReactIf condition={false} else={() => <span>Else fn</span>}>
				<span>Main</span>
			</ReactIf>,
		);
		expect(screen.getByText('Else fn')).toBeInTheDocument();
	});
});
