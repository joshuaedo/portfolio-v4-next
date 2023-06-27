import Image from "next/image";
import styles from "./page.module.css";

import { getProjects } from "../components/projectData";

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Project({ params }) {
  const [project] = await getProjects(params.slug);

  return (
    <main className={`flex justify-center items-center`}>
      <div className="w-[90%]">
        <section className="text-center md:text-start md:flex pt-[15vh] md:pt-[37vh] pb-[3vh] sticky top-0 z-[-5]">
          <h1 className="section-text uppercase">{project.title}</h1>
          {/* <span className="title-text">{project.year}</span> */}
        </section>
        <section className="bg-black ">
          <div className="flex justify-center items-center">
            <Image
              width={1366}
              height={768}
              alt={project.title}
              src={`/images/projects/${project.src}`}
            />
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </section>
      </div>
    </main>
  );
}
