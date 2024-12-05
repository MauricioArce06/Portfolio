"use client";
import { useTranslations } from "next-intl";
import React from "react";
interface experience {
  name: string;
  description: string;
  date: string;
  image: string;
}

export default function Experience() {
  const t = useTranslations("Experience");
  const experience: experience[] = [];
  return (
    <div
      id="experience"
      className="my-14 bg-black text-white justify-center items-center text-center"
    >
      <h1 className="text-2xl md:text-6xl pt-14 pb-5">
        {t("h1")} <span className="font-bold">{t("span")}</span>
      </h1>
      <div className="flex flex-col items-center justify-center">
        {experience.length > 0 ? (
          experience.map((item) => (
            <div
              key={item.name}
              className="border-2 border-zinc-500 hover:bg-zinc-500"
            >
              <div className="flex  flex-row justify-between">
                <div>
                  <img src={item.image} alt={item.name} />
                  <h2>{item.name}</h2>
                </div>
                <p>{item.date}</p>
              </div>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <div className=" w-10/12 md:w-2/5 border-2 p-20 mb-8 rounded-lg border-zinc-500  hover:bg-zinc-500">
            <p className="text-base md:text-2xl ">{t("p")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
