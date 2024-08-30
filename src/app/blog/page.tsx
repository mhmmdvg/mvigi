import { getAllPublishedContent } from '@/lib/notion';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

async function fetchBlogData() {
	const res = getAllPublishedContent('Blog');

	return res;
}

export const metadata: Metadata = {
	title: 'Blog',
	description: 'MVIGI Blog',
};

export default async function Blog() {
	const project = await fetchBlogData();

	return (
		<div className="flex flex-col space-y-7">
			<section className="flex flex-col space-y-3">
				<h1 className="px-2 font-medium">My Blog</h1>

				<div className="flex flex-col">
					{project &&
						project.map((item, i) => (
							<Link
								key={i}
								href={`/blog/${item.slug}`}
								scroll={true}
								className="flex w-full flex-row items-center justify-between rounded-md bg-popover px-2 py-3.5 mix-blend-difference transition-all hover:cursor-pointer hover:bg-primary/10"
							>
								<div className="flex flex-col ">
									<h1 className="text-muted-foreground">
										{item.title}
									</h1>
								</div>
								<p className="font-mono text-xs text-muted-foreground">
									{formatDate(item.date)}
								</p>
							</Link>
						))}
				</div>
			</section>
		</div>
	);
}
