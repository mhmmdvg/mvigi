import { Home, Square, FlaskRound, Package2 } from 'lucide-react';

const Typescript = '/icons/typescript.svg';
const Javascript = '/icons/javascript.svg';
const Java = '/icons/java.svg';
const Kotlin = '/icons/kotlin.svg';
const Swift = '/icons/swift.svg';
const Vue = '/icons/vue.svg';
const Next = '/icons/next.svg';
const React = '/icons/react.svg';

export const navItems = [
	{
		id: 1,
		label: 'Home',
		href: '/',
		icon: <Home className="h-full w-full" />,
	},
	{
		id: 2,
		label: 'Labs',
		href: '/labs',
		icon: <FlaskRound className="h-full w-full" />,
	},
	{
		id: 3,
		label: 'More',
		href: '/more',
		icon: <Package2 className="h-full w-full" />,
	},
	{
		id: 4,
		label: 'Theme',
		icon: <Square className="h-full w-full" />,
	},
];

export const skillItems = [
	{ name: 'Typescript', icon: Typescript },
	// { name: 'Javascript', icon: Javascript },
	{ name: 'Java', icon: Java },
	{ name: 'Swift', icon: Swift },
	{ name: 'Kotlin', icon: Kotlin },
	// { name: 'React', icon: React },
	// { name: 'Next', icon: Next },
	// { name: 'Vue', icon: Vue },
];
