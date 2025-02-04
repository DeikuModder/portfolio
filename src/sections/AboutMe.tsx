import { useTranslation } from "react-i18next";
import picture from "../assets/pic-2.webp";
import Section from "../components/Section";
import Titles from "../components/Titles";
import AboutMeText from "../components/AboutMeText";

const AboutMe = () => {
  const { t } = useTranslation("global");

  return (
    <Section className="gap-2 p-4 items-center md:p-16 " id="about-me">
      <Titles title={t("keywords.about-me")} />

      <div className="flex flex-col items-center md:flex-row-reverse md:justify-around">
        <figure className="w-[150px] aspect-square rounded-full sm:w-[40%]">
          <img
            src={picture}
            alt="picture"
            className="w-[100%] aspect-square object-cover rounded-full"
          />
        </figure>

        <AboutMeText />
      </div>
    </Section>
  );
};

export default AboutMe;
