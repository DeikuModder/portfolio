import { useTranslation } from "react-i18next";
import ProjectsList from "../components/ProjectsList";
import Section from "../components/Section";
import Titles from "../components/Titles";

const Projects = () => {
  const { t } = useTranslation("global");

  return (
    <Section id="projects" className=" bg-[#252525] sm:p-16">
      <Titles title={t("keywords.projects")} />
      <ProjectsList />
    </Section>
  );
};

export default Projects;
