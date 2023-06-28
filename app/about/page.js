import Labels from "./labels";
import Skills from "./skills";
import Likes from "./likes";
import Services from "./services";

export const metadata = {
  metadataBase: new URL("https://joshuaedo.com/about"),
  title: "Joshua Edo • About",
  description: "Who is Joshua Edo?",
  twitter: {
    card: "summary",
    title: "Joshua Edo • About",
    description: "Who is Joshua Edo?",
    creator: "@joshuaedo",
    images: [
      "https://res.cloudinary.com/dnw9fplsw/image/upload/v1687950201/%3D%29.png",
    ],
  },
  openGraph: {
    title: "Joshua Edo • About",
    description: "Who is Joshua Edo?",
    url: "https://joshuaedo.com/about",
    siteName: "joshuaedo",
    images: [
      {
        url: "https://res.cloudinary.com/dnw9fplsw/image/upload/v1687950201/%3D%29.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

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
