import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

const DEMO_CODE = `import { SuccessButton, toast } from '@js-smart/react-kit';

<SuccessButton onClick={() => toast('Saved!', 'success')}>
  Save
</SuccessButton>`;

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={styles.heroSection}>
			<img
				className={styles.heroLogo}
				src="/img/react-kit-logo.png"
				alt=""
				width={112}
				height={112}
				loading="eager"
			/>
			<Heading as="h1" className={styles.heroTitle}>
				<span className={styles.logoText}>{siteConfig.title}</span>
			</Heading>
			<p className={styles.heroDescription}>{siteConfig.tagline}</p>
			<div className={styles.heroActions}>
				<Link className={clsx(styles.btn, styles.btnPrimary)} to="/docs/getting-started/installation">
					Get Started
				</Link>
				<Link className={clsx(styles.btn, styles.btnSecondary)} to="/docs/components/buttons">
					Components
				</Link>
				<Link className={clsx(styles.btn, styles.btnSecondary)} href="https://github.com/js-smart/react-kit">
					View on GitHub
				</Link>
			</div>
			<pre className={styles.demoCode}>
				<code>{DEMO_CODE}</code>
			</pre>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout title={siteConfig.title} description={siteConfig.tagline}>
			<div className={styles.homePage}>
				<HomepageHeader />
				<HomepageFeatures />
			</div>
		</Layout>
	);
}
