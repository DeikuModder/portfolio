interface Project {
  name: string;
  description: string;
  tags: string;
  url: string;
  image: string;
  key: string;
}

const ProjectCard = ({ name, description, tags, url, image, key }: Project) => {
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
