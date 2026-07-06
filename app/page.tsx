import Background from "./components/background";
import Sidebar from "./layouts/sidebar";
import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Project from "./sections/project";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Background />
      </div>
      <main className="flex gap-4">
        <div className="flex-1 overflow-hidden rounded-2xl">
          <Hero />
          <Experience />
          <Project />
        </div>

        <div className="w-90">
          <Sidebar />
        </div>
      </main>
    </div>
  );
}
