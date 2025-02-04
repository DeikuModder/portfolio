import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import Titles from "../components/Titles";

const WorkExperience = () => {
  const { t } = useTranslation("global");

  const experiences: {
    title: string;
    company: string;
    duration: string;
    description: string[];
    url: string;
  }[] = [
    {
      title: t("work-experience.software-engineer.title"),
      company: t("work-experience.software-engineer.company"),
      duration: t("work-experience.software-engineer.duration"),
      description: t("work-experience.software-engineer.description", {
        returnObjects: true,
      }),
      url: t("work-experience.software-engineer.url"),
    },
    {
      title: t("work-experience.frontend-developer.title"),
      company: t("work-experience.frontend-developer.company"),
      duration: t("work-experience.frontend-developer.duration"),
      description: t("work-experience.frontend-developer.description", {
        returnObjects: true,
      }),
      url: t("work-experience.frontend-developer.url"),
    },
  ];

  return (
    <Section className="p-4 md:p-16" id="work-experience" backgrounColor="">
      <Titles title={t("keywords.work-experience")} />

      <div className="flex flex-col gap-8 mt-4">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-[#E59925] p-4 rounded-lg text-black">
            <h3 className="text-xl font-bold sm:text-2xl">
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {experience.title}
              </a>
            </h3>
            <p className="text-lg font-medium sm:text-xl">
              {experience.company}
            </p>
            <p className="text-sm sm:text-lg">{experience.duration}</p>
            <ul className="mt-2 list-disc list-inside sm:text-lg">
              {experience.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WorkExperience;
