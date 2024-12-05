"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ResumeButton } from "./resumeButton";
import { useTranslations } from "next-intl";

const NavLinks = () => {
  const t = useTranslations("Nav");
  const items = [
    { name: `${t("about")}`, href: "#aboutme" },
    { name: t("skills"), href: "#skills" },
    { name: t("projects"), href: "#myprojects" },
    { name: t("contact"), href: "#contactme" },
  ];
  return items.map((item) => (
    <div key={item.name}>
      <Link
        href={item.href}
        className="hover:text-neutral-600  transition-all hover:underline-offset-8 font-semibold text-xl group"
      >
        {item.name}
        <div className="w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform  bg-black"></div>
      </Link>
      <div className="w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform  bg-black"></div>
    </div>
  ));
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <>
      <nav>
        <div className="hidden w-full md:flex flex-row justify-between space-x-8">
          <div className="md:flex flex-row justify-between space-x-8">
            <NavLinks />
          </div>
          <div className="md:hidden">
            <ResumeButton />
          </div>
        </div>

        {/* Modal Button */}
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                <div
                  className={`bg-white p-8 rounded-lg shadow-xl w-3/4 max-w-lg relative transition-all duration-300 ${
                    isOpen ? "translate-y-0" : "-translate-y-full"
                  }`}
                >
                  {/* X Button positioned at the top right */}
                  <X
                    className="w-9 h-9 absolute top-4 right-4 cursor-pointer"
                    onClick={toggleNavbar}
                  />
                  <NavLinks />
                </div>
              </div>
            ) : (
              <Menu className="w-9 h-9" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
