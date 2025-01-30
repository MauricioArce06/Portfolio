"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutMe() {
  const t = useTranslations("About Me");
  return (
    <div
      id="aboutme"
      className="container flex flex-col ml-8 md:space-x-20 md:flex-row justify-around content-center overflow-hidden"
    >
      <div className="w-6/12 md:w-4/12 2xl:w-10/12 md:ml-44">
        <img
          src="/chico2.svg"
          alt="chico"
          className="object-contain md:w-auto md:h-auto"
        />
      </div>

      <div className="w-10/12 md:w-8/12 md:mr-auto 2xl:w-full">
        <h1 className=" text-3xl md:text-5xl font-light mb-6">
          {t("h1")} <span className="font-bold">{t("span")}</span>
        </h1>
        <div className="text-zinc-500 ">
          <p className="text-base md:text-sm 2xl:text-base">{t("p1")}</p>
          <br />
          <p className="text-base md:text-sm 2xl:text-base">{t("p2")}</p>
          <br />
          <p className="text-base md:text-sm 2xl:text-base">{t("p3")} </p>
        </div>
      </div>
    </div>
  );
}
