export interface Project {
  name: string;
  status_ES: "Activo" | "Pausado" | "Cerrado" | "Trabajando en mejoras";
  status_EN: "Active" | "Paused" | "Closed" | "Working on Improvements";
  description_ES: string;
  description_EN: string;
  tags: string;
  url: string;
  image: string;
  plattform: string;
}
