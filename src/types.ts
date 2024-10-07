export interface Project {
  name: string;
  status_ES: "Activo" | "Pausado" | "Cerrado";
  status_EN: "Active" | "Paused" | "Closed";
  description_ES: string;
  description_EN: string;
  tags: string;
  url: string;
  image: string;
  plattform: string;
}
