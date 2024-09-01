import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import ButtonShareLink from '../shared/ButtonShareLink';
import ButtonShare from '../shared/ButtonShare';

type THeaderDetail = {
	backLabel: string;
	shareName: string;
};

export default function HeaderDetail({ backLabel, shareName }: THeaderDetail) {
	return (
		<div className="mb-12 flex flex-row items-center justify-between">
			<Link href={'.'} className="flex flex-row items-center space-x-2">
				<ArrowLeftIcon className="h-4 w-4" />
				<p className="text-sm">{backLabel}</p>
			</Link>

			<div className="flex flex-row items-center space-x-2">
				<ButtonShareLink />
				<ButtonShare text={shareName} />
			</div>
		</div>
	);
}
