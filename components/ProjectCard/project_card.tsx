import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  description?: string;
  projectId?: number;
  techStacks?: string[];
}

interface TagProps {
  stackName: string;
}

function CardTag({ stackName }: TagProps) {
  return (
    <div className="h-10 bg-backgroundGrey text-center p-2 rounded-2xl mr-2">
      {stackName}
    </div>
  );
}

export default function ProjectCard({ src, description, techStacks }: Props) {
  const Tags = () => (
    <>
      {techStacks?.map((e) => (
        <CardTag stackName={e} key={e} />
      ))}
    </>
  );

  return (
    <div className="w-80 md:w-[32rem] flex-shrink-0 rounded-2xl overflow-hidden mr-5 md:mr-10 last:mr-0">
      <div
       className={`h-52 md:h-80 bg-center bg-no-repeat bg-cover relative`}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="w-full h-full opacity-0 hover:opacity-100 duration-200 relative">
          <div className="top-0 left-0 w-full h-full bg-black opacity-75 absolute"></div>
          <Link className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-solid border-2 py-2 px-4 absolute" href={"/projects"}>Read More</Link>
        </div>
      </div>
      <div className="h-36 md:h-[12.25rem] bg-white pb-1 pt-2 md:pt-8 md:pb-4 px-7 ">
        <p className="text-literalBlack text-lg md:text-2xl h-16 md:h-24 overflow-clip text-ellipsis">
          Lorem ipsum dsgml;dsgmsdl;gsdmlg;dsmgl;sdmgl;dsgmdsl;gmdls;
        </p>
        <div className="h-[1px] w-full bg-backgroundGrey"></div>
        <div className="pt-2"></div>
        <div className="flex">
          <Tags />
        </div>
      </div>
    </div>
  );
}
