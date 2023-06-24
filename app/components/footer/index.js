"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const useDate = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  } `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return {
    date,
    time,
    wish,
  };
};

export default function Footer() {
  const { date, time, wish } = useDate(); // Invoke the useDate hook

  const currentTime = time || getCurrentTime(); // If useDate hook doesn't provide time, fallback to getCurrentTime

  return (
    <>
      <footer
        className={`grid grid-cols-1 md:grid-cols-2 h-[12vh] w-full bg-black bg-opacity-50 p-4 md:p-10 font-medium text-sm space-y-2 md:space-y-0`}
      >
        <div
          className={`hidden md:flex cursor-pointer justify-evenly text-center`}
        >
          <p>{date}</p> {/* Replace with date from useDate */}
          <p>{currentTime}</p>{" "}
          {/* Replace with time from useDate or fallback value */}
          <p>{wish}</p> {/* Add the wish from useDate */}
        </div>
        <div className={`flex cursor-pointer justify-evenly text-center`}>
          <Link
            href="https://github.com/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="uppercase md:capitalize">github</p>
          </Link>
          <Link
            href="https://twitter.com/thegr8joshua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="uppercase md:capitalize">twitter</p>
          </Link>

          <Link
            href="https://www.linkedin.com/in/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="uppercase md:capitalize">linkedin</p>
          </Link>
          <Link
            href="joshua.edo01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="uppercase md:capitalize">email</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
