import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MobileNavbar from "./components/mobileNavbar";
import Cursor from "./components/cursor";
import { LenisScroller } from "./components/lenisScroller";

export const metadata = {
  title: "Joshua Edo • Software Developer",
  description: "Joshua Edo's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://api.fontshare.com/v2/css?f[]=general-sans@200,500,201,1,300,600,400,700&display=swap"
        rel="stylesheet"
      />
      <body className={`bg-black text-white tracking-wider w-full`}>
        <LenisScroller />
        <Cursor />
        <Navbar />
        <MobileNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
