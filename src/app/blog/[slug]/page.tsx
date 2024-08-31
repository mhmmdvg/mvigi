import ButtonShare from '@/components/shared/ButtonShare';
import ButtonShareLink from '@/components/shared/ButtonShareLink';
import { getDetailContent } from '@/lib/notion';
import { MoveLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

async function fetchBlogData(slug: string) {
	const res = getDetailContent(slug);

	return res;
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const blog = await fetchBlogData(params.slug);

	return {
		title: blog?.title || params.slug,
	};
}

export default async function BlogDetail({
	params,
}: {
	params: { slug: string };
}) {
	const blog = await fetchBlogData(params?.slug);

	if (!blog) {
		return (
			<section className="pad-x flex h-auto w-full grow flex-col items-center justify-center">
				<h2 className="text-center text-xl font-semibold text-accent-foreground">
					Content Not Found
				</h2>
			</section>
		);
	}

	return (
		<main className="space-y-7">
			<div className="mb-12 flex flex-row items-center justify-between">
				<Link href={'.'} className="flex flex-row items-center space-x-2">
					<MoveLeft className="h-4 w-4" />
					<p className="text-sm">back to all post</p>
				</Link>

				<div className="flex flex-row items-center space-x-2">
					<ButtonShareLink />
					<ButtonShare text={blog.title} />
				</div>
			</div>
			<div className="space-y-4">
				<h1 className="text-xl font-medium">{blog.title}</h1>
				<div
					className="prose prose-h2:text-xl prose-h2:font-normal prose-h2:text-primary prose-p:font-light prose-p:text-muted-foreground prose-li:font-light prose-li:text-muted-foreground"
					dangerouslySetInnerHTML={{ __html: blog.content }}
				/>
			</div>
		</main>
	);
}
