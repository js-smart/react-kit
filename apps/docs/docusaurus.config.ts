import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'React Kit',
	tagline: 'Reusable React components and utilities for MUI-based applications',
	favicon: 'img/favicon-32x32.png',

	url: 'https://js-react-kit.netlify.app/',
	baseUrl: '/',

	organizationName: 'js-smart',
	projectName: 'react-kit',

	onBrokenLinks: 'throw',

	markdown: {
		hooks: {
			onBrokenMarkdownLinks: 'warn',
		},
	},

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	headTags: [
		{
			tagName: 'link',
			attributes: {
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/img/apple-touch-icon.png',
			},
		},
		{
			tagName: 'link',
			attributes: {
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/img/favicon-32x32.png',
			},
		},
		{
			tagName: 'link',
			attributes: {
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/img/favicon-16x16.png',
			},
		},
	],

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					editUrl: 'https://github.com/js-smart/react-kit/tree/main/apps/docs/',
					showLastUpdateAuthor: false,
					showLastUpdateTime: false,
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/react-kit-logo.png',
		docs: {
			sidebar: {
				hideable: true,
				autoCollapseCategories: false,
			},
		},
		navbar: {
			title: 'React Kit',
			logo: {
				alt: 'React Kit',
				src: 'img/logo-192.png',
			},
			items: [
				{
					to: '/',
					label: 'Home',
					position: 'left',
				},
				{
					type: 'docSidebar',
					sidebarId: 'docsSidebar',
					position: 'left',
					label: 'Documentation',
				},
				{
					type: 'doc',
					docId: 'getting-started/installation',
					position: 'left',
					label: 'Getting Started',
				},
				{
					href: 'https://www.npmjs.com/package/@js-smart/react-kit',
					label: 'npm',
					position: 'right',
				},
				{
					href: 'https://github.com/js-smart/react-kit',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Documentation',
					items: [
						{
							label: 'Home',
							to: '/',
						},
						{
							label: 'Introduction',
							to: '/docs/introduction',
						},
						{
							label: 'Installation',
							to: '/docs/getting-started/installation',
						},
						{
							label: 'Components',
							to: '/docs/components/buttons',
						},
						{
							label: 'Utilities',
							to: '/docs/utilities',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'GitHub Issues',
							href: 'https://github.com/js-smart/react-kit/issues',
						},
						{
							label: 'npm',
							href: 'https://www.npmjs.com/package/@js-smart/react-kit',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} js-smart. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ['bash', 'tsx'],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
