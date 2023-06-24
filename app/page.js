import Marquee from "./components/marquee";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";

export default function HomePage() {
  return (
    <>
      <div className="p-4">
        <section className="md:px-52 relative font-medium mb-12 md:mb-24">
          <HeroSection />
        </section>

        <section className="font-medium mb-12 md:mb-24">
          <Marquee />
        </section>

        <div className="md:px-52">
          <section className="relative bg-black">
            <ProjectsSection />
          </section>
        </div>
      </div>
    </>
  );
}
