import BlurFade from '@/components/motion/BlurFade';
import AboutMe from '@/components/section/AboutMe';
import LabsSection from '@/components/section/LabsSection';
import ProfileSection from '@/components/section/ProfileSection';
import SkillSection from '@/components/section/SkillSection';
import SocialSection from '@/components/section/SocialSection';
import { BLUR_FADE_DELAY } from '@/lib/utils';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <ProfileSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <AboutMe />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <SkillSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <LabsSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <SocialSection />
      </BlurFade>
    </div>
  );
}
