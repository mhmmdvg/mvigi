import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text);
}

export function formatDate(isoDate: string): string {
	const date = new Date(isoDate);
	const day = String(date.getUTCDate()).padStart(2, '0');
	const month = String(date.getUTCMonth() + 1).padStart(2, '0');
	const year = date.getUTCFullYear();

	return `${day}/${month}/${year}`;
}

export function formateDateToMonthYear(
	isoDate: string,
	monthType?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
): string {
	const date = new Date(isoDate);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: monthType,
	});
}
