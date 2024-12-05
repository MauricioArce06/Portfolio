"use client";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslations } from "next-intl";
import { env } from "@/Config/envCon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
    contact_number: 0,
  });

  useEffect(() => {
    try {
      if (!env.publicKey) {
        throw new Error("Invalid public key");
      }
      emailjs.init(env.publicKey);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const t = useTranslations("Contact");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFieldEmpty = (field: string) => field || field.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(t("swalSent"));
      if (isFieldEmpty(formData.from_name) == false) {
        throw new Error(`${t("swalErrorName")}`);
      }
      if (isFieldEmpty(formData.reply_to) == false) {
        throw new Error(`${t("swalErrorEmail")}`);
      }

      if (isFieldEmpty(formData.message) == false) {
        throw new Error(`${t("swalErrorMessage")}`);
      }

      if (!env.idService) {
        throw new Error("Invalid service ID");
      }
      if (!env.idTemplate) {
        throw new Error("Invalid template ID");
      }
      if (!env.publicKey) {
        throw new Error("Invalid public key");
      }
      emailjs
        .sendForm(
          env.idService, // Reemplaza con tu ID del servicio
          env.idTemplate, // Reemplaza con tu ID del formulario en EmailJS
          e.target,
          env.publicKey // Reemplaza con tu clave pública de EmailJS
        )
        .then(() => {
          Swal.fire({
            animation: true,
            icon: "success",
            text: t("swalSent"),
            showConfirmButton: true,
          });
        });
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          animation: true,
          icon: "error",
          title: "Error",
          text: error.message,
          showConfirmButton: true,
        });
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  const generateContactNumber = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  return (
    <div
      id="contactme"
      className="container py-15 px-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32"
    >
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly gap-4 w-full h-full md:w-1/4 md:h-1/2 "
      >
        <input
          placeholder={t("I1")}
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="border-2 border-black w-full rounded px-6 py-4"
        />

        <input
          placeholder={t("I2")}
          type="email"
          name="reply_to"
          value={formData.reply_to}
          onChange={handleChange}
          required
          className="border-2 border-black w-full rounded px-6 py-4"
        />

        <textarea
          placeholder={t("I3")}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border-2 border-black w-full rounded px-6 py-4"
        ></textarea>

        <input
          type="hidden"
          name="contact_number"
          value={generateContactNumber()}
        />
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <button
            type="submit"
            className="py-5 px-4 rounded bg-black border-black border-2 text-white text-xl hover:bg-neutral-700 active:bg-white active:text-black transition-all"
          >
            {t("I4")}
          </button>
          <a href="https://www.linkedin.com/in/mauricio--arce/">
            <div className="w-14 h-14 border-2 border-black bg-white rounded flex items-center justify-center hover:invert transition-all">
              <svg
                className="h-10 w-10 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
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
        </div>
      </form>
      <div>
        <h1 className="text-5xl md:text-7xl text-pretty mb-2 font-extrabold">
          {t("h1")}
          <br />
          <span className="outlined-text">{t("span")}</span>
        </h1>
        <p className="text-base mt-5 text-zinc-500">
          {t("p1")}
          <br />
          {t("p2")}
          <br />
          {t("p3")}
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
