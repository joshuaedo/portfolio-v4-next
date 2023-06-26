import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MobileNavbar from "./components/mobileNavbar";
import { LenisScroller } from "./components/lenisScroller";
// import Cursor from "./components/cursor";
import { Suspense } from "react";
import Loader from "./loading";

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
      <body className={`bg-black text-white tracking-wider body`}>
        <Suspense fallback={<Loader />}>
          {/* <Cursor /> */}
          <LenisScroller />
          <Navbar />
          <MobileNavbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
