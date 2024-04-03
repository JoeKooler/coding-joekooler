import { getProjectFromId, getProjects } from 'actions/projects';
import Layout from 'components/layouts';
import CardTag from 'components/ProjectCard/card_tag';
import ProjectCard from 'components/ProjectCard/project_card';
import ProjectCardMock from 'components/ProjectCard/project_card.mock';
import P from 'components/Typography/P';
import { TECHSTACK } from 'constants/techStack';
import { Alert, Carousel } from 'flowbite-react';
import { ProjectHLDetail } from 'pages/api/projects';
import { ProjectDetails } from 'pages/api/projects/[id]';
import React, { useEffect, useState } from 'react';
import useCurrentTabStore from 'stores/currentTab';

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

  const [isProjectPanelOpen, setIsProjectPanelOpen] = useState<boolean>(false);

  const { setToProjects } = useCurrentTabStore();

  useEffect(() => {
    setToProjects();
  }, []);

  useEffect(() => {
    onProjectCardClick(data[0].id);
  }, [data.length > 0]);

  console.log('SelectedId ', selectedId);
  console.log('Data ', data);

  const onProjectCardClick = async (id: string) => {
    try {
      const projectDetail = await fetchProjectDetail(id);
      setSelectedId(id);
      setSelectedProjectData(projectDetail);
      setIsProjectPanelOpen(true);
    } catch (error) {
      console.error('Nooooo...', error);
      alert('No data... (yet?)');
    }
  };

  const fetchProjectDetail = async (id: string) => {
    try {
      return (await getProjectFromId(id)).data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <Layout navBarOptions={{ displayType: 'Solid' }}>
      <>
        <section className="min-h-screen bg-backgroundGrey flex pt-5 pb-11 text-white">
          <section className="flex-grow flex flex-wrap-reverse justify-between gap-4 px-2 md:px-16 pt-24 lg:pt-6 h-screen overflow-y-auto">
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
                  await onProjectCardClick(id);
                }}
              ></ProjectCard>
            ))}
          </section>
          <div className="w-[1px] bg-white mx-1" />

          <section className="flex-shrink-0 basis-[43rem] hidden xl:block px-5 py-5">
            <Carousel className="w-[40rem] h-[25rem] rounded-2xl">
              {selectedProjectData?.imageURLs.map((url, i) => {
                console.log('URL ', url);
                return (
                  <img
                    src={url}
                    alt={`img_${i}`}
                    key={url}
                    className="w-[40rem] h-[25rem] object-contain"
                  />
                );
              })}
            </Carousel>

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
              {/* <div>Github Icon</div> */}
              <div></div>
              <div>Made In 06/12/2022</div>
            </div>
          </section>
        </section>

        <section
          className={`absolute top-0 right-0 h-full xl:hidden block inset-y-0 text-white bg-backgroundGrey py-5 px-10 z-20 transition-transform duration-500 ease-in-out transform ${
            isProjectPanelOpen ? 'translate-x-0' : 'translate-x-[200%]'
          }`}
        >
          <button
            onClick={() => {
              setIsProjectPanelOpen(false);
            }}
          >
            {'<-'}
          </button>
          <Carousel className="w-full h-[25rem] rounded-2xl">
            {selectedProjectData?.imageURLs.map((url, i) => {
              console.log('URL ', url);
              return (
                <img
                  src={url}
                  alt={`img_${i}`}
                  key={url}
                  className="w-[40rem] h-[25rem] object-contain"
                />
              );
            })}
          </Carousel>

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
      </>
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
