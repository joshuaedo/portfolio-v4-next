import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav
        className={`hidden md:flex h-[12vh] w-full bg-black bg-opacity-50 p-4 md:p-10 items-center justify-between text-lg sticky top-0 z-10`}
      >
        <div className={`inline font-medium cursor-pointer`}>
          <Link href="/">Joshua Edo</Link>
        </div>
        <div className={`flex cursor-pointer justify-end space-x-10`}>
          <div className="flex justify-around items-center w-[20vw] ">
            <Link href="/about" className="hover:opacity-70">
              <p className="font-medium">Info</p>
              <p className="text-2xs">ABOUT ME</p>
            </Link>
            <Link href="/projects" className="hover:opacity-70">
              <p className="font-medium">Work</p>
              <p className="text-2xs">MY PROJECTS</p>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="mailto:joshua.edo01@gmail.com"
              className="link title-text"
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
