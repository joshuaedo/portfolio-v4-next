import Labels from "./labels";
import Skills from "./skills";
import Likes from "./likes";
import Services from "./services";

export default function AboutPage() {
  return (
    <div className="container-padding">
      <section className=""></section>
      <section className="section-padding">
        <Labels />
      </section>
      <section className="section-padding">
        <Skills />
      </section>
      <section className="section-padding">
        <Likes />
      </section>
      <section className="section-padding">
        <Services />
      </section>
    </div>
  );
}
