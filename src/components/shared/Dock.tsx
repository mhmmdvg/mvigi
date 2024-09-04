'use client';

import { easeInOut, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/constants';

export default function Dock() {
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();

	const [activeTab, setActiveTab] = useState<number | null>(
		navItems.find((item) => item.href === pathname)?.id || null
	);

	useEffect(() => {
		setActiveTab(navItems.find((item) => item.href === pathname)?.id || null);
	}, [pathname]);

	const duration = 0.4;

	const dockVariants = {
		open: {
			width: 'fit-content',
			opacity: 1,
			transition: {
				easeInOut,
				duration,
			},
		},
		closed: {
			width: 0,
			opacity: 0,
			transition: {
				easeInOut,
				duration,
			},
		},
	};

	const initialX = activeTab !== null ? (activeTab - 1) * 40 : 0;

	return (
		<motion.div
			variants={dockVariants}
			initial="closed"
			animate="open"
			className="fixed inset-x-0 bottom-6 z-50 mx-auto rounded-[14px] bg-popover p-1 shadow-[rgba(142,140,152,0.2)_0px_0px_25px,rgba(219,216,224,0.2)_0px_0px_0px_1px] dark:shadow-[rgba(111,109,120,0.1)_0px_0px_30px,rgba(60,57,63,0.4)_0px_0px_0px_1px]"
		>
			<ul className="relative flex items-center">
				{activeTab !== null && (
					<motion.span
						className="absolute bottom-0 top-0 z-[99] w-10 rounded-[12px] bg-primary/40 mix-blend-difference outline-none ring-0 dark:bg-primary/10"
						initial={{ translateX: initialX, opacity: 0, scale: 0 }}
						animate={{
							translateX: (activeTab - 1) * 40,
							opacity: 1,
							scale: 1,
						}}
						transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
					/>
				)}
				{navItems.map((item) =>
					item.href ? (
						<Link
							href={item.href}
							onClick={() => setActiveTab(item.id)}
							scroll={true}
							key={item.id}
							className={`${
								activeTab === item.id
									? 'text-foreground'
									: 'text-muted-foreground'
							} group/dock relative h-10 w-10 p-3 text-sm transition-all duration-300 ease-in-out focus-visible:outline-none`}
							style={{
								WebkitTapHighlightColor: 'transparent',
							}}
							aria-label={item.label}
						>
							{item.icon}
							<span className="invisible absolute -top-8 left-1/2 hidden -translate-x-1/2 -translate-y-1 scale-75 rounded-md border bg-popover p-1 px-1.5 text-[10px] font-medium leading-none text-foreground opacity-0 transition-all duration-200 ease-in-out group-hover/dock:visible group-hover/dock:translate-y-0 group-hover/dock:scale-100 group-hover/dock:opacity-100 md:block">
								{item.label}
							</span>
						</Link>
					) : (
						<button
							key={item.id}
							onClick={() => {
								setTheme(theme === 'dark' ? 'light' : 'dark');
							}}
							className={`group/dock relative h-10 w-10 p-3 text-sm text-primary transition-all duration-300 ease-in-out focus-visible:outline-none [&>svg]:fill-black dark:[&>svg]:fill-white`}
							aria-label="Change theme button"
						>
							{item.icon}
							<span className="invisible absolute -top-8 left-1/2 hidden -translate-x-1/2 -translate-y-2 scale-75 rounded-md border bg-popover p-1 px-1.5 text-[10px] font-medium leading-none text-foreground opacity-0 transition-all duration-200 ease-in-out group-hover/dock:visible group-hover/dock:translate-y-0 group-hover/dock:scale-100 group-hover/dock:opacity-100 md:block">
								{item.label}
							</span>
						</button>
					)
				)}
			</ul>
		</motion.div>
	);
}
