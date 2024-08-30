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
	yearType?: 'numeric' | '2-digit',
	monthType?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
): string {
	const date = new Date(isoDate);
	return date.toLocaleDateString('en-US', {
		year: yearType,
		month: monthType,
	});
}
