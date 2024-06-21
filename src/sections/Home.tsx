import { useTranslation } from "react-i18next";
import picture from "../assets/picture.jfif";
import LangButton from "../components/LangButton";
import Section from "../components/Section";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <Section className="p-4 mb-4 sm:flex-row sm:p-16" id="home">
      <div className="flex flex-col justify-center">
        <div className="flex gap-4">
          <div>
            <h1 className="text-2xl font-bold sm:text-6xl">
              Hector Gabriel Trujillo
            </h1>
            <h2 className="text-xl font-medium text-[#E59925] sm:text-5xl">
              {t("home.role")}
            </h2>
          </div>

          <figure className="w-[60px] rounded-full sm:hidden">
            <img
              src={picture}
              alt="picture"
              className="w-[100%] rounded-full"
            />
          </figure>
        </div>

        <p className="w-[80%] sm:text-3xl sm:w-[700px]">{t("home.text")}</p>

        <div className="mt-4 flex items-center gap-4 sm:mt-8 sm:gap-8">
          <a
            href="#contact"
            className="bg-[#E59925] text-black text-xl font-semibold rounded-lg p-1 sm:text-4xl sm:p-4 transition-transform hover:scale-105"
          >
            {t("keywords.contact")}
          </a>

          <a
            href="#projects"
            className="border border-[#E59925] text-xl font-medium rounded-lg p-1 sm:text-4xl sm:p-4 sm:border-4 transition-transform hover:scale-105"
          >
            {t("keywords.projects")}
          </a>

          <LangButton />
        </div>
      </div>

      <figure className="hidden ml-[50px] w-[415px] sm:block">
        <img src={picture} alt="picture" className="w-[100%]" />
      </figure>
    </Section>
  );
};

export default Home;
