import dynamic from 'next/dynamic';

const Marquee = dynamic(() => import('@/components/labs/marquee'));
const Notification = dynamic(() => import('@/components/labs/notification'));

export type ComponentType = {
	name: string;
	slug: string;
	child: React.ComponentType<any>;
	description?: string;
	twConfig?: object;
	cssClass?: string;
	uiLibrary?: string;
	gridClass?: 'regular-card' | 'medium-card' | 'large-card' | 'default-card';
};

export const COMPONENTS: ComponentType[] = [
	{
		name: 'Notification',
		slug: 'notification',
		child: Notification,
		gridClass: 'large-card',
		uiLibrary: 'npx shadcn-ui@latest add avatar',
	},
	{
		name: 'Marquee',
		slug: 'marquee',
		child: Marquee,
		gridClass: 'regular-card',
		uiLibrary: 'npx shadcn-ui@latest add avatar',
	},
];
