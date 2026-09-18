/// <reference types='vitest' />
import * as path from 'node:path';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	root: __dirname,
	cacheDir: '../../node_modules/.vite/apps/react-kit-demo',

	server: {
		port: 3007,
		host: 'localhost',
	},

	preview: {
		port: 4300,
		host: 'localhost',
	},

	resolve: {
		alias: {
			'@js-smart/react-kit': path.resolve(__dirname, '../../react-kit/src/index.ts'),
		},
	},

	plugins: [react(), mkcert()],

	build: {
		outDir: '../../dist/apps/react-kit-demo',
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},

	test: {
		globals: true,
		cache: {
			dir: '../../node_modules/.vitest/apps/react-kit-demo',
		},
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

		reporters: ['default'],
		coverage: {
			reportsDirectory: '../../coverage/apps/react-kit-demo',
			provider: 'v8',
		},
	},
});
