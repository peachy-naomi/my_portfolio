'use client'
import { useState } from "react";
import Nav from "@/app/components/sidebar";
import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  github: string;
  live: string;
  status: "Completed" | "In Progress" | "Coming Soon";
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A fully responsive personal portfolio built with Next.js and Tailwind CSS featuring dark/light theme toggle.",
    longDescription:
      "Built from scratch using Next.js 14, Tailwind CSS and TypeScript. Features a fixed sidebar navigation, dark/light theme switching via React Context, responsive layouts for all screen sizes, and smooth transitions throughout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Context"],
    category: "Frontend",
    github: "https://github.com/peachy-naomi/my_portfolio",
    live: "my-portfolio-mu-brown-51.vercel.app",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    title: "Mini E-Commerce Website",
    description:
      "A Next.js e-commerce website with cart functionality, product filtering and API integration using FakeStore API.",
    longDescription:
      "Built with Next.js, TypeScript and Tailwind CSS. Features product listing with category filtering, a cart system using React Context with localStorage persistence, individual product pages, and a fully styled cart and checkout UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "FakeStore API", "React Context"],
    category: "Frontend",
    github: "https://github.com/peachy-naomi/mini-ecommerce-cart",
    live: "https://mini-ecommerce-cart-tau.vercel.app",
    status: "Completed",
    featured: false,
  },
  {
    id: 3,
    title: "Authentication UI",
    description:
      "A React and TypeScript authentication UI with signup, login and a mini dashboard connected to an Express.js backend.",
    longDescription:
      "Built with React, TypeScript, Vite and Tailwind CSS. Features user signup with validation, login with bcrypt verification, conditional rendering between signup, login and dashboard views, and a mini dashboard showing user info after login. Connected to a live Express.js and PostgreSQL backend.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express.js", "PostgreSQL"],
    category: "Frontend",
    github: "https://github.com/peachy-naomi/authentication_ui",
    live: "https://authentication-ui-pearl.vercel.app",
    status: "Completed",
    featured: false,
  },
  {
    id: 4,
    title: "Student Result Management API",
    description:
      "A REST API built with Express.js and PostgreSQL for managing student records, results and user authentication.",
    longDescription:
      "A production-ready REST API with full CRUD operations for students and results. Features user authentication with bcrypt password hashing, JWT-ready route structure, PostgreSQL database with relational tables, CORS configuration and Morgan logging. Tested thoroughly with Postman.",
    tags: ["Express.js", "PostgreSQL", "Node.js", "bcrypt", "REST API"],
    category: "Backend",
    github: "https://github.com/peachy-naomi/authentication",
    live: " https://authentication-backend-knuy.onrender.com",
    status: "Completed",
    featured: true,
  },
  {
    id: 5,
    title: "Data Analysis with Pandas",
    description:
      "Exploratory data analysis project using Pandas and Matplotlib to clean, analyze and visualize a real dataset.",
    longDescription:
      "Used Python, Pandas and Matplotlib to perform exploratory data analysis on a real-world dataset. Cleaned and transformed raw data, identified trends, handled missing values, and produced visualizations to communicate findings clearly.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    category: "Python / Data",
    github: "https://github.com/peachy-naomi/Nigeria_Population_Analysis",
    live: "",
    status: "Completed",
    featured: true,
  },
  {
    id: 6,
    title: "Builda Construction Website",
    description:
      "A multi-page construction company website built with React and CSS featuring About, Contact and Projects pages.",
    longDescription:
      "Built with React, React Router and custom CSS. Features a video hero section, services showcase, project portfolio with category filtering and lightbox modal, stats section, testimonials, contact form and a responsive footer with quick links.",
    tags: ["React", "CSS", "React Router", "Vite"],
    category: "Frontend",
    github: "https://github.com/peachy-naomi/builda",
    live: "https://builda-indol.vercel.app",
    status: "Completed",
    featured: false,
},
  {
    id: 7,
    title: "NumPy & Data Processing",
    description:
      "Hands-on Python project exploring NumPy for numerical computation and array-based data processing.",
    longDescription:
      "Currently exploring NumPy for numerical computing — working through array operations, broadcasting, linear algebra basics and integrating NumPy with Pandas for efficient data pipelines. Foundation for upcoming ML work.",
    tags: ["Python", "NumPy", "Pandas", "Data Processing"],
    category: "Python / Data",
    github: "https://github.com/peachy-naomi",
    live: "",
    status: "In Progress",
    featured: false,
  },
  {
    id: 8,
    title: "AI / ML Project",
    description:
      "A machine learning project to be built as part of the AI Engineering curriculum — coming before July.",
    longDescription:
      "Currently progressing through the AI Engineering curriculum. After completing NumPy and the remaining Python data stack, this project will cover model building, training, and evaluation using real datasets.",
    tags: ["Python", "Machine Learning", "AI", "NumPy"],
    category: "AI / ML",
    github: "",
    live: "",
    status: "Coming Soon",
    featured: false,
  },
  
];

const categories = ["All", "Frontend", "Backend", "Python / Data", "AI / ML"];

