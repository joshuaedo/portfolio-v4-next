import Image from "next/image";

export default function HomeCard({ imgSrc, name }) {
  return (
    <div className="px-[1.5rem] md:pl-[2rem]">
      <div className="flex items-center justify-center">
        <Image
          src={imgSrc}
          height={1000}
          width={1000}
          alt={name}
          className="h-[320px] md:h-[457px] w-[233px] md:w-[332px] object-cover rounded-sm"
          quality={100}
        />
      </div>
      <div>
        <p className="font-light text-3xl pt-4 pl-12 md:pl-1">{name}</p>
      </div>
    </div>
  );
}
