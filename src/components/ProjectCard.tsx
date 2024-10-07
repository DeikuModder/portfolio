import { useTranslation } from "react-i18next";

interface Project {
  name: string;
  description: string;
  tags: string;
  url: string;
  image: string;
  key: string;
  state: "Activo" | "Pausado" | "Cerrado" | "Active" | "Paused" | "Closed";
}

const ProjectCard = ({
  name,
  description,
  tags,
  url,
  image,
  key,
  state,
}: Project) => {
  const { t } = useTranslation("global");

  return (
    <article
      className="mb-8 bg-[#E59925] rounded-lg w-[170px] flex flex-col gap-2 sm:w-[270px]"
      key={key}
    >
      <figure className="h-[100px] w-full sm:h-[200px]">
        <img src={image} className="h-full w-full" loading="lazy" />
      </figure>

      <div className="p-1 flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <a
            href={url}
            target="_blank"
            className="bg-neutral-900 font-medium p-1 rounded-lg w-fit"
          >
            <h3 className="text-lg font-semibold hover:underline">
              {name} -&gt;
            </h3>
          </a>

          <p className="font-bold mt-1">
            {t("keywords.status")}:{" "}
            <span
              className={`${state === "Active" && "bg-emerald-600"}
            
            ${state === "Activo" && "bg-emerald-600"}

            ${state === "Pausado" && "bg-yellow-400"}

            ${state === "Paused" && "bg-yellow-400"}

            ${state === "Cerrado" && "bg-red-700"}

            ${state === "Closed" && "bg-red-700"}

             px-1 rounded-l
            `}
            >
              {state}
            </span>
          </p>

          <p className="text-black p-1">{description}</p>
        </div>

        <div className="bg-neutral-300 min-h-[55px] p-1 rounded-lg text-black">
          <p>{tags}</p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
