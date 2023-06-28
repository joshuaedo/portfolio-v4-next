import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MobileNavbar from "./components/mobileNavbar";
import { LenisScroller } from "./components/lenisScroller";
// import Cursor from "./components/cursor";
import { HomeLoader } from "./loading";

export const metadata = {
  metadataBase: new URL("https://joshuaedo.com"),
  title: "Joshua Edo • Software Developer",
  description: "Joshua Edo's Portfolio Website",
  twitter: {
    card: "summary",
    title: "Joshua Edo • Software Developer",
    description: "Joshua Edo's Portfolio Website",
    creator: "@joshuaedo",
    images: [
      "https://res.cloudinary.com/dnw9fplsw/image/upload/v1687950201/%3D%29.png",
    ],
  },
  openGraph: {
    title: "Joshua Edo • Software Developer",
    description: "Joshua Edo's Portfolio Website",
    url: "https://joshuaedo.com",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://api.fontshare.com/v2/css?f[]=general-sans@200,500,201,1,300,600,400,700&display=swap"
        rel="stylesheet"
      />
      <body className={`bg-black text-white tracking-wider body`}>
        {/* <Cursor /> */}
        <HomeLoader />
        <LenisScroller />
        <Navbar />
        <MobileNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
