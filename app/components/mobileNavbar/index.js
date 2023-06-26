"use client";
import Link from "next/link";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDate } from "../footer/useDate";

export default function MobileNavbar() {
  const { date, time, wish } = useDate();
  const currentTime = time || getCurrentTime();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const openNavPage = () => {
    setIsCollapsed(true);
  };

  const closeNavPage = () => {
    setIsCollapsed(false);
  };

  const router = useRouter();

  const navigateToLink = (link) => {
    router.push(link);
    setIsCollapsed(false);
  };

  return (
    <>
      {!isCollapsed ? (
        <div className="flex md:hidden h-[12vh] w-full bg-black bg-opacity-50 p-4 items-center justify-between text-lg sticky top-0 z-10">
          <div className="inline font-medium cursor-pointer">
            <Link href="/">Joshua Edo</Link>
          </div>
          <div className="flex">
            <div
              className="inline font-medium cursor-pointer"
              onClick={openNavPage}
            >
              MENU+
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 md:hidden bg-[#A3A3A3] h-screen w-full sticky top-0 z-10 text-black ">
          <div className="flex h-[12vh] w-full items-center justify-between text-lg mobile-nav__header">
            <div className="inline font-medium cursor-pointer">
              <Link href="/">Joshua Edo</Link>
            </div>
            <div className="flex">
              <div
                className="inline font-medium cursor-pointer"
                onClick={closeNavPage}
              >
                CLOSE
              </div>
            </div>
          </div>

          <div className="h-[76vh] relative p-5">
            <div className="space-y-10 pt-24">
              <div
                onClick={() => navigateToLink("/")}
                className={styles.project}
              >
                <h2>HOME</h2>
              </div>
              <div
                onClick={() => navigateToLink("/about")}
                className={styles.project}
              >
                <h2>ABOUT</h2>
              </div>
              <div
                onClick={() => navigateToLink("/projects")}
                className={styles.project}
              >
                <h2>WORK</h2>
              </div>
              <div
                onClick={() => navigateToLink("/contact")}
                className={styles.project}
              >
                <p>Let&apos;s Talk →</p>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-between items-center text-center h-[12vh] title-text mobile-nav__footer`}
          >
            <p>{date}</p>
            <p className="">{currentTime}</p> <p>{wish}</p>
          </div>
        </div>
      )}
    </>
  );
}
