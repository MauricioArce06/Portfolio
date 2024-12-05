import React from "react";
import NavBar from "./navBar";
import { Logo } from "./Logo";
import { ResumeButton } from "./resumeButton";
import { Lang } from "./Lang";

export default function Header() {
  return (
    <header className="flex flex-row  justify-between items-center m-7 md:mx-48 md:my-5 md:text-2xl">
      <Logo />
      <Lang />
      <NavBar />
      <div className="hidden md:flex">
        <ResumeButton />
      </div>
    </header>
  );
}
