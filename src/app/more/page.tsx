import BlurFade from '@/components/motion/BlurFade';
import BlogCard from '@/components/shared/BlogCard';
import CareerCard from '@/components/shared/CareerCard';
import ProjectCard from '@/components/shared/ProjectCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { getAllPublishedContent } from '@/lib/notion';
import { BLUR_FADE_DELAY } from '@/lib/utils';
import type { Metadata } from 'next';
import React from 'react';

async function fetchBlogData() {
	const res = getAllPublishedContent('Blog');

	return res;
}

async function fetchProjectData() {
	const res = getAllPublishedContent('Project');

	return res;
}

async function fetchCareerData() {
	const res = getAllPublishedContent('Career');

	return res;
}

export const metadata: Metadata = {
	title: 'MVIGI',
	description: 'MVIGI',
};

export default async function More() {
	const posts = await fetchBlogData();
	const project = await fetchProjectData();
	const career = await fetchCareerData();

	return (
		<div className="flex flex-col space-y-12">
			<section className="flex flex-col space-y-2">
				<BlurFade delay={BLUR_FADE_DELAY}>
					<SectionTitle title="What i wrote?" navigate="/blog" />
				</BlurFade>
				{posts?.slice(0, 3).map((item, i) => (
					<BlurFade key={i} delay={BLUR_FADE_DELAY * 2 + i * 0.05}>
						<BlogCard
							title={item.title}
							date={item.date}
							slug={item.slug}
						/>
					</BlurFade>
				))}
			</section>

			<section className="flex flex-col space-y-2">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<SectionTitle title="Last Project" navigate="/projects" />
				</BlurFade>
				{project &&
					project.slice(0, 3).map((item, i) => (
						<BlurFade key={i} delay={BLUR_FADE_DELAY * 4 + i * 0.05}>
							<ProjectCard
								title={item.title}
								description={item.description}
								href={item.link}
							/>
						</BlurFade>
					))}
			</section>

			<section className="flex flex-col space-y-2">
				<BlurFade delay={BLUR_FADE_DELAY * 5}>
					<SectionTitle title="Career Path" />
				</BlurFade>
				{career &&
					career.map((item, i) => (
						<BlurFade key={i} delay={BLUR_FADE_DELAY * 6 + i * 0.05}>
							<CareerCard
								title={item.title}
								description={item.description}
								date={item.date}
								endDate={item.endDate}
							/>
						</BlurFade>
					))}
			</section>
		</div>
	);
}
