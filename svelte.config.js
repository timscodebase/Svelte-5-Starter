import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	}

	// This is a global declaration
	// If you only want to to work on a specific file, you can use:
	//   `<svelte:options runes={true} />`
	// at the top of a page or component
	// https://arc.net/l/quote/qrrotimv
	// compilerOptions: {
	// 	runes: true
	// }
}

export default config
