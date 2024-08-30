import { Home, Book, Square, FlaskRound } from 'lucide-react';
import Typescript from '/public/icons/typescript.svg';
import Javascript from '/public/icons/javascript.svg';
import Java from '/public/icons/java.svg';
import Kotlin from '/public/icons/kotlin.svg';
import Swift from '/public/icons/swift.svg';
import Vue from '/public/icons/vue.svg';
import Next from '/public/icons/next.svg';
import React from '/public/icons/react.svg';

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
		label: 'Archive',
		href: '/archive',
		icon: <Book className="h-full w-full" />,
	},
	{
		id: 4,
		label: 'Theme',
		icon: <Square className="h-full w-full" />,
	},
];

export const skillItems = [
	{ name: 'Typescript', icon: Typescript },
	{ name: 'Javascript', icon: Javascript },
	{ name: 'Java', icon: Java },
	{ name: 'Swift', icon: Swift },
	{ name: 'Kotlin', icon: Kotlin },
	{ name: 'React', icon: React },
	{ name: 'Next', icon: Next },
	{ name: 'Vue', icon: Vue },
];
