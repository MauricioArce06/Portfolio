import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <div className="flex justify-between px-4 md:px-28 items-center h-20 bg-black text-white">
      <div className="flex items-center space-x-4">
        <svg
          viewBox="0 0 24 36"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white w-7 h-7 md:w-6 md:h-9"
        >
          <path d="M23.5294 12.2118C23.5294 16.8819 20.7623 20.9082 16.7793 22.735C18.4612 21.3496 19.5322 19.248 19.5322 16.896C19.5322 12.7642 16.2259 9.40423 12.112 9.32046C12.0574 9.3167 12.0075 9.3167 11.9529 9.3167C11.8983 9.3167 11.8485 9.3167 11.7939 9.32046C10.2673 9.40328 9.05882 10.6663 9.05882 12.2108V26.6814C9.05882 31.4748 5.16988 35.3638 0.376465 35.3638V12.2118C0.376465 5.81928 5.56047 0.635284 11.9529 0.635284C18.3454 0.635284 23.5294 5.81928 23.5294 12.2118Z" />
          <path d="M13.9992 14.2582C15.1294 13.128 15.1294 11.2956 13.9992 10.1654C12.8689 9.03515 11.0365 9.03515 9.90629 10.1654C8.77608 11.2956 8.77608 13.128 9.90629 14.2582C11.0365 15.3884 12.8689 15.3884 13.9992 14.2582Z" />
        </svg>

        <h1 className="font-bold text-lg">
          Mauricio <br />
          Arce
        </h1>
      </div>
      <div className="text-xs text-right">
        <p>©2024 Mauricio Arce</p>
        <p>
          {t("credits")}{" "}
          <a href="https://www.linkedin.com/in/jhanvishah215/">Jhanvi Shah</a>
        </p>
      </div>
    </div>
  );
}
