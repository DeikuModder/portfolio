import cvES from "../assets/cvES.pdf";
import cvEN from "../assets/cvEN.pdf";
import cvPic from "../assets/CV.webp";
import cvPicEn from "../assets/CVEN.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const DownloadResume = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <a
      href={i18n.language === "es" ? cvES : cvEN}
      download="Hector-Gabriel-Trujillo-Resume.pdf"
      className="transition-transform hover:scale-105"
    >
      <div className="bg-neutral-900 text-center h-fit p-1 rounded-md mt-10 ">
        <figure className="w-[100px] sm:w-[350px]">
          <img
            src={i18n.language === "es" ? cvPic : cvPicEn}
            alt="cv-ES"
            className="w-full rounded-md"
          />
        </figure>
        <p className="font-bold sm:text-xl">{t("contact.download")}</p>
        <FontAwesomeIcon icon={faDownload} />
      </div>
    </a>
  );
};

export default DownloadResume;
