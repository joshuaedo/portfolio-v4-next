"use client";
import Link from "next/link";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function MobileNavbar() {
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
        <div className="flex md:hidden h-20 w-full bg-black bg-opacity-50 p-4 md:p-10 items-center justify-between text-lg sticky top-0 z-10">
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
        <div className=" md:hidden bg-[#A3A3A3] h-screen w-screen sticky top-0 z-10 text-black">
          <div className="flex h-20 w-full p-4 md:p-10 items-center justify-between text-lg">
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

          <div className="h-[80vh] relative p-5">
            <div className="space-y-6 absolute bottom-10">
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
                <h2>CONTACT</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
