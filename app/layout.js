import "./globals.css";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
// import localFont from "next/font/local/";
// const sanFrancisco = localFont({
//   src: "./fonts/SF-Pro.ttf",
//   weight: ["100", "400", "900"],
// });

export const metadata = {
  title: "Joshua Edo • Software Developer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sanFrancisco bg-black text-white tracking-wider`}>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
