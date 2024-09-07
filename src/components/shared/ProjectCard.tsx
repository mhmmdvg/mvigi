import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type TCardProps = {
  title: string;
  description?: string;
  date?: string;
  href: string;
};

export default function ProjectCard({
  title,
  description,
  date,
  href,
}: TCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      className="anim flex w-full flex-row items-center justify-between rounded-md bg-popover p-2 mix-blend-difference transition-all hover:cursor-pointer hover:bg-primary/10"
    >
      <div className="flex flex-col ">
        <h1>{title}</h1>
        <p className="text-xs font-light text-muted-foreground">
          {description}
        </p>
      </div>
      {date && (
        <p className="text-xs text-muted-foreground">{formatDate(date)}</p>
      )}
    </Link>
  );
}
