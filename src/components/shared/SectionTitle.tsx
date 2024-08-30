import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type TSectionTitleProps = {
	title: string;
	navigate?: string;
};

export default function SectionTitle({ title, navigate }: TSectionTitleProps) {
	return (
		<div className="flex flex-row items-center justify-between">
			<h1 className="px-2 font-medium">{title}</h1>
			{navigate && (
				<Link
					href={navigate}
					scroll={true}
					className="rounded-md p-1 transition-all hover:bg-primary/5"
				>
					<MoveRight className="h-5 w-5" />
				</Link>
			)}
		</div>
	);
}
