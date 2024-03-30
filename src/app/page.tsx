import Intro from "@/src/components/intro";
import SectionDivider from "@/src/components/section-divider";
import About from "@/src/components/about";
import Projects from "@/src/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
