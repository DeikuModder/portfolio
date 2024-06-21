import { Project } from "../types";

export const filterProduct = (
  project: Project,
  search: string,
  plattform: string
) => {
  const searchMatch = project.tags
    .toLocaleLowerCase()
    .includes(search.toLocaleLowerCase());

  if (!searchMatch) return false;

  if (plattform && project.plattform !== plattform) return false;

  return true;
};
