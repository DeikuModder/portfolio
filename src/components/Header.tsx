import { useTranslation } from "react-i18next";
import Navlink from "./Navlink";

const Header = () => {
  const { t } = useTranslation("global");

  return (
    <header className="md:h-[80px] sticky top-0 left-0 bg-[#2d2d2d] py-4 md:py-0 md:px-4 flex items-center w-full z-30 shadow-lg shadow-neutral-900">
      <div className="w-[20%]">
        <a href="/" className="text-white font-bold text-2xl sm:text-4xl">
          <span className=" text-[#E59925]">&lt;</span>
          HG
          <span className="text-[#E59925]">/&gt;</span>
        </a>
      </div>
      <nav className="w-[80%] flex justify-end">
        <ul className="flex text-sm gap-2 font-bold md:text-2xl md:gap-16">
          <Navlink title={t("keywords.services")} url="#services" />
          <Navlink
            title={t("keywords.work-experience")}
            url="#work-experience"
          />
          <Navlink title={t("keywords.skills")} url="#skills" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
