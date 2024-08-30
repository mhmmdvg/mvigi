import { formatDate, formateDateToMonthYear } from '@/lib/utils';
import React from 'react';

type TCardProps = {
	title: string;
	description?: string;
	date?: string;
	endDate?: string;
	href?: string;
	variant?: 'career' | 'project';
};

export default function Card({
	title,
	description,
	date,
	endDate,
	href,
	variant,
}: TCardProps) {
	return (
		<a href={href} target="_blank">
			<div className="flex w-full flex-row items-center justify-between rounded-md bg-popover p-2 mix-blend-difference transition-all hover:cursor-pointer hover:bg-primary/10">
				<div className="flex flex-col ">
					<h1>{title}</h1>
					<p className="text-xs font-light text-muted-foreground">
						{description}
					</p>
				</div>

				{variant === 'project'
					? date && (
							<p className="font-mono text-xs text-muted-foreground">
								{formatDate(date)}
							</p>
						)
					: date && (
							<p className="line-clamp-1 font-mono text-xs text-muted-foreground">
								{formateDateToMonthYear(date, '2-digit', 'short')}{' '}
								{endDate &&
									`- ${formateDateToMonthYear(endDate, '2-digit', 'short')}`}
							</p>
						)}
			</div>
		</a>
	);
}
