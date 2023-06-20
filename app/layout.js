// "use client";
import "./globals.css";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joshua Edo • Software Developer",
  description: "Joshua Edo's Portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white tracking-wider container`}
      >
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
