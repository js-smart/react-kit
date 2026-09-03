/// <reference types="vitest/config" />
import { copyFileSync } from 'node:fs';
import * as path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const outDir = path.join(__dirname, '../dist/react-kit');

export default defineConfig({
	root: __dirname,
	cacheDir: '../node_modules/.vite/react-kit',

	resolve: {
		tsconfigPaths: true,
	},

	plugins: [
		react(),
		dts({
			entryRoot: 'src',
			tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
		}),
		{
			name: 'copy-package-json',
			closeBundle() {
				copyFileSync(path.join(__dirname, 'package.json'), path.join(outDir, 'package.json'));
			},
		},
	],

	build: {
		outDir,
		emptyOutDir: true,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		lib: {
			entry: 'src/index.ts',
			name: 'react-kit',
			fileName: 'index',
			formats: ['es'],
		},
		rolldownOptions: {
			external: (id: string) =>
				/^(react|react-dom|react\/|@tanstack\/react-router|@mui\/|@emotion\/|@mui\/icons-material|date-fns)/.test(id),
		},
	},
});
