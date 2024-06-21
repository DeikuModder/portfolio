import { useTranslation } from "react-i18next";
import Navlink from "./Navlink";

const Header = () => {
  const { t } = useTranslation("global");

  return (
    <header className="h-[80px] bg-[#2d2d2d] flex items-center px-2 w-full">
      <div className="w-[20%]">
        <a href="/" className="text-white font-bold text-2xl sm:text-4xl">
          <span className=" text-[#E59925]">&lt;</span>
          HG
          <span className="text-[#E59925]">/&gt;</span>
        </a>
      </div>
      <nav className="w-[80%] flex justify-end">
        <ul className="flex gap-4 font-bold text-md sm:text-2xl sm:gap-16">
          <Navlink title={t("keywords.services")} url="#services" />
          <Navlink title={t("keywords.projects")} url="#projects" />
          <Navlink title={t("keywords.skills")} url="#skills" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
