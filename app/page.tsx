import Approach from "./components/approach";
import Hero from "./components/hero";
import Skills from "./components/skills"
import Projects from "./components/projects"
import Books from "./components/books.tsx"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full gap-6 md:gap-16 md:mt-16 max-w-5xl flex-col items-center justify-between px-16 bg-white dark:bg-black sm:items-start">
        <Hero />
        <Approach />
        <Books />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
