import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div className="text-6xl md:text-9xl header-text mt-20">
        <div className="flex justify-center md:justify-start">
          <p className="">SOFTWARE</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <p className="">DEVELOPER</p>
        </div>
      </div>

      <div className="flex justify-end mt-3">
        <span className="title-text max-w-[75%] text-end line-height">
          SPECIALIZED IN FRONTEND DEVELOPMENT
        </span>
      </div>

      <div className="flex justify-end mt-16">
        <Link href="/#contact">
          <span className="title-text link">AVAILABLE FOR HIRE ↗</span>{" "}
        </Link>
      </div>
    </>
  );
}
