import React from "react";

interface Props {
  src: string;
  description?: string;
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
        className={`h-52 md:h-80 bg-center bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="h-[7.6rem] md:h-[12.25rem] bg-white pt-8 px-7 pb-4">
        <p className="text-literalBlack text-2xl h-24 overflow-clip text-ellipsis">
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
