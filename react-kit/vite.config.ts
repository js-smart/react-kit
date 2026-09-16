/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import * as path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	root: __dirname,
	cacheDir: '../node_modules/.vite/react-kit',

	plugins: [
		react(),
		nxViteTsPaths(),
		dts({
			entryRoot: 'src',
			tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
		}),
	],

	// Configuration for building your library.
	// See: https://vitejs.dev/guide/build.html#library-mode
	build: {
		outDir: '../dist/react-kit',
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		lib: {
			entry: 'src/index.ts',
			name: 'react-kit',
			fileName: 'index',
			formats: ['es', 'cjs'],
		},
		rolldownOptions: {
			external: [
				'react',
				'react-dom',
				'@tanstack/react-router',
				'@mui/material',
				'@emotion/react',
				'@emotion/styled',
				'@mui/icons-material',
				'react/jsx-runtime',
			],
		},
	},
	test: {
		globals: true,
		cache: {
			dir: '../node_modules/.vitest/react-kit',
		},
		reporters: ['default'],
		coverage: {
			reportsDirectory: '../coverage/react-kit',
			provider: 'v8',
		},
		projects: [
			{
				extends: true,
				test: {
					name: 'unit',
					environment: 'node',
					include: ['src/tests/utils/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
					exclude: ['src/tests/utils/CssUtils.test.ts'],
				},
			},
			{
				extends: true,
				test: {
					name: 'browser',
					include: [
						'src/tests/buttons/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
						'src/tests/snack-bar/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
						'src/tests/toast/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
						'src/tests/components/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
						'src/tests/utils/CssUtils.test.ts',
					],
					browser: {
						enabled: true,
						provider: playwright(),
						headless: true,
						instances: [{ browser: 'chromium' }],
					},
				},
			},
		],
	},
});
