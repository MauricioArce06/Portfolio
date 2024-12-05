"use client";
import React from "react";
import S1 from "./S1";
import Skills from "./skills";
import Experience from "./experience";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import Contact from "./Contact";

export default function LandingPage() {
  return (
    <div className="flex flex-col  mt-6">
      <S1 />
      <Skills />
      <Experience />
      <AboutMe />
      <MyProjects />
      <Contact />
    </div>
  );
}
