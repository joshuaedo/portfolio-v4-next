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
        className={`grid grid-cols-1 md:grid-cols-2 h-[15vh] w-full bg-black bg-opacity-50 p-4 md:p-10 space-y-3`}
      >
        <div className={`flex cursor-pointer justify-evenly  text-lg`}>
          <p>{copyright}</p>
          <p>{time}</p>
        </div>
        <div
          className={`flex cursor-pointer justify-evenly text-center text-xs`}
        >
          <Link
            href="https://github.com/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="">GITHUB</p>
          </Link>
          <Link
            href="https://twitter.com/thegr8joshua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="">TWITTER</p>
          </Link>

          <Link
            href="https://www.linkedin.com/in/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="">LINKED-IN</p>
          </Link>
          <Link
            href="joshua.edo01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="">EMAIL</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
