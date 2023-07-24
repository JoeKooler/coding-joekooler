import Link from 'next/link';
import React from 'react';
import Layout from '../layouts';
import CardTag from './card_tag';

interface Props {
  src?: string;
  name: string;
  description?: string;
  projectId?: number;
  techStacks?: string[];
}

export default function ProjectCard({
  src,
  name,
  description,
  techStacks,
}: Props) {
  const Tags = () => (
    <>
      {techStacks?.map((e) => (
        <CardTag stackName={e} key={e} />
      ))}
    </>
  );

  return (
    <div className="w-80 md:w-[32rem] flex-shrink-0 rounded-2xl overflow-hidden last:mr-0 font-sans">
      <div
        className={`h-52 md:h-80 bg-center bg-no-repeat bg-cover relative`}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="w-full h-full opacity-0 hover:opacity-100 duration-200 relative">
          <div className="top-0 left-0 w-full h-full bg-black opacity-75 absolute"></div>
          <Link
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-solid border-2 py-2 px-4 absolute duration-500 hover:bg-backgroundGrey hover:invert hover:border-transparent"
            href={'/projects'}
          >
            Read More
          </Link>
        </div>
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
  );
}
