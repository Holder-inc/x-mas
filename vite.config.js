import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
        alias: {
            src: path.resolve('src/'),
        },
    },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
