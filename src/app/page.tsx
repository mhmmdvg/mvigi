import AboutMe from '@/components/section/AboutMe';
import LabsSection from '@/components/section/LabsSection';
import ProfileSection from '@/components/section/ProfileSection';
import SkillSection from '@/components/section/SkillSection';
import SocialSection from '@/components/section/SocialSection';
import React from 'react';

export default function Home() {
	return (
		<div className="flex flex-col space-y-10">
			<ProfileSection />
			<AboutMe />
			<SkillSection />
			<LabsSection />
			<SocialSection />
		</div>
	);
}
