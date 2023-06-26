export default function Likes() {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="bg-blue-500 text-black w-[50vw] h-[45vh] md:w-[30vw] rounded-lg relative shadow-2xl shadow-blue-500/20">
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full rounded-lg"
          >
            <source src="/videos/rj-celebration.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
