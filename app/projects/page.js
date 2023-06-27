"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Project from "./components/project";
import Modal from "./components/modal";
import { projects } from "./components/projectData";

export default function ProjectsPage() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={`${styles.main}`}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              year={project.year}
              slug={project.slug}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
