"use client";
import Link from "next/link";
import { useState } from "react";
export default function MobileNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const openNavPage = () => {
    setIsCollapsed(true);
  };

  const closeNavPage = () => {
    setIsCollapsed(false);
  };

  return (
    <>
      {!isCollapsed ? (
        <div
          className={`flex md:hidden h-20 w-full bg-black bg-opacity-50 p-4 md:p-10 items-center justify-between text-lg sticky top-0 z-10`}
        >
          <div className={`inline font-medium cursor-pointer`}>
            <Link href="/">Joshua Edo</Link>
          </div>
          <div className={`flex`}>
            <div
              className={`inline font-medium cursor-pointer`}
              onClick={openNavPage}
            >
              MENU+
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#A3A3A3] h-screen w-screen sticky top-0 z-10 text-black">
          <div
            className={`flex md:hidden h-20 w-full p-4 md:p-10 items-center justify-between text-lg`}
          >
            <div className={`inline font-medium cursor-pointer`}>
              <Link href="/">Joshua Edo</Link>
            </div>
            <div className={`flex`}>
              <div
                className={`inline font-medium cursor-pointer`}
                onClick={closeNavPage}
              >
                CLOSE
              </div>
            </div>
          </div>

          <div className={`cursor-pointer`}>
            <Link href="/">
              <p className="font-medium">Home</p>
              <p className="text-2xs"></p>
            </Link>
            <Link href="/about">
              <p className="font-medium">Info</p>
              <p className="text-2xs">ABOUT ME</p>
            </Link>
            <Link href="/projects">
              <p className="font-medium">Work</p>
              <p className="text-2xs">MY PROJECTS</p>
            </Link>
            <Link href="/contact">
              <p className="font-medium">Contact</p>
              <p className="text-2xs">LET&apos;S TALK</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
