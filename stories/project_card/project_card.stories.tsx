import ProjectCard from "components/ProjectCard/project_card";
import ProjectCardMock from "components/ProjectCard/project_card.mock";
export default {
  title: "Project Card",
  component: ProjectCard,
};

export const Raw = () => <ProjectCard src={""} name={"Project Name"} description={"Project Description"} techStacks={["Stack_1" , "Stack_2"]}/>;
export const Mocked = () => <ProjectCardMock />;
