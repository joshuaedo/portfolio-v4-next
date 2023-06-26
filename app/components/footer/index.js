"use client";
import Link from "next/link";
import { useDate } from "./useDate";
import Marquee from "../marquee";

export default function Footer() {
  const { date, time, wish } = useDate();
  const currentTime = time || getCurrentTime();

  return (
    <>
      <footer
        id="contact"
        className={`pt-4 md:pt-10 flex justify-center items-center`}
      >
        <div className="w-[90%]">
          <div className="title-text pb-3 md:pb-5">Social Media & Contacts</div>
          <div className={`uppercase text-3xl md:text-6xl`}>
            <Link
              href="https://github.com/joshuaedo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="GITHUB ↗"
                text="GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ "
                bgColor="bg-purple-500"
              />
            </Link>
            <Link
              href="https://twitter.com/thegr8joshua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="TWITTER ↗"
                text="TWITTER ↗ TWITTER ↗ TWITTER ↗ TWITTER ↗ TWITTER ↗ TWITTER ↗ TWITTER ↗ "
                bgColor="bg-green-500"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joshuaedo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="LINKEDIN ↗"
                text="LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ "
                bgColor="bg-blue-500"
              />
            </Link>
            <Link
              href="mailto:joshua.edo01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="EMAIL ↗"
                text="EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ "
                bgColor="bg-yellow-500"
              />
            </Link>
            <Link
              href="https://youtube.com/@edojoshua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="YOUTUBE ↗"
                text="YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ "
                bgColor="bg-red-500"
              />
            </Link>
          </div>
          <div
            className={`flex justify-between items-center text-center h-10 title-text`}
          >
            <p>{date}</p>
            <p className="">{currentTime}</p> <p>{wish}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
