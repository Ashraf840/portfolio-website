import Intro from "@/src/components/intro";
import SectionDivider from "@/src/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
    </main>
  );
}
