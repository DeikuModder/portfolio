import Astro from "./Astro";
import Css from "./Css";
import Electron from "./Electron";
import Git from "./Git";
import GitHub from "./GitHub";
import Html from "./Html";
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
import NextJS from "./NextJs";
import Figma from "./Figma";

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
  Supabase,
  Scss,
  Tauri,
  NextJS,
  Figma,
};

export const SkillsArr = Object.values(SkillsObj);
export const SkillsNamesArr = Object.keys(SkillsObj);

export default SkillsObj;
