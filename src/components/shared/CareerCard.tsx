import { formatDate, formateDateToMonthYear } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type TCareerCard = {
	title: string;
	description?: string;
	date?: string;
	endDate?: string;
};

export default function CareerCard({
	title,
	description,
	date,
	endDate,
}: TCareerCard) {
	return (
		<div className="flex w-full flex-row items-center justify-between rounded-md bg-popover p-2 mix-blend-difference ">
			<div className="flex flex-col ">
				<h1>{title}</h1>
				<p className="text-xs font-light text-muted-foreground">
					{description}
				</p>
			</div>
			{date && (
				<p className="line-clamp-1 text-xs text-muted-foreground">
					{formateDateToMonthYear(date, '2-digit', 'short')}
					{' — '}
					{endDate
						? `${formateDateToMonthYear(endDate, '2-digit', 'short')}`
						: 'Now'}
				</p>
			)}
		</div>
	);
}
