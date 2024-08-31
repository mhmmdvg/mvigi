import ButtonShare from '@/components/shared/ButtonShare';
import ButtonShareLink from '@/components/shared/ButtonShareLink';
import Code from '@/components/shared/Code';
import LabsCard from '@/components/shared/LabsCard';
import Paragraph from '@/components/shared/Paragraph';
import { Button } from '@/components/ui/button';
import { COMPONENTS } from '@/lib/labs';
import { getDetailContent } from '@/lib/notion';
import { getFilePathAndConfig } from '@/lib/readfile';
import { formateDateToMonthYear } from '@/lib/utils';
import { Copy, MoveLeft, Twitter } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

async function fetchLabsData(slug: string) {
	const res = getDetailContent(slug);

	return res;
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const item = await fetchLabsData(params.slug);

	return {
		title: item?.title || params.slug,
	};
}

export default async function LabsDetail({
	params,
}: {
	params: { slug: string };
}) {
	const posts = await fetchLabsData(params.slug);

	const item = COMPONENTS.find((component) => component.slug === posts?.slug);

	if (!item) {
		return (
			<section className="pad-x flex h-auto w-full grow flex-col items-center justify-center">
				<h2 className="text-center text-xl font-semibold text-accent-foreground">
					Component Not Found
				</h2>
			</section>
		);
	}

	const { code, uiLibrary } = await getFilePathAndConfig(item);

	return (
		<main className="space-y-7">
			<div className="mb-12 flex flex-row items-center justify-between">
				<Link href={'.'} className="flex flex-row items-center space-x-2">
					<MoveLeft className="h-4 w-4" />
					<p className="text-sm">back</p>
				</Link>

				<div className="flex flex-row items-center space-x-2">
					<ButtonShareLink />
					<ButtonShare />
				</div>
			</div>

			<Paragraph
				title={posts?.title}
				subtitle={formateDateToMonthYear(posts?.date, 'numeric', 'long')}
			>
				<div className="space-y-4">
					{posts?.content && (
						<div
							className="prose prose-p:font-light prose-p:text-muted-foreground"
							dangerouslySetInnerHTML={{ __html: posts?.content }}
						/>
					)}
					<LabsCard gridClass="large-card">
						<item.child />
					</LabsCard>
				</div>
			</Paragraph>

			{uiLibrary && (
				<Paragraph title="Run the following command:">
					<div className="rounded-xl border p-2">
						<Code code={uiLibrary} lang="bash" />
					</div>
				</Paragraph>
			)}

			{code && (
				<Paragraph title="Code">
					<div className="rounded-xl border p-2">
						<Code code={code} lang="typescript" />
					</div>
				</Paragraph>
			)}
		</main>
	);
}
