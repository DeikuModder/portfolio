import { useTranslation } from "react-i18next";

const Adjectives = () => {
  const { t } = useTranslation("global");

  return (
    <div className="bg-[#E59925] flex items-center justify-center py-4 sm:text-2xl sm:gap-16">
      <p className="font-semibold sm:font-bold">
        &lt;
        <span className="text-black">{t("adjectives.development")}</span>
        /&gt;
      </p>

      <p className="font-semibold sm:font-bold">
        &lt;
        <span className="text-black">UI/UX</span>
        /&gt;
      </p>
    </div>
  );
};

export default Adjectives;
