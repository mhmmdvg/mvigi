import BlogCard from '@/components/shared/BlogCard';
import Card from '@/components/shared/Card';
import SectionTitle from '@/components/shared/SectionTitle';
import { getAllPublishedContent } from '@/lib/notion';
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
							<Card
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
						<Card
							key={i}
							title={item.title}
							description={item.description}
							date={item.date}
							endDate={item.endDate}
							variant="career"
						/>
					))}
			</section>
		</div>
	);
}
