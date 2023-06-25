import NameMarquee from "./components/nameMarquee";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";

export default function HomePage() {
  return (
    <>
      <div className="container-padding">
        <div className="section-padding">
          <section className="relative">
            <HeroSection />
          </section>
        </div>

        <div className="">
          <section className="relative">
            <NameMarquee />
          </section>
        </div>

        <div className="section-padding">
          <section className="relative">
            <ProjectsSection />
          </section>
        </div>
      </div>
    </>
  );
}
