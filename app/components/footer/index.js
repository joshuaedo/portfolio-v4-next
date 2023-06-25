"use client";
import Link from "next/link";
import { useDate } from "./useDate";
import Marquee from "../marquee";

export default function Footer() {
  const { date, time, wish } = useDate();
  const currentTime = time || getCurrentTime();

  return (
    <>
      <footer id="contact" className={`bg-black p-4 md:p-10`}>
        <div
          className={`uppercase text-3xl md:text-6xl font-semibold italic w-[90%pb-7]`}
        >
          <Link
            href="https://github.com/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <p className="py-4">github</p> */}
            <Marquee
              text="GITHUB GITHUB GITHUB GITHUB GITHUB GITHUB GITHUB GITHUB"
              bgColor="bg-purple-500"
            />
          </Link>
          <Link
            href="https://twitter.com/thegr8joshua"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <p className="py-4">twitter</p> */}
            <Marquee
              text="TWITTER TWITTER TWITTER TWITTER TWITTER TWITTER TWITTER"
              bgColor="bg-green-500"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <p className="py-4">linkedin</p> */}
            <Marquee
              text="LINKEDIN LINKEDIN LINKEDIN LINKEDIN LINKEDIN LINKEDIN LINKEDIN"
              bgColor="bg-blue-500"
            />
          </Link>
          <Link
            href="joshua.edo01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <p className="py-4">email</p> */}
            <Marquee
              text="EMAIL EMAIL EMAIL EMAIL EMAIL EMAIL EMAIL EMAIL EMAIL EMAIL EMAIL"
              bgColor="bg-yellow-500"
            />
          </Link>
          <Link
            href="https://youtube.com/@edojoshua"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <p className="py-4">youtube</p> */}
            <Marquee
              text="YOUTUBE YOUTUBE YOUTUBE YOUTUBE YOUTUBE YOUTUBE YOUTUBE YOUTUBE"
              bgColor="bg-red-500"
            />
          </Link>
        </div>
        <div className={`flex justify-between text-center`}>
          <p>{date}</p>
          <p>{currentTime}</p> <p>{wish}</p>
        </div>
      </footer>
    </>
  );
}
