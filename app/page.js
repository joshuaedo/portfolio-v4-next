import { Arrow } from "./image";

export default function Home() {
  return (
    <main className="p-4 md:px-52">
      <section className="relative h-screen flex items-center justify-center font-medium">
        <div className="text-center md:text-end">
          <p className="mr-0 md:mr-16 text-5xl md:text-9xl drop-shadow-lg text-[#A3A3A3]">
            SOFTWARE
          </p>
          <p className="text-5xl md:text-9xl drop-shadow-lg text-[#A3A3A3]">
            ENGINEER
          </p>
          <p className="text-xs md:text-lg inline">
            SPECIALIZED IN FRONTEND DEVELOPMENT
          </p>
        </div>
        <div className="absolute bottom-10 flex items-center md:items-end">
          <p className="text-xs md:text-lg flex max-w-sm">
            AVAILABLE FOR FREELANCE WORK
            <Arrow h="h-3" w="w-3 ml-1" color="white" />
          </p>
        </div>
      </section>
      <section className="h-screen">
        <Arrow h="h-4" w="h-4" color="white" />
      </section>
      <section className="h-screen">
        <Arrow h="h-4" w="h-4" color="white" />
      </section>
    </main>
  );
}
