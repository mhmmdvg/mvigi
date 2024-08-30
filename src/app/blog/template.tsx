'use client';

import { motion } from 'framer-motion';

const Template = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.section
			initial={{
				opacity: 0,
				y: 15,
				filter: 'blur(4px)',
			}}
			animate={{
				opacity: 1,
				y: 0,
				filter: 'blur(0px)',
			}}
			exit={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
			transition={{ ease: 'easeInOut', duration: 0.4 }}
			className="flex h-auto w-full grow flex-col"
		>
			{children}
		</motion.section>
	);
};

export default Template;
