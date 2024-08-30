import React from 'react';
import Paragraph from '../shared/Paragraph';
import Link from 'next/link';

export default function SocialSection() {
	return (
		<section className="flex flex-col space-y-3">
			<Paragraph title="Connect">
				<p className="font-light">
					Follow me on{' '}
					<Link
						href="https://medium.com/@muhammadvikrii99"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Medium"
						className="text-primary underline"
					>
						Medium
					</Link>
					, view my code and open-source projects on{' '}
					<Link
						href="https://github.com/mhmmdvg"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Github"
						className="text-primary underline"
					>
						Github
					</Link>
					, explore my{' '}
					<Link
						href="https://read.cv/mvigi"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Read.cv"
						className="text-primary underline"
					>
						Read.cv
					</Link>{' '}
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
