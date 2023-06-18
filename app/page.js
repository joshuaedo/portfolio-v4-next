import { Arrow } from "./image";

export default function Home() {
  return (
    <main className="px-0 md:px-52">
      <section className="h-screen flex items-center justify-center">
        <div className="">
          <p className="text-5xl md:text-9xl opacity-75 font-medium">
            SOFTWARE
          </p>
          <p className="ml-16 text-5xl md:text-9xl opacity-75 font-medium">
            DEVELOPER
          </p>
          {/* <p className="text-xs md:text-lg px-[20%] opacity-100">
            SPECIALIZED IN WEBSITE DESIGN & FRONTEND DEVELOPMENT
          </p> */}
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
