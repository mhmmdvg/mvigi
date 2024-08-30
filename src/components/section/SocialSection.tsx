import React from 'react';
import Paragraph from '../shared/Paragraph';

export default function SocialSection() {
	return (
		<section className="flex flex-col space-y-3">
			<Paragraph title="Connect">
				<p className="font-light">
					Follow me on{' '}
					<a
						href="https://medium.com/@muhammadvikrii99"
						target="_blank"
						className="text-primary underline"
					>
						Medium
					</a>
					, view my code and open-source projects on{' '}
					<a
						href="https://github.com/mhmmdvg"
						target="_blank"
						className="text-primary underline"
					>
						Github
					</a>
					, explore my{' '}
					<a
						href="https://read.cv/mvigi"
						target="_blank"
						className="text-primary underline"
					>
						Read.cv
					</a>{' '}
					profile, or email me directly at{' '}
					<span className="text-black underline">
						muhammadvikrii99@gmail.com
					</span>
					.
				</p>
			</Paragraph>
		</section>
	);
}
