"use client";

export default function Skills() {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="bg-green-500 text-black w-[50vw] h-[45vh] md:w-[30vw] rounded-lg relative shadow-2xl shadow-green-500/20">
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full rounded-lg"
          >
            <source src="/videos/next-logo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
