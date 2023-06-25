"use client";
import Link from "next/link";
import { useDate } from "./useDate";


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
            <p className="py-4">github</p>
          </Link>
          <Link
            href="https://twitter.com/thegr8joshua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="py-4">twitter</p>
          </Link>

          <Link
            href="https://www.linkedin.com/in/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="py-4">linkedin</p>
          </Link>
          <Link
            href="joshua.edo01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="py-4">email</p>
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