const statusColors: Record<string, string> = {
  Completed:
    "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20",
  "In Progress":
    "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20",
  "Coming Soon":
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featured = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[var(--portfolio-surface)] text-[var(--portfolio-text)]">
      <Nav />

      <main className="md:ml-64 md:mr-16 px-6 py-14 md:px-16">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--portfolio-primary-purple)] font-semibold mb-2">
            My Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--portfolio-text)] leading-tight">
            Projects
          </h1>
          <p className="mt-4 text-[var(--portfolio-text-muted)] max-w-xl text-base leading-relaxed">
            Projects I've built across my journey — from frontend web development
            and backend APIs to Python data analysis, with AI/ML on the horizon.
          </p>

          {/* Journey progress bar */}
          <div className="mt-8 p-5 bg-[var(--portfolio-bg)] rounded-2xl border border-[var(--portfolio-surface-soft)] max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--portfolio-text-muted)] mb-3">
              Learning Journey
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { label: "HTML/CSS", done: true },
                { label: "React", done: true },
                { label: "Next.js", done: true },
                { label: "MySQL", done: true },
                { label: "PostgreSQL", done: true },
                { label: "Superbase", done: true },
                { label: "Express.js", done: true },
                { label: "shadcn/ui", done: true },
                { label: "Docker", done: true },
                { label: "System Design", done: true },
                { label: "Python", done: true },
                { label: "Pandas", done: true },
                { label: "NumPy", done: false },
                { label: "AI / ML", done: false },
              ].map((step, i) => (
                <span
                  key={i}
                  className={`text-xs px-2.5 py-1 rounded-full font-medium border ${
                    step.done
                      ? "bg-[var(--portfolio-primary-purple)]/10 text-[var(--portfolio-primary-purple)] border-[var(--portfolio-primary-purple)]/20"
                      : "bg-[var(--portfolio-surface)] text-[var(--portfolio-text-muted)] border-[var(--portfolio-surface-soft)]"
                  }`}
                >
                  {step.done && <span className="mr-0.5">✓</span>}
                  {step.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-lg font-bold text-[var(--portfolio-text)] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--portfolio-primary-purple)] inline-block" />
            Featured
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project) => (
              <div
                key={project.id}
                className="group bg-[var(--portfolio-bg)] rounded-2xl border border-[var(--portfolio-surface-soft)] shadow-sm overflow-hidden hover:border-[var(--portfolio-primary-purple)] transition-all duration-300 hover:shadow-md flex flex-col"
              >
                <div className="h-1 w-full bg-[var(--portfolio-primary-purple)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--portfolio-primary-purple)]">
                      {project.category}
                    </span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--portfolio-text)] mb-2 group-hover:text-[var(--portfolio-primary-purple)] transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--portfolio-text-muted)] leading-relaxed mb-4 flex-1">
                    {expanded === project.id ? project.longDescription : project.description}
                  </p>

                  <button
                    onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                    className="text-xs text-[var(--portfolio-primary-purple)] font-semibold mb-4 flex items-center gap-1 hover:gap-2 transition-all w-fit"
                  >
                    {expanded === project.id ? "Show less" : "Read more"}
                    <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${expanded === project.id ? "rotate-90" : ""}`} />
                  </button>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-[var(--portfolio-surface)] text-[var(--portfolio-text-muted)] border border-[var(--portfolio-surface-soft)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[var(--portfolio-surface-soft)]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-primary-purple)] transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-primary-purple)] transition-colors ml-auto"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-lg font-bold text-[var(--portfolio-text)] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--portfolio-primary-purple)] inline-block" />
            All Projects
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-[var(--portfolio-primary-purple)] text-white border-[var(--portfolio-primary-purple)]"
                    : "bg-[var(--portfolio-bg)] text-[var(--portfolio-text-muted)] border-[var(--portfolio-surface-soft)] hover:border-[var(--portfolio-primary-purple)] hover:text-[var(--portfolio-primary-purple)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="group bg-[var(--portfolio-bg)] rounded-2xl border border-[var(--portfolio-surface-soft)] p-5 hover:border-[var(--portfolio-primary-purple)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <span className="text-2xl font-bold text-[var(--portfolio-surface-soft)] group-hover:text-[var(--portfolio-primary-purple)]/20 transition-colors w-10 flex-shrink-0 hidden sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-[var(--portfolio-text)] group-hover:text-[var(--portfolio-primary-purple)] transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--portfolio-text-muted)] mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[var(--portfolio-surface)] text-[var(--portfolio-text-muted)] border border-[var(--portfolio-surface-soft)]">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--portfolio-surface)] text-[var(--portfolio-text-muted)] border border-[var(--portfolio-surface-soft)]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="w-9 h-9 rounded-xl border border-[var(--portfolio-surface-soft)] bg-[var(--portfolio-surface)] flex items-center justify-center text-[var(--portfolio-text-muted)] hover:border-[var(--portfolio-primary-purple)] hover:text-[var(--portfolio-primary-purple)] transition-all duration-200"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="w-9 h-9 rounded-xl border border-[var(--portfolio-surface-soft)] bg-[var(--portfolio-surface)] flex items-center justify-center text-[var(--portfolio-text-muted)]/30 cursor-not-allowed">
                      <FaGithub className="w-4 h-4" />
                    </div>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="w-9 h-9 rounded-xl border border-[var(--portfolio-surface-soft)] bg-[var(--portfolio-surface)] flex items-center justify-center text-[var(--portfolio-text-muted)] hover:border-[var(--portfolio-primary-purple)] hover:text-[var(--portfolio-primary-purple)] transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[var(--portfolio-bg)] border border-[var(--portfolio-surface-soft)] text-center">
          <h3 className="text-xl font-bold text-[var(--portfolio-text)] mb-2">
            Want to collaborate?
          </h3>
          <p className="text-[var(--portfolio-text-muted)] text-sm mb-5 max-w-sm mx-auto">
            I'm always open to interesting projects and opportunities. Let's
            build something together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--portfolio-primary-purple)] text-white text-sm font-semibold hover:bg-[var(--portfolio-hover-dark)] transition-colors duration-200"
          >
            Get in Touch
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
