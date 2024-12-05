"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function S1() {
  const t = useTranslations("Home");

  return (
    <div className="container md:mx-auto my-20">
      <section className="flex flex-col md-flex-row-reverse lg:flex-row-reverse justify-between items-center ">
        <img src="/chico.svg" alt="chico" className="hidden md:flex" />
        <img src="/chicoresponsive.svg" alt="" className=" md:hidden" />
        <div className=" ml-8 my-12 md:ml-0 md:my-0">
          <h1 className="text-2xl md:text-7xl ">
            {t("h1P1")}{" "}
            <span className="font-bold">
              Mauricio Arce <br />
              Full Stack{" "}
              <span className="outlined-text-m md:text-7xl">Developer</span>
            </span>{" "}
            <br />
            {t("h1P2")} <span className="font-bold">{t("spanP3")}</span>
          </h1>
          <p className="text-base mt-5 mr-5" style={{ color: "#71717a" }}>
            {t("p1")}
          </p>
        </div>
      </section>
      <div className="flex items-center space-x-4 ml-8 md:ml-0">
        <a href="https://github.com/MauricioArce06" target="_blank">
          <div className="w-14 h-14 border-2 border-black bg-white rounded flex items-center justify-center hover:invert transition-all">
            <svg
              className=" h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/mauricio--arce/" target="_blank">
          <div className="w-14 h-14 border-2 border-black bg-white rounded flex items-center justify-center hover:invert transition-all">
            {/* SVG de LinkedIn incrustado directamente */}
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
        </a>
        <a href="mailto:mauarce34@gmail.com" target="_blank">
          <div className="w-14 h-14 border-2 border-black bg-white rounded flex items-center justify-center hover:invert hover:border-2 transition-all">
            <svg
              className="h-8 w-8 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
