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

      <section
        data-scroll-section
        className="min-h-screen relative mb-12 md:mb-36 bg-black"
      >
        <div className="text-center md:text-start">
          <p className="text-4xl md:text-7xl drop-shadow-lg text-[#A3A3A3] border-b-2">
            PROJECTS
          </p>
          <p className="text-2xs md:text-sm inline">A SELECTION OF MY WORK</p>
        </div>
        <div className="mt-20 md:mt-40">
          <div className="inline md:flex justify-around items-center space-y-32 md:space-y-1">
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

      <section data-scroll-section className="min-h-screen relative">
        <div className="text-white flex md:hidden absolute top-10 text-2xs text-center items-center justify-center w-full">
          <div>VIEW THE REST OF MY WORK</div>
        </div>
      </section>
      {/* 
      <section data-scroll-section className="relative">
        <Arrow h="h-4" w="h-4" color="white" />
        <div className="line-height absolute bottom-20 md:bottom-50 right-10 md:right-3 text-2xs md:text-sm flex max-w-[7rem] md:max-w-[10rem] text-right">
            <div>AVAILABLE FOR FREELANCE WORK</div>
          </div>
      </section> */}
    </div>
  );
}
