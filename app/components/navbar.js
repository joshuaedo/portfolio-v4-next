import Link from "next/link";
export default function MobileMobileNavbar() {
  return (
    <>
      <div
        className={`hidden md:flex h-20 w-full bg-black bg-opacity-50 p-4 md:p-10 items-center justify-between text-lg sticky top-0 z-10`}
      >
        <div className={`inline font-medium cursor-pointer`}>
          <Link href="/">Joshua Edo</Link>
        </div>
        <div className={`flex cursor-pointer w-[50%] justify-evenly`}>
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
            <p className="text-2xs">LET'S TALK</p>
          </Link>
        </div>
      </div>
    </>
  );
}
