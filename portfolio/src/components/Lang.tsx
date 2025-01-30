"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Lang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("en"); // Idioma predeterminado
  const [showMenu, setShowMenu] = useState(false); // Controlar el montaje del menú
  const t = useTranslations("Lang");
  const router = useRouter();

  // Obtener el idioma actual de las cookies del cliente
  useEffect(() => {
    const getLangFromCookies = () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="))
        ?.split("=")[1];
      setLang(cookieValue || "en"); // Si no hay cookie, usa "en"
    };

    getLangFromCookies();
  }, []);

  // Manejar el cambio de idioma
  const handleChangeLang = (selectedLang: string) => {
    document.cookie = `NEXT_LOCALE=${selectedLang}; path=/`; // Actualiza la cookie
    setLang(selectedLang); // Actualiza el estado local
    closeMenu(); // Cierra el menú al seleccionar
    router.push(`/${selectedLang}`); // Redirige al idioma seleccionado
  };

  // Función para abrir el menú
  const openMenu = () => {
    setShowMenu(true); // Montar el menú
    setTimeout(() => setIsOpen(true), 10); // Activar la animación
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsOpen(false); // Desactivar la animación
    setTimeout(() => setShowMenu(false), 300); // Desmontar el menú después de la transición
  };

  return (
    <div className="relative text-center w-auto">
      {/* Botón principal */}
      <div className="group hidden md:block">
        <button
          onClick={() => (isOpen ? closeMenu() : openMenu())}
          className=" md:text-lg 2xl:text-xl hidden md:block font-semibold rounded-lg transition-all"
        >
          {t("title")}
          <div className="h-0.5 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-0 transition-transform  bg-black"></div>
        </button>
      </div>
      <div className="group md:hidden">
        <button>
          <img
            src="/translate.png"
            alt="Logo"
            className="w-7 h-7 inline-block"
            onClick={() => (isOpen ? closeMenu() : openMenu())}
          />
          <div className="h-0.5 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-0 transition-transform  bg-black"></div>
        </button>
      </div>
      {showMenu && (
        <div
          className={`absolute z-10 mt-2 w-full shadow-lg p-4 transform origin-top transition-all duration-300 ${
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          } min-w-max`}
        >
          {/* Opciones de idioma */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleChangeLang("es")}
              className={`text-lg font-medium rounded-md p-2 transition-all ${
                lang === "es"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {t("es")}
            </button>
            <button
              onClick={() => handleChangeLang("en")}
              className={`text-lg font-medium rounded-md p-2 transition-all ${
                lang === "en"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {t("en")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
