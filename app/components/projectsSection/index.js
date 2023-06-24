"use client";
import ProjectsCard from "../projectsCard";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <>
      <div className="text-center md:text-start">
        <p className="text-4xl md:text-7xl drop-shadow-lg text-[#A3A3A3] border-b-2">
          PROJECTS
        </p>
        <p className="text-2xs md:text-sm inline">A SELECTION OF MY WORK</p>
      </div>
      <div className="mt-20 md:mt-40">
        <div className="inline md:flex justify-around items-center space-y-32 md:space-y-1">
          {" "}
          <div className="space-y-32">
            <ProjectsCard
              i={3}
              name="spotify"
              href="joshuaedo-spotify.vercel.app"
            />
            <ProjectsCard
              i={2}
              name="netflix"
              href="joshuaedo-binge.vercel.app"
            />
            <ProjectsCard
              i={2}
              name="apple"
              href="apple-joshuaedo.vercel.app"
            />
          </div>
          <div className="space-y-32">
            <ProjectsCard i={5} name="joshuaGPT" href="t.me/joshuaedo_bot" />
            <ProjectsCard
              i={2}
              name="google"
              href="joshuaedo-google.vercel.app"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute bottom-10 right-10 md:right-3 text-sm max-w-[7rem] md:max-w-[10rem] text-right">
        <Link href="/projects">VIEW THE REST OF MY WORK</Link>
      </div>
      <div className="flex md:hidden text-xs items-center justify-center pt-10">
        <Link href="/projects">VIEW THE REST OF MY WORK</Link>
      </div>
    </>
  );
}
