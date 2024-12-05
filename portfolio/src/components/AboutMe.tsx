"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutMe() {
  const t = useTranslations("About Me");
  return (
    <div
      id="aboutme"
      className="container flex flex-col md:space-x-20 md:flex-row mx-8 md:mx-44 justify-around overflow-hidden"
    >
      <div className="w-10/12 md:w-full">
        <img src="/chico2.svg" alt="chico" className="object-contain" />
      </div>

      <div className="w-10/12 md:w-2/12  lg:w-full">
        <h1 className=" text-3xl md:text-5xl font-light mb-6">
          {t("h1")} <span className="font-bold">{t("span")}</span>
        </h1>
        <div className="text-zinc-500 ">
          <p className="text-base md:text-base">{t("p1")}</p>
          <br />
          <p className="text-base md:text-base">{t("p2")}</p>
          <br />
          <p className="text-base md:text-base">{t("p3")} </p>
        </div>
      </div>
    </div>
  );
}
