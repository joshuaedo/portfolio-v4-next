import Link from "next/link";
import { Arrow } from "../image";
export default function HeroSection() {
  return (
    <>
      <div className="header-text mt-24">
        <div className="flex justify-start">
          <p className="">SOFTWARE</p>
        </div>
        <div className="flex justify-end">
          <p className="">DEVELOPER</p>
        </div>
      </div>

      <div className="flex justify-end mt-3">
        <span className="title-text max-w-[75%] text-end line-height">
          SPECIALIZED IN FRONTEND DEVELOPMENT
        </span>
      </div>

      <div className="flex justify-end mt-32">
        <Link href="/#contact">
          <span className="title-text link">AVAILABLE FOR HIRE ↗</span>{" "}
        </Link>
      </div>
    </>
  );
}
