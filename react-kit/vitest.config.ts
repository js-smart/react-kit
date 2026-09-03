import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		cacheDir: '../node_modules/.vitest/react-kit',
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		reporters: ['default'],
		coverage: {
			reportsDirectory: '../coverage/react-kit',
			provider: 'v8',
		},
	},
});
