import NameMarquee from "./components/nameMarquee";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";

export const metadata = {
  title: "Joshua Edo • Home",
  description: "Joshua Edo's HomePage",
};

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
