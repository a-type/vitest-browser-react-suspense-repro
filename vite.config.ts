import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	test: {
		browser: {
			enabled: true,
			name: 'chromium',
			provider: 'playwright',
			// https://playwright.dev
			providerOptions: {},
		},
	},
});
