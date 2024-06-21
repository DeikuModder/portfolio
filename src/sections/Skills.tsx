import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import Titles from "../components/Titles";
import { SkillsArr } from "../components/skills";

const Skills = () => {
  const { t } = useTranslation("global");

  return (
    <Section className="items-center p-2 sm:p-16" id="skills">
      <Titles title={t("keywords.skills")} />

      <div className="flex flex-wrap justify-center gap-2 max-w-[500px]">
        {SkillsArr.map((skill) => {
          return skill();
        })}
      </div>
    </Section>
  );
};

export default Skills;
