import { useTranslation } from "react-i18next";
import Template from "../skills/Template";

const Movile = () => {
  const { t } = useTranslation("global");

  return (
    <Template name={t("filter.plattform.mobile")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
        <path d="M11 4h2" />
        <path d="M12 17v.01" />
      </svg>
    </Template>
  );
};

export default Movile;
