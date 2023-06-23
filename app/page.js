import Marquee from "./components/marquee";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";

export default function HomePage() {
  return (
    <>
      <div className="p-4">
        <section className="md:px-52 relative h-[70vh] md:h-[80vh] flex items-center justify-center font-medium mb-28 md:mb-36">
          <HeroSection />
        </section>

        <section className="font-medium mb-52 md:mb-72">
          <Marquee />
        </section>

        <section className="relative bg-black md:px-52">
          <ProjectsSection />
        </section>
      </div>
    </>
  );
}
