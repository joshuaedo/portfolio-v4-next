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
    <div className="text-5xl">
      <h1 className="">{project.title}</h1>
    </div>
  );
}
