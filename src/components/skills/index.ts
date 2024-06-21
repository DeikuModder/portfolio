import Astro from "./Astro";
import Css from "./Css";
import Electron from "./Electron";
import Git from "./Git";
import GitHub from "./GitHub";
import Html from "./Html";
import Java from "./Java";
import JavaScript from "./JavaScript";
import MongoDB from "./MongoDB";
import TailwindCss from "./TailwindCss";
import TypeScript from "./TypeScript";
import Vue from "./Vue";
import React from "./React";
import Node from "./Node";
import Supabase from "./Supabase";
import Scss from "./Scss";
import Tauri from "./Tauri";

const SkillsObj = {
  Html,
  Css,
  JavaScript,
  TypeScript,
  TailwindCss,
  React,
  Vue,
  Astro,
  Node,
  Electron,
  Git,
  GitHub,
  MongoDB,
  Java,
  Supabase,
  Scss,
  Tauri,
};

export const SkillsArr = Object.values(SkillsObj);
export const SkillsNamesArr = Object.keys(SkillsObj);

export default SkillsObj;
