import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsCard({ i, name, href }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="px-[1.5rem] md:pl-[2rem] relative disable-select">
      <Link href={`https://${href}`} target="_blank" rel="noopener noreferrer">
        <div
          className="flex items-center justify-center cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className="relative">
            <Image
              src={`/images/home/${name}/${i}.jpg`}
              height={1000}
              width={1000}
              alt={name}
              className="h-[320px] md:h-[457px]  w-[233px] md:w-[332px] object-cover rounded-sm"
              quality={100}
            />
            <div
              className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 ${
                isHovered ? "opacity-50" : "opacity-0"
              }`}
            >
              <Image
                src={`/images/home/${name}/1.jpg`}
                height={1000}
                width={1000}
                alt={name}
                className="h-[320px] md:h-[457px]  w-[233px] md:w-[332px] object-cover rounded-sm"
                quality={100}
              />
            </div>
          </div>
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
