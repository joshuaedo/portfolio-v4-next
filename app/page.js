import Marquee from "./components/marquee";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";
// import StackSection from "./components/stackSection";
// import { Arrow } from "./image";

export default function HomePage() {
  return (
    <>
      <div className="data-scroll-container p-4">
        <div className="md:px-52">
          <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center font-medium mb-28 md:mb-36">
            <HeroSection />
          </section>
        </div>

        <div className="md:px-52">
          <section className="relative bg-black">
            <ProjectsSection />
          </section>

          {/* <section
        
          className="flex items-center justify-center"
        >
          <StackSection />
        </section> */}
        </div>

        <section>
          <Marquee />
        </section>
      </div>
    </>
  );
}
