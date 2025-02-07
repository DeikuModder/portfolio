import venedolar from "./assets/venedolar.jpg";
import grillRide from "./assets/grill-ride.webp";
import inresume from "./assets/in-resume.webp";
import { Project } from "./types";

const projects: Project[] = [
  {
    name: "Venedolar",
    status_EN: "Active",
    status_ES: "Activo",
    description_ES:
      "Aplicación de escritorio que monitorea el valor del dolar con respecto al bólivar en tiempo real",
    description_EN:
      "Desktop app that keeps tracks of the price equivalency between the dollar and bolivar in real time",
    tags: "Vue, Typescript, TailwindCSS, Tauri",
    url: "https://venedolar-landing-page.vercel.app",
    image: venedolar,
    plattform: "desktop",
  },
  {
    name: "Grill Ride",
    status_EN: "Active",
    status_ES: "Activo",
    description_ES:
      "SPA de un negocio de comida rapida ficticio llamado Grill Ride, hecho con fines de aprender nuevas tecnologías y diseño de interfaz básico para negocios de este estílo",
    description_EN:
      "SPA of a fake fast food brand called Grill Ride, made with the purpose of learning new technologies and basic UI design for these kind of business",
    tags: "React, Typescript, NodeJs, ExpressJs, MongoDB, TailwindCSS",
    url: "https://burger-web-site.vercel.app",
    image: grillRide,
    plattform: "web",
  },
  {
    name: "In-Resumé",
    status_EN: "Active",
    status_ES: "Activo",
    description_ES:
      "Aplicación web para crear de manera rápida e intuitiva curriculums gratis",
    description_EN:
      "Web app to create a resume in a fast and intuitive way for free",
    tags: "React, Typescript, TailwindCSS",
    url: "https://in-resume.vercel.app",
    image: inresume,
    plattform: "web",
  },
  {
    name: "Keysaver",
    status_EN: "Active",
    status_ES: "Activo",
    description_ES:
      "Aplicación de escritorio para administrar de manera local contraseñas",
    description_EN: "Desktop app for the administration of passwords",
    tags: "React, Typescript, TailwindCSS, Tauri, Github Actions",
    url: "https://keysaver-landing-page.vercel.app",
    image: "https://keysaver-landing-page.vercel.app/landing-preview.jpg",
    plattform: "desktop",
  },
];

export default projects;
