import Link from "next/link";

function getCopyrightYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

function getCurrentTime() {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return currentTime;
}

export default function Footer() {
  const copyright = `${getCopyrightYear()}©`;
  const time = getCurrentTime();

  return (
    <>
      <footer
        className={`flex h-20 w-full bg-black bg-opacity-50 p-4 md:p-10 items-center justify-between text-lg`}
      >
        <div className={`flex cursor-pointer w-[50%] justify-evenly`}>
          <p>{copyright}</p>
          <p>{time}</p>
        </div>
        {/* Mobile */}
        <div
          className={`md:hidden flex cursor-pointer w-[50%] justify-evenly text-center`}
        >
          <div className="justify-evenly">
            <Link href="https://github.com/joshuaedo">
              <p className="text-2xs">GITHUB</p>
            </Link>
            <Link href="https://twitter.com/thegr8joshua">
              <p className="text-2xs">TWITTER</p>
            </Link>
          </div>
          <div className="justify-evenly">
            <Link href="https://www.linkedin.com/in/joshuaedo">
              <p className="text-2xs">LINKED-IN</p>
            </Link>
            <Link href="joshua.edo01@gmail.com">
              <p className="text-2xs">EMAIL</p>
            </Link>
          </div>
        </div>
        {/* Laptop */}
        <div
          className={`hidden md:flex cursor-pointer w-[50%] justify-evenly text-center`}
        >
          <Link href="https://github.com/joshuaedo">
            <p className="text-2xs">GITHUB</p>
          </Link>
          <Link href="https://twitter.com/thegr8joshua">
            <p className="text-2xs">TWITTER</p>
          </Link>

          <Link href="https://www.linkedin.com/in/joshuaedo">
            <p className="text-2xs">LINKED-IN</p>
          </Link>
          <Link href="mailto:joshua.edo01@gmail.com">
            <p className="text-2xs">EMAIL</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
