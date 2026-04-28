import Nav from "@/app/components/sidebar";
import { frontendSkills, backendSkills, pythonSkills, toolSkills } from "@/app/data/devskills";
import CarouselSize from "@/app/components/carousel";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[var(--portfolio-surface)] text-[var(--portfolio-text)]">
      <Nav />

      <main className="md:ml-64 md:mr-16 px-6 py-14 md:px-16">
        <div className="mb-12">
          <p className="text-sm mt-5 uppercase tracking-[0.2em] text-[var(--portfolio-primary-purple)] font-semibold mb-2">
            What I know
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--portfolio-text)] leading-tight">
            My Skills
          </h1>
          <p className="mt-4 text-[var(--portfolio-text-muted)] max-w-xl text-base leading-relaxed">
            A breakdown of the technologies, tools and frameworks I work with
            across AI, frontend, and backend development.
          </p>
        </div>

        {/* Frontend Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--portfolio-text)] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--portfolio-primary-purple)] inline-block" />
            Frontend Development
          </h2>
          <CarouselSize skills={frontendSkills} />
        </section>

        {/* Backend Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--portfolio-text)] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--portfolio-primary-purple)] inline-block" />
            Backend Development
          </h2>
          <CarouselSize skills={backendSkills} />
        </section>

        {/* Python & Data Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--portfolio-text)] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--portfolio-primary-purple)] inline-block" />
            Python & Data
          </h2>
          <CarouselSize skills={pythonSkills} />
        </section>

        {/* Tools Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--portfolio-text)] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--portfolio-primary-purple)] inline-block" />
            Tools & Technologies
          </h2>
          <CarouselSize skills={toolSkills} />
        </section>
      </main>
    </div>
  );
}