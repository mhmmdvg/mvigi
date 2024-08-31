import { getAllPublishedContent } from '@/lib/notion';

export const baseUrl = 'https://mvigi.vercel.app/';

export default async function sitemap() {
	const posts = await getAllPublishedContent('Blog');

	let blogs =
		posts?.map((item) => ({
			url: `${baseUrl}/blog/${item.slug}`,
			lastModified: item.date,
		})) ?? [];

	let routes = ['', '/labs', '/blog'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...blogs, ...routes];
}
