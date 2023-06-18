import { Arrow } from "./image";

export default function Home() {
  return (
    <main>
      <section className="px-0 md:px-52 h-screen">
        <div className="text-6xl md:text-9xl opacity-75">
          <p>SOFTWARE</p>
          <p>DEVELOPER</p>
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
