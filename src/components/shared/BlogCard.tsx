import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type TBlogCardProps = {
	title: string;
	slug?: string;
	date?: string;
};

export default function BlogCard({ title, slug, date }: TBlogCardProps) {
	return (
		<Link
			href={`/blog/${slug}`}
			scroll={true}
			className="anim flex flex-col rounded-md bg-popover p-2 mix-blend-difference transition-all hover:cursor-pointer hover:bg-primary/10"
		>
			<h1>{title}</h1>
			{date && (
				<p className="text-xs text-muted-foreground">{formatDate(date)}</p>
			)}
		</Link>
	);
}
