import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {url: params.url}
}