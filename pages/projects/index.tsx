import Layout from "components/layouts";
import ProjectCardMock from "components/ProjectCard/project_card.mock";
import React from "react";

const Projects = () => {
  return (
    <Layout navBarOptions={{ displayType: "Solid" }}>
      <section className="min-h-screen bg-backgroundGrey flex pt-5 pb-11 text-white">
        <section className="flex-grow flex flex-wrap justify-center gap-4 px-16 pt-36">
            <ProjectCardMock></ProjectCardMock>
            <ProjectCardMock></ProjectCardMock>
            <ProjectCardMock></ProjectCardMock>
            <ProjectCardMock></ProjectCardMock>
        </section>
        <div className="w-[1px] bg-white" />
        <section className="flex-shrink-0 basis-[700px] hidden xl:block"></section>
      </section>
    </Layout>
  );
};

export default Projects;
