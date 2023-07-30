import { getProjectFromId, getProjects } from 'actions/projects';
import Layout from 'components/layouts';
import CardTag from 'components/ProjectCard/card_tag';
import ProjectCard from 'components/ProjectCard/project_card';
import ProjectCardMock from 'components/ProjectCard/project_card.mock';
import P from 'components/Typography/P';
import { TECHSTACK } from 'constants/techStack';
import { ProjectHLDetail } from 'pages/api/projects';
import { ProjectDetails } from 'pages/api/projects/[id]';
import React, { useState } from 'react';

const Tags = (tags?: string[]) => (
  <ul className="flex">
    {tags?.map((e) => (
      <li key={e}>
        <CardTag stackName={e} buttonTheme={'White'} />
      </li>
    ))}
  </ul>
);

interface Props {
  data: ProjectHLDetail[];
}

const Projects = ({ data }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedProjectData, setSelectedProjectData] =
    useState<ProjectDetails | null>(null);

  console.log('SelectedId ', selectedId);
  console.log('Data ', data);

  return (
    <Layout navBarOptions={{ displayType: 'Solid' }}>
      <section className="min-h-screen bg-backgroundGrey flex pt-5 pb-11 text-white">
        <section className="flex-grow flex flex-wrap justify-between gap-4 px-16 pt-6 h-screen overflow-y-auto">
          {data.map((datum) => (
            <ProjectCard
              key={datum.id}
              id={datum.id}
              src={datum.imageURL}
              name={datum.name}
              techStacks={datum.techStacks}
              focused={selectedId === datum.id}
              description={datum.description}
              onClick={async (id) => {
                try {
                  const projectDetail = (await getProjectFromId(id)).data;
                  setSelectedId(id);
                  setSelectedProjectData(projectDetail);
                } catch (error) {
                  alert('No data... (yet?)');
                }
              }}
            ></ProjectCard>
          ))}
          {/* <ProjectCard
            id="ttd"
            src="https://storage.googleapis.com/joe-port-bucket-1/292670856_5488351314550386_7274380543853968100_n.jpg"
            name={'TTD'}
            techStacks={[
              TECHSTACK.CSHARP,
              TECHSTACK.UNITY,
              TECHSTACK.UNIRX,
              TECHSTACK.DOTWEEN,
            ]}
            description={`A play to earn A "Play to Learn" game that is both fun and improves players' knowledge about the real-world insurance system. Responsible for Store, Inventory, Mission, Quiz, Daily rewards, Tournament, and Friend list frontend modules using Unity C#`}
            onClick={(id) => setSelectedId(id)}
          ></ProjectCard> */}
        </section>
        <div className="w-[1px] bg-white mx-1" />

        <section className="flex-shrink-0 basis-[43rem] hidden xl:block px-5 py-5">
          <div className="MockCarousel w-[40rem] h-[25rem] bg-yellow-400 rounded-2xl"></div>
          <div className="pt-9"></div>
          <h1 className="text-5xl font-bold">{selectedProjectData?.name}</h1>
          <div className="pt-6" />
          {Tags(selectedProjectData?.techStacks)}
          <div className="pt-6" />
          <div className="h-[1px] bg-white" />
          <div className="pt-9" />
          <P variant={'text'} additionalClass={''}>
            {selectedProjectData?.description}
          </P>
          <div className="pt-9" />
          <div className="h-[1px] bg-white" />
          <div className="pt-9" />

          <div className="flex justify-between">
            <div>Github Icon</div>
            <div>Made In 06/12/2022</div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Projects;

export async function getServerSideProps() {
  try {
    const data = (await getProjects()).data;

    return { props: { data } };
  } catch (error) {
    console.log('Fuckkk ', error);
    return { props: { data: [] } };
  }
}
