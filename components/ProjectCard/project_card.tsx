import React, { ReactNode } from 'react';
import CardTag from './card_tag';
import { ProjectCardProps } from 'interfaces/projects/project_card';

export default function ProjectCard({
  id,
  src,
  name,
  description,
  techStacks,
  ImageCoverSlot,
  focused = false,
  onClick,
}: ProjectCardProps) {
  const Tags = () => (
    <>
      {techStacks?.map((e) => (
        <CardTag stackName={e} key={e} />
      ))}
    </>
  );

  return (
    <div className="relative w-80 flex-grow max-h-[32.25rem] md:w-[32rem] flex-shrink-0 last:mr-0 font-sans">
      {focused && (
        <div className="absolute top-[-1.25%] left-[-1.25%] md:w-[102.5%] md:h-[102.5%] border-2 rounded-2xl"></div>
      )}
      <div
        className={`rounded-2xl overflow-hidden`}
        onClick={() => {
          if (onClick) return onClick(id);
        }}
      >
        <div
          className={`h-52 md:h-80 bg-center bg-no-repeat bg-cover relative`}
          style={{ backgroundImage: `url(${src})` }}
        >
          {ImageCoverSlot ?? <></>}
        </div>
        <div className="h-36 md:h-[12.25rem] bg-white py-1 md:py-4 px-7 ">
          <h1 className="font-bold text-literalBlack text-lg md:text-2xl overflow-clip text-ellipsis">
            {name}
          </h1>
          <p
            title={description}
            className="text-literalBlack text-base h-[1.75rem] md:h-[4.5rem] overflow-clip text-ellipsis md:line-clamp-3"
          >
            {description}
          </p>

          <div className="pt-2"></div>
          <div className="h-[1px] w-full bg-backgroundGrey"></div>
          <div className="pt-2"></div>
          <div className="flex">
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
}
