import Link from "next/link";
export default function HeroSection() {
  return (
    <>
      <div className="header-text mt-24">
        <p className="">SOFTWARE</p>
        <p className="ml-4 md:ml-20">DEVELOPER</p>
      </div>

      <div className="flex justify-end mt-3">
        <span className="title-text max-w-[50%] text-end line-height">
          SPECIALIZED IN FRONTEND DEVELOPMENT
        </span>
      </div>

      <div className="flex justify-end mt-32">
        <Link href="/#contact" onClick="lenis.scrollTo('#/contact')">
          <span className="title-text link">AVAILABLE FOR HIRE</span>
        </Link>
      </div>
    </>
  );
}
