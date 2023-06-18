import "./globals.css";
import { Inter } from "next/font/google";
import Cursor from "./components/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joshua Edo - Home",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
