import "./styles/globals.css";
import "./styles/locomotive-scroll.css";
import "./styles/text-sphere.css";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";

export const metadata = {
  title: "Joshua Edo • Software Developer",
  description: "Joshua Edo's Portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://api.fontshare.com/v2/css?f[]=general-sans@200,500,201,1,300,600,400,700&display=swap"
        rel="stylesheet"
      />
      <body className={`bg-black text-white tracking-wider w-full`}>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
