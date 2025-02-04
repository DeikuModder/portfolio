import { useTranslation } from "react-i18next";
import picture from "../assets/pic-1.webp";
import LangButton from "../components/LangButton";
import Section from "../components/Section";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <Section
      className="p-4 mb-4 md:flex-row md:p-16 md:justify-around"
      id="home"
    >
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

          <figure className="w-[60px] aspect-square rounded-full sm:hidden">
            <img
              src={picture}
              alt="picture"
              className="w-[100%] rounded-full "
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

      <figure className="hidden w-[415px] h-[415px] rounded-full aspect-square sm:block">
        <img
          src={picture}
          alt="picture"
          className="w-[100%] h-[100%] object-cover rounded-full"
        />
      </figure>
    </Section>
  );
};

export default Home;
