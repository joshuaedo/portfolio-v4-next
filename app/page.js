"use client";
import { Arrow, homeImages } from "./image";
import { useLayoutEffect } from "react";
import HomeCard from "./components/card";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";
// gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [
    amazonOne,
    amazonTwo,
    amazonThree,
    appleOne,
    appleTwo,
    googleOne,
    googleTwo,
    joshuaGPTOne,
    joshuaGPTTwo,
    joshuaGPTThree,
    joshuaGPTFour,
    joshuaGPTFive,
    netflixOne,
    netflixTwo,
    netflixThree,
    netflixFour,
    spotifyOne,
    spotifyTwo,
    spotifyThree,
  ] = homeImages;

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
    <div data-scroll-container className="data-scroll-container p-4 md:px-52">
      <section
        data-scroll-section
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center font-medium mb-28 md:mb-36"
      >
        <div className="text-center md:text-end relative">
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
      </section>

      <section data-scroll-section className="relative bg-black">
        <div className="text-center md:text-start">
          <p className="text-4xl md:text-7xl drop-shadow-lg text-[#A3A3A3] border-b-2">
            PROJECTS
          </p>
          <p className="text-2xs md:text-sm inline">A SELECTION OF MY WORK</p>
        </div>
        <div className="mt-20 md:mt-40">
          <div className="inline md:flex justify-around items-center space-y-32 md:space-y-1">
            {" "}
            <div
              data-scroll
              data-scroll-speed="0.45"
              data-scroll-delay="0.0045"
              className="space-y-32"
            >
              <HomeCard
                imgSrc={spotifyThree}
                name="spotify"
                href="joshuaedo-spotify.vercel.app"
              />
              <HomeCard
                imgSrc={netflixTwo}
                name="netflix"
                href="joshuaedo-binge.vercel.app"
              />
              <HomeCard
                imgSrc={appleTwo}
                name="apple"
                href="apple-joshuaedo.vercel.app"
              />
            </div>
            <div
              data-scroll
              data-scroll-speed="0.90"
              data-scroll-delay="0.0090"
              className="space-y-32"
            >
              <HomeCard
                imgSrc={joshuaGPTFive}
                name="joshuaGPT"
                href="t.me/joshuaedo_bot"
              />
              <HomeCard
                imgSrc={googleTwo}
                name="google"
                href="joshuaedo-google.vercel.app"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute bottom-10 right-10 md:right-3 text-2xs md:text-sm max-w-[7rem] md:max-w-[10rem] text-right">
          <div>VIEW THE REST OF MY WORK</div>
        </div>
      </section>

      <section className="helper-section" />

      {/* <section data-scroll-section class="relative marquee text-white">
        <div className="text-white flex md:hidden absolute top-10 text-2xs text-center items-center justify-center w-full">
          <div>VIEW THE REST OF MY WORK</div>
        </div>
        <div class="marquee__group">
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
        </div>
        <div class="marquee__group" aria-hidden="true">
          <span>hello there</span>
          <span>hello there</span>
          <span>hello there</span>
        </div>
      </section> */}
    </div>
  );
}
