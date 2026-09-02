import Heading from '@theme/Heading';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

type FeatureItem = {
	icon: string;
	title: string;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		icon: '🎨',
		title: 'MUI-based components',
		description: 'Buttons, dialogs, snack bars, links, and more built on Material UI with consistent theming.',
	},
	{
		icon: '⚡',
		title: 'Loading & progress state',
		description: 'ProgressState utilities and loading buttons for async save, submit, and delete flows.',
	},
	{
		icon: '🔗',
		title: 'TanStack Router links',
		description: 'RouterLink and NextLink components for typed, client-side navigation in React apps.',
	},
	{
		icon: '🔔',
		title: 'Toast notifications',
		description: 'Global toast API with ToastContainer — call toast() from anywhere in your app.',
	},
	{
		icon: '🧰',
		title: 'Utility functions',
		description: 'Date, string, number, URL, and boolean helpers for common application tasks.',
	},
	{
		icon: '♿',
		title: 'Accessible defaults',
		description: 'Sensible aria-label defaults, tab panel helpers, and MUI accessibility patterns.',
	},
	{
		icon: '📦',
		title: 'TypeScript-first',
		description: 'Fully typed components and utilities with peer dependencies kept external.',
	},
];

function Feature({ icon, title, description }: FeatureItem) {
	return (
		<div className={styles.featureCard}>
			<div className={styles.featureIcon} aria-hidden="true">
				{icon}
			</div>
			<Heading as="h3" className={styles.featureTitle}>
				{title}
			</Heading>
			<p className={styles.featureDescription}>{description}</p>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className={styles.featuresGrid}>
				{FeatureList.map((props) => (
					<Feature key={props.title} {...props} />
				))}
			</div>
		</section>
	);
}
