import { baseUrl } from '@/app/sitemap';
import HeaderDetail from '@/components/details/HeaderDetail';
import BlurFade from '@/components/motion/BlurFade';
import Code from '@/components/shared/Code';
import LabsCard from '@/components/shared/LabsCard';
import Paragraph from '@/components/shared/Paragraph';
import { COMPONENTS } from '@/lib/labs';
import { getDetailContent } from '@/lib/notion';
import { getFilePathAndConfig } from '@/lib/readfile';
import { BLUR_FADE_DELAY, formateDateToMonthYear } from '@/lib/utils';
import React from 'react';

async function fetchLabsData(slug: string) {
	const res = getDetailContent(slug);

	return res;
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const item = await fetchLabsData(params.slug);

	if (!item) {
		return null;
	}

	return {
		title: item?.title || params.slug,
		description: item.description,
		openGraph: {
			title: item?.title || params.slug,
			description: item.description,
			url: `${baseUrl}/labs/${item?.slug}`,
			type: 'article',
			images: [
				{
					url: `${baseUrl}/api/og?title=${item?.title}`,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: item.title,
			images: [`${baseUrl}/api/og?title=${item?.title}`],
		},
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
			<BlurFade delay={BLUR_FADE_DELAY}>
				<HeaderDetail backLabel="back" shareName={item.name} />
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 3}>
				<Paragraph
					title={posts?.title}
					subtitle={formateDateToMonthYear(posts?.date, 'numeric', 'long')}
				>
					<div className="space-y-4">
						{posts?.content && (
							<BlurFade delay={BLUR_FADE_DELAY * 4}>
								<div
									className="prose prose-p:font-light prose-p:text-muted-foreground"
									dangerouslySetInnerHTML={{ __html: posts?.content }}
								/>
							</BlurFade>
						)}

						<BlurFade delay={BLUR_FADE_DELAY * 5}>
							<LabsCard gridClass="large-card">
								<item.child />
							</LabsCard>
						</BlurFade>
					</div>
				</Paragraph>
			</BlurFade>

			{uiLibrary && (
				<BlurFade delay={BLUR_FADE_DELAY * 6}>
					<Paragraph title="Run the following command:">
						<BlurFade delay={BLUR_FADE_DELAY * 7}>
							<div className="rounded-xl border p-2">
								<Code code={uiLibrary} lang="bash" />
							</div>
						</BlurFade>
					</Paragraph>
				</BlurFade>
			)}

			{code && (
				<BlurFade delay={BLUR_FADE_DELAY * 8}>
					<Paragraph title="Code">
						<BlurFade delay={BLUR_FADE_DELAY * 9}>
							<div className="rounded-xl border p-2">
								<Code code={code} lang="typescript" />
							</div>
						</BlurFade>
					</Paragraph>
				</BlurFade>
			)}
		</main>
	);
}
