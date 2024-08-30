'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { CornerUpLeft } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Notification = () => {
	const [show, setShow] = useState<boolean>(false);
	const notifRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (notifRef.current && !notifRef.current.contains(e.target as Node))
			return setShow(false);
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="z-10 flex w-full flex-col space-y-4">
			<motion.div
				ref={notifRef}
				whileTap={{
					scale: 1.1,
					transition: {
						type: 'spring',
						stiffness: 700,
						damping: 30,
					},
				}}
				style={{
					scale: show ? 1.1 : 1,
				}}
				onMouseDown={() => setShow(true)}
				className="flex min-w-52 flex-col space-y-3 overflow-hidden rounded-lg border bg-card transition-all hover:bg-muted"
			>
				<div className="flex items-center gap-x-3 px-4 pb-2 pt-3">
					<Avatar className="h-6 w-6">
						<AvatarImage
							src={'https://github.com/mhmmdvg.png'}
							alt={"mhmmdvg's avatar"}
						/>
						<AvatarFallback>mhmmdvg</AvatarFallback>
					</Avatar>
					<div className="flex w-full flex-col">
						<div className="flex w-full flex-row items-center justify-between">
							<p className="text-sm font-medium text-foreground">
								Mhmmdvg
							</p>
							<p className="text-xs text-muted-foreground">19m ago</p>
						</div>
						<p className="text-sm text-accent-foreground">Follow you!</p>
					</div>
				</div>
			</motion.div>

			{show && (
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					exit={{ opacity: 0 }}
					transition={{
						ease: 'easeOut',
						stiffness: 500,
						damping: 20,
						duration: 0.6,
					}}
					className="flex w-20 flex-row items-center space-x-1 self-center overflow-hidden rounded-lg border bg-card p-1 transition-all hover:cursor-pointer hover:bg-muted"
				>
					<p>Share</p> <CornerUpLeft className="h-4 w-4" />
				</motion.div>
			)}
		</div>
	);
};
export default Notification;
