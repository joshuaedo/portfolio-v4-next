import Image from "next/image";
export default function Loader() {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <Image
        src={"/images/=).png"}
        className="object-contain"
        height={225}
        width={225}
      />
    </div>
  );
}
