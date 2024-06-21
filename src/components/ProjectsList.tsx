import { useState } from "react";
import projects from "../projects";
import { filterProduct } from "../utils/filterProject";
import FilterBtn from "./FilterBtn";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const ProjectsList = () => {
  const [skill, setSkill] = useState("");
  const [plattform, setPlattform] = useState("");
  const { i18n } = useTranslation("global");

  const filteredProjects = projects.filter((project) =>
    filterProduct(project, skill, plattform)
  );

  return (
    <>
      <FilterBtn
        setSkill={setSkill}
        skill={skill}
        plattform={plattform}
        setPlattform={setPlattform}
      />
      <div className="flex flex-wrap gap-2 justify-center mt-8 sm:gap-8">
        {filteredProjects.map((project, index) => {
          return (
            <ProjectCard
              name={project.name}
              description={
                i18n.language === "es"
                  ? project.description_ES
                  : project.description_EN
              }
              tags={project.tags}
              url={project.url}
              image={project.image}
              key={`${project.name}-${index}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsList;
