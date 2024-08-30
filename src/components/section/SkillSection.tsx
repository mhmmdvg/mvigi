import React from 'react';
import Paragraph from '../shared/Paragraph';
import Marquee from '../shared/Marquee';

export default function SkillSection() {
	return (
		<section className="flex w-full flex-col space-y-4">
			<Paragraph title="Me">
				<p className="font-light">
					I bring a wide range of skills and tools. Throughout the years,
					I&apos;ve engaged with various technologies and platforms. My
					curiosity and passion for building products inspire me to
					consistently refine and broaden my expertise.
				</p>
			</Paragraph>

			<Marquee />
		</section>
	);
}
