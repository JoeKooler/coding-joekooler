import Link from 'next/link';
import React from 'react';
import ProjectCard from './project_card';
import { ProjectCardProps } from 'interfaces/projects/project_card';

export default function ShowMoreCard(props: ProjectCardProps) {
  return (
    <ProjectCard
      {...props}
      ImageCoverSlot={
        <div className="w-full h-full opacity-0 hover:opacity-100 duration-200 relative">
          <div className="top-0 left-0 w-full h-full bg-black opacity-75 absolute"></div>
          <Link
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-solid border-2 py-2 px-4 absolute duration-500 hover:bg-backgroundGrey hover:invert hover:border-transparent"
            href={'/projects'}
          >
            Read More
          </Link>
        </div>
      }
    />
  );
}
