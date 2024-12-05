import { useTranslations } from "next-intl";

/* eslint-disable @next/next/no-img-element */
interface project {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}
export default function MyProjects() {
  const t = useTranslations("Projects");
  const projects: project[] = [
    {
      id: 1,
      name: "DentAll",
      description: t("DAdesc"),
      image: "/projects/dentall.png",
      link: "https://dent-all-black.vercel.app/",
    },
    {
      id: 2,
      name: "Doggos And Tattoos",
      description: t("DaTdesc"),
      image: "/projects/doggosandtattos.png",
      link: "https://doggos-and-tattoos.vercel.app/",
    },
    {
      id: 3,
      name: "Pampa",
      description: t("Pdesc"),
      image: "/projects/pampa.png",
      link: "",
    },
  ];

  return (
    <div id="myprojects" className="  bg-black text-white py-15-5 my-14">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-5xl font-normal">
          {t("h1")} <span className="font-extrabold">{t("span")}</span>
        </h1>
        {projects.map((project) => (
          <div key={project.id}>
            {project.id % 2 != 0 ? (
              <div className="flex flex-col md:flex-row items-center space-x-10 justify-center my-8">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-10/12  md:w-5/12 rounded-2xl my-2"
                />
                <div>
                  <p className="font-extrabold text-2xl md:text-5xl">
                    {project.id}
                  </p>
                  <h2 className="font-bold text-xl md:text-4xl">
                    {project.name}
                  </h2>
                  <p className="text-base font-normal text-zinc-500">
                    {project.description}
                  </p>
                  {project.link != "" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        className="text-white h-5 w-5 hover:text-neutral-700 transition-all"
                      >
                        <path
                          d="M10.8335 9.16671L17.6668 2.33337"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3335 5.66663V1.66663H14.3335"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <p className="text-zinc-500">{t("ComingSoon")}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center space-x-10 justify-center my-8">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-10/12  md:w-5/12 rounded-2xl my-2 hidden"
                />
                <div>
                  <p className="font-extrabold text-2xl md:text-5xl">
                    {project.id}
                  </p>
                  <h2 className="font-bold text-xl md:text-4xl">
                    {project.name}
                  </h2>
                  <p className="text-base font-normal text-zinc-500">
                    {project.description}
                  </p>
                  {project.link != "" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        className="text-white h-5 w-5 hover:text-neutral-700 transition-all"
                      >
                        <path
                          d="M10.8335 9.16671L17.6668 2.33337"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3335 5.66663V1.66663H14.3335"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <p className="text-zinc-500">Comming soon</p>
                  )}
                </div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="hidden md:w-5/12 rounded-2xl my-2 bg-slate-200  md:flex"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
