import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type TParagraphProps = {
	title: string;
	subtitle?: string;
	link?: boolean;
	children?: ReactNode;
	href?: string;
};

export default function Paragraph({
	title,
	subtitle,
	link = false,
	children,
	href = '/',
}: TParagraphProps) {
	return (
		<div className="anim flex flex-col space-y-3">
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-col">
					<h1 className="font-medium">{title}</h1>
					{subtitle && (
						<h3 className="text-sm font-light text-muted-foreground">
							{subtitle}
						</h3>
					)}
				</div>
				{link && (
					<Link
						href={href}
						scroll={true}
						className="rounded-md p-1 transition-all hover:bg-primary/5"
					>
						<ArrowRightIcon className="h-4 w-4" />
					</Link>
				)}
			</div>
			{children && (
				<div className="flex flex-col text-muted-foreground">
					{children}
				</div>
			)}
		</div>
	);
}
