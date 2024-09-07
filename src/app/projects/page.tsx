import BlurFade from '@/components/motion/BlurFade';
import ProjectCard from '@/components/shared/ProjectCard';
import { getAllPublishedContent } from '@/lib/notion';
import { BLUR_FADE_DELAY } from '@/lib/utils';
import type { Metadata } from 'next';
import React from 'react';

async function fetchProjectData() {
  const res = getAllPublishedContent('Project');

  return res;
}

export const metadata: Metadata = {
  title: 'Project',
  description: 'MVIGI Project',
};

export default async function Project() {
  const project = await fetchProjectData();

  return (
    <div className="flex flex-col space-y-7">
      <section className="flex flex-col space-y-3">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="px-2 font-medium">My Project</h1>
        </BlurFade>
        {project &&
          project.map((item, i) => (
            <BlurFade key={i} delay={BLUR_FADE_DELAY * 2 + i * 0.05}>
              <ProjectCard
                title={item.title}
                href={item.link}
                description={item.description}
                date={item.date}
              />
            </BlurFade>
          ))}
      </section>
    </div>
  );
}
