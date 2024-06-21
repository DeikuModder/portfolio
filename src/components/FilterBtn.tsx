import EditMenu from "./EditMenu";
import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { SkillsArr, SkillsNamesArr } from "./skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { PlattformsArr, PlattformsNames } from "./plattforms";
import { useTranslation } from "react-i18next";

const FilterBtn = ({
  setSkill,
  skill,
  setPlattform,
  plattform,
}: {
  setSkill: React.Dispatch<React.SetStateAction<string>>;
  skill: string;
  setPlattform: React.Dispatch<React.SetStateAction<string>>;
  plattform: string;
}) => {
  const { t } = useTranslation("global");

  return (
    <EditMenu buttonIcon={faFilter} title={t("filter.title")}>
      <h3 className="font-semibold mb-2">{t("filter.plattform.title")}</h3>
      <ul className="flex flex-wrap gap-2 mb-2">
        {PlattformsNames.map((platform, index) => {
          return (
            <li key={`${platform}-${index}`}>
              <button
                onClick={() =>
                  setPlattform((prev) =>
                    prev === platform.toLocaleLowerCase()
                      ? ""
                      : platform.toLocaleLowerCase()
                  )
                }
                className={`${
                  platform.toLocaleLowerCase() ===
                    plattform.toLocaleLowerCase() &&
                  "border-2 border-[#E59925] rounded-xl flex justify-center items-center gap-2"
                }`}
              >
                {platform.toLocaleLowerCase() ===
                  plattform.toLocaleLowerCase() && (
                  <FontAwesomeIcon
                    icon={faX}
                    className="font-bold text-[#E59925]"
                  />
                )}{" "}
                {PlattformsArr[index]()}
              </button>
            </li>
          );
        })}
      </ul>

      <h3 className="font-semibold mb-2">{t("filter.language")}</h3>
      <ul className="flex flex-wrap gap-2">
        {SkillsNamesArr.map((skillName, index) => {
          return (
            <li key={skillName}>
              <button
                onClick={() =>
                  setSkill((prev) => (prev === skillName ? "" : skillName))
                }
                className={`${
                  skillName === skill &&
                  "border-2 border-[#E59925] rounded-xl flex justify-center items-center gap-2"
                }`}
              >
                {skillName === skill && (
                  <FontAwesomeIcon
                    icon={faX}
                    className="font-bold text-[#E59925]"
                  />
                )}{" "}
                {SkillsArr[index]()}
              </button>
            </li>
          );
        })}
      </ul>
    </EditMenu>
  );
};

export default FilterBtn;
