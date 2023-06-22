"use client";
import { useLayoutEffect } from "react";
import Marquee from "./components/marquee";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";
import StackSection from "./components/stackSection";
// import { Arrow } from "./image";

export default function HomePage() {
  useLayoutEffect(() => {
    let scroll;

    import("locomotive-scroll")
      .then((locomotiveModule) => {
        scroll = new locomotiveModule.default({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });
        new ResizeObserver(() => scroll.update()).observe(
          document.querySelector("[data-scroll-container]")
        );
        setTimeout(() => {
          scroll.init();
        }, 100);
        document.addEventListener("DOMContentLoaded", function () {
          function ScrollUpdateDelay() {
            setTimeout(function () {
              scroll.update();
            }, 500);
          }

          ScrollUpdateDelay();
        });
      })
      .catch((error) => {
        // Handle import error here
        console.error("Failed to import locomotive-scroll", error);
      });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <>
      <div data-scroll-container className="data-scroll-container p-4">
        <div className="md:px-52">
          <section
            data-scroll-section
            className="relative h-[70vh] md:h-[80vh] flex items-center justify-center font-medium mb-28 md:mb-36"
          >
            <HeroSection />
          </section>

          <section data-scroll-section className="relative bg-black">
            <ProjectsSection />
          </section>
        </div>

        {/* <section data-scroll-section className="text-white">
          <Marquee />
        </section> */}

        {/* <section
          data-scroll-section
          className="flex items-center justify-center"
        >
          <StackSection />
        </section> */}

        <section className="bottom-padding h-[12px] md:h-[120px]" />
      </div>
    </>
  );
}
