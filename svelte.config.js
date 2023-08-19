import adapter from 'svelte-adapter-github';
import { preprocessThrelte } from '@threlte/preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter() // svelte-adapter-github provides optimal configuration
	},
	preprocess: preprocessThrelte(),
	paths: {
		base: dev ? '' : '/component-world'
	}
};

export default config;
