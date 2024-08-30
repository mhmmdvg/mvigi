import BlogCard from '@/components/shared/BlogCard';
import CareerCard from '@/components/shared/CareerCard';
import ProjectCard from '@/components/shared/ProjectCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { getAllPublishedContent } from '@/lib/notion';
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
	title: 'Archive',
	description: 'MVIGI Archive',
};

export default async function Archive() {
	const posts = await fetchBlogData();
	const project = await fetchProjectData();
	const career = await fetchCareerData();

	return (
		<div className="flex flex-col space-y-12">
			<section className="flex flex-col space-y-2">
				<SectionTitle title="What i wrote?" navigate="/blog" />
				{posts
					?.slice(0, 3)
					.map((item, i) => (
						<BlogCard
							key={i}
							title={item.title}
							date={item.date}
							slug={item.slug}
						/>
					))}
			</section>

			<section className="flex flex-col space-y-2">
				<SectionTitle title="Last Project" navigate="/projects" />
				{project &&
					project
						.slice(0, 3)
						.map((item, i) => (
							<ProjectCard
								key={i}
								title={item.title}
								description={item.description}
								href={item.link}
							/>
						))}
			</section>

			<section className="flex flex-col space-y-2">
				<SectionTitle title="Career Path" />
				{career &&
					career.map((item, i) => (
						<CareerCard
							key={i}
							title={item.title}
							description={item.description}
							date={item.date}
							endDate={item.endDate}
						/>
					))}
			</section>
		</div>
	);
}
