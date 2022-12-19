import Layout from "components/layouts";
import CardTag from "components/ProjectCard/card_tag";
import ProjectCardMock from "components/ProjectCard/project_card.mock";
import P from "components/Typography/P";
import React from "react";

const Projects = () => {
  const Tags = () => (
    <ul className="flex">
      {["Unity", "UniRX", "DoTween"].map((e) => (
        <li key={e}>
          <CardTag stackName={e} buttonTheme={"White"} />
        </li>
      ))}
    </ul>
  );

  return (
    <Layout navBarOptions={{ displayType: "Solid" }}>
      <section className="min-h-screen bg-backgroundGrey flex pt-5 pb-11 text-white">
        <section className="flex-grow flex flex-wrap justify-center gap-4 px-16 pt-6 h-screen overflow-y-auto">
          <ProjectCardMock></ProjectCardMock>
          <ProjectCardMock></ProjectCardMock>
          <ProjectCardMock></ProjectCardMock>
          <ProjectCardMock></ProjectCardMock>
          <ProjectCardMock></ProjectCardMock>
          <ProjectCardMock></ProjectCardMock>
          <ProjectCardMock></ProjectCardMock>
        </section>
        <div className="w-[1px] bg-white mx-1" />

        <section className="flex-shrink-0 basis-[43rem] hidden xl:block px-5 py-5">
          <div className="MockCarousel w-[40rem] h-[25rem] bg-yellow-400 rounded-2xl"></div>
          <div className="pt-9"></div>
          <h1 className="text-5xl font-bold">OIC: A Play to learn game</h1>
          <div className="pt-6" />
          <Tags />
          <div className="pt-6" />
          <div className="h-[1px] bg-white" />
          <div className="pt-9" />
          <P varient={"text"} additionalClass={""}>
            Lorem ipsum Lorem ipsum sdajkldsa jdsakl jaskl djaslkajsmlfkn lkan
            rwropq nowqin rwqoirnqw rikoqnroqw rikoqnroq wrikoqnroqw
            rikoqnroqwri koqnroqwrikoqn roqwrikoqnr oqwrikoqnroqwr
            ikoqnroqwrikoq nroqw Lorem ipsum Lorem ipsum sdajkldsa jdsakl jaskl
            djaslkajsmlfkn lkan rwropq nowqin rwqoirnqw rikoqnroqw rikoqnroq
            wrikoqnroqw rikoqnroqwri koqnroqwrikoqn roqwrikoqnr oqwrikoqnroqwr
            ikoqnroqwrikoq nroqw Lorem ipsum Lorem ipsum sdajkldsa jdsakl jaskl
            djaslkajsmlfkn lkan rwropq nowqin rwqoirnqw rikoqnroqw rikoqnroq
            wrikoqnroqw rikoqnroqwri koqnroqwrikoqn roqwrikoqnr oqwrikoqnroqwr
            ikoqnroqwrikoq nroqw
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
