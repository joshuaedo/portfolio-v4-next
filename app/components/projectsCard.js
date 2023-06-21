import Image from "next/image";
import Link from "next/link";

export default function ProjectsCard({ imgSrc, name, href }) {
  return (
    <div className="px-[1.5rem] md:pl-[2rem]">
      <Link href={`https://${href}`} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center cursor-pointer">
          <Image
            src={imgSrc}
            height={1000}
            width={1000}
            alt={name}
            className="h-[320px] md:h-[457px]  w-[233px] md:w-[332px] object-cover rounded-sm"
            quality={100}
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="font-thin text-2xl md:text-3xl inline pt-3 w-[233px] md:w-[332px]">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}
