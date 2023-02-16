import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			assets: "http://localhost:3000/unitedkingdom",
			base: "/unitedkingdom"
		}
	},
};

export default config;
