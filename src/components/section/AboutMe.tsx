import React from 'react';
import Paragraph from '../shared/Paragraph';

export default function AboutMe() {
	return (
		<section className="flex w-full flex-col">
			<Paragraph title="About Me">
				<p className="font-light">
					I&apos;m an enthusiastic Frontend Developer with a strong focus
					on crafting responsive and dynamic web applications. With
					expertise in modern frameworks like React.js and Vue.js, I
					specialize in building seamless user interfaces that not only
					look great but also provide exceptional user experiences.
				</p>
			</Paragraph>
		</section>
	);
}
