"use client";
import ProjectsCard from "../projectsCard";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <>
      <div className="text-center md:text-start mt-24">
        <p className="section-text">PROJECTS</p>
        <p className="title-text inline">A SELECTION OF MY WORK</p>
      </div>
      <div className="mt-20 md:mt-40 mb-16">
        <div className="inline md:flex justify-around items-center space-y-32 md:space-y-1">
          {" "}
          <div className="space-y-32">
            <ProjectsCard i={3} name="spotify" slug='spotify'/>
            <ProjectsCard i={2} name="netflix" slug='netflix'/>
            <ProjectsCard i={2} name="apple" slug='apple'/>
          </div>
          <div className="space-y-32">
            <ProjectsCard i={5} name="joshuaGPT" slug='joshua-gpt'/>
            <ProjectsCard i={2} name="google" slug='google'/>
          </div>
        </div>
      </div>
      <div className="line-height title-text link hidden md:flex absolute bottom-10 right-10 md:right-3 text-sm max-w-[7rem] md:max-w-[10rem] text-right">
        <Link href="/projects">VIEW THE REST OF MY WORK ↗</Link>
      </div>
      <div className="title-text link flex md:hidden text-xs items-center justify-center pt-10">
        <Link href="/projects">VIEW THE REST OF MY WORK ↗</Link>
      </div>
    </>
  );
}
