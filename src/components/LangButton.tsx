import { useTranslation } from "react-i18next";

const LangButton = () => {
  const { i18n } = useTranslation("global");

  return (
    <select
      defaultValue={window.localStorage.getItem("lang") || "en"}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
        window.localStorage.setItem("lang", e.target.value);
      }}
      className="text-black font-bold text-xl outline-none sm:text-3xl"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
};

export default LangButton;
