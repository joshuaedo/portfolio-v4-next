"use client";
import { Arrow } from "./image";
import { useLayoutEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";
// gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useLayoutEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        resetNativeScroll: true,
      });
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container className="data-scroll-container p-4 md:px-52">
      <section
        data-scroll
        data-scroll-speed="0.5"
        className="relative min-h-screen flex items-center justify-center font-medium mb-20 md:mb-36"
      >
        <div className="text-center md:text-end">
          <p className="mr-0 md:mr-16 text-5xl md:text-9xl drop-shadow-lg text-[#A3A3A3]">
            SOFTWARE
          </p>
          <p className="text-5xl md:text-9xl drop-shadow-lg text-[#A3A3A3]">
            ENGINEER
          </p>
          <p className="text-2xs md:text-sm inline">
            SPECIALIZED IN FRONTEND DEVELOPMENT
          </p>
        </div>

        <div className="absolute bottom-10 right-10 md:right-3 text-2xs md:text-sm flex max-w-[7rem] md:max-w-[10rem] text-right">
          <div>AVAILABLE FOR FREELANCE WORK</div>
        </div>
      </section>

      <section
        data-scroll
        data-scroll-speed="0.5"
        className="min-h-screen relative mb-12 md:mb-36"
      >
        <div className="text-center md:text-start">
          <p className="text-3xl md:text-7xl drop-shadow-lg text-[#A3A3A3] border-b-2">
            PROJECTS
          </p>
          <p className="text-2xs md:text-sm inline">A SELECTION OF MY WORK</p>
        </div>
      </section>

      <section className="min-h-screen">
        <Arrow h="h-4" w="h-4" color="white" />
      </section>
    </div>
  );
}
