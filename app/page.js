import { Arrow } from "./image";

export default function Home() {
  return (
    <main className="p-4 md:px-52">
      <section className="relative min-h-screen flex items-center justify-center font-medium mb-20 md:mb-36">
        <div className="text-center md:text-end">
          <p className="mr-0 md:mr-16 text-5xl md:text-9xl drop-shadow-lg text-[#A3A3A3]">
            SOFTWARE
          </p>
          <p className="text-5xl md:text-9xl drop-shadow-lg text-[#A3A3A3]">
            ENGINEER
          </p>
          <p className="text-2xs md:text-sm inline">
            SPECIALIZED IN FRONTEND DEVELOPMENT
          </p>
        </div>

        <div className="absolute bottom-10 right-10 md:right-3 text-2xs md:text-sm flex max-w-[7rem] md:max-w-[10rem] text-right">
          <div>AVAILABLE FOR FREELANCE WORK</div>
        </div>
      </section>

      <section className="min-h-screen relative mb-12 md:mb-36">
        <div className="text-center md:text-start">
          <p className="text-3xl md:text-7xl drop-shadow-lg text-[#A3A3A3] border-b-2">
            PROJECTS
          </p>
          <p className="text-2xs md:text-sm inline">A SELECTION OF MY WORK</p>
        </div>
      </section>

      <section className="min-h-screen">
        <Arrow h="h-4" w="h-4" color="white" />
      </section>
    </main>
  );
}
