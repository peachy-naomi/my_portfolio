import Nav from "@/app/components/sidebar";
import Button from "@/app/components/button";
import SkillSection from "@/app/components/skill";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--portfolio-surface)] text-[var(--portfolio-text)]">
      
      <Nav />

      <div className="md:pl-72 md:mr-12 mt-4 md:mt-6">
        
        {/* HERO SECTION */}
        <section className="bg-[var(--portfolio-bg)] px-6 py-12 md:px-16 md:py-20 flex flex-col md:flex-row items-center gap-10 shadow-md rounded-b-2xl">
          
          {/* TEXT */}
          <div className="max-w-xl space-y-5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              I'm Emmanuel Naomi
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold">
              Artificial Intelligence{" "}
              <span className="text-[var(--portfolio-primary-purple)] font-bold italic tracking-wide text-2xl md:text-3xl">
                Engineer
              </span>
            </h2>

            <p className="text-[var(--portfolio-text-muted)] leading-relaxed">
              I build intelligent, data-driven solutions that help businesses
              grow and simplify everyday life. Passionate about AI and machine
              learning, I constantly explore new technologies and turn ideas
              into impactful real-world applications.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button />
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Emmanuel Naomi"
              width={288}
              height={288}
              className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-[var(--portfolio-primary-purple)]"
              priority
            />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="mt-16 max-w-5xl mx-auto px-6 md:px-8 text-center space-y-6">
          <h3 className="text-3xl font-bold">
            Who I Am
          </h3>

          <p className="text-[var(--portfolio-text-muted)] leading-relaxed text-lg">
            I'm an aspiring Artificial Intelligence Engineer and software
            developer driven by curiosity and a passion for solving real-world
            problems. My journey into tech started with understanding how
            systems work, and it has evolved into building practical and
            meaningful projects.
          </p>

          <p className="text-[var(--portfolio-text-muted)] leading-relaxed text-lg">
            I enjoy learning new technologies, improving my skills, and creating
            solutions that are not just functional but impactful. My goal is to
            contribute to innovative systems that make a difference.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mt-20 px-6 md:px-8">
          <SkillSection />
        </section>

      </div>
    </div>
  );
}