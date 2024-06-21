import { useTranslation } from "react-i18next";
import picture from "../assets/picture.jfif";
import Section from "../components/Section";
import Titles from "../components/Titles";
import AboutMeText from "../components/AboutMeText";

const AboutMe = () => {
  const { t } = useTranslation("global");

  return (
    <Section className="gap-2 p-4 items-center sm:p-16" id="about-me">
      <Titles title={t("keywords.about-me")} />

      <div className="flex flex-col items-center sm:flex-row-reverse sm:justify-end">
        <figure className="w-[150px] rounded-full sm:w-[30%] sm:rounded-none">
          <img
            src={picture}
            alt="picture"
            className="w-[100%] rounded-full sm:rounded-none"
          />
        </figure>

        <AboutMeText />
      </div>
    </Section>
  );
};

export default AboutMe;
