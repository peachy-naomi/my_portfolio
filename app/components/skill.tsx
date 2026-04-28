export default function SkillSection() {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-[var(--portfolio-surface-soft)]">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--portfolio-text)]">
          Skills & Expertise
        </h2>
        <p className="text-[var(--portfolio-text-muted)] mt-3 max-w-xl mx-auto">
          Technologies I use and currently learning on my journey to becoming an AI Engineer.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Frontend Card */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[var(--portfolio-text)] mb-2">
            Frontend Development
          </h3>
          <p className="mb-6 text-sm text-[var(--portfolio-text-muted)]">
            Creating responsive, user-friendly interfaces and interactive web experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-[var(--portfolio-surface-soft)] rounded-full text-sm text-[var(--portfolio-text)] hover:bg-[var(--portfolio-surface)] transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend Card */}
        <div className="bg-[var(--portfolio-primary-purple)] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">
            Backend Development
          </h3>
          <p className="mb-6 text-sm opacity-90">
            Building scalable systems, APIs, and server-side applications.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Python", "REST APIs", "MySQL", "PostgreSQL", "Supabase", "Git & GitHub", "Express"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm hover:bg-white/30 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Machine Learning Card */}
        <div className="bg-[var(--portfolio-primary-purple)] p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-white">
              Machine Learning
            </h3>
            <span className="text-xs px-3 py-1 bg-[var(--portfolio-surface)] rounded-full text-[var(--portfolio-text-muted)]">
              Learning
            </span>
          </div>
          <p className="mb-6 text-sm text-white opacity-90">
            Learning how to build models, analyze data, and make predictions to solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Machine Learning Fundamentals", "Supervised Learning", "Python for ML"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm hover:bg-white/30 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI Card */}
        <div className="bg-[var(--portfolio-bg)] border border-[var(--portfolio-surface)] p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-[var(--portfolio-text)]">
              Artificial Intelligence
            </h3>
            <span className="text-xs px-3 py-1 bg-[var(--portfolio-surface)] rounded-full text-[var(--portfolio-text-muted)]">
              Learning
            </span>
          </div>
          <p className="mb-6 text-sm text-[var(--portfolio-text-muted)]">
            Exploring data-driven solutions and machine learning concepts.
          </p>
          <div className="flex flex-wrap gap-3">
            {["NumPy", "Pandas", "Matplotlib"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-[var(--portfolio-surface-soft)] rounded-full text-sm text-[var(--portfolio-text)] hover:bg-[var(--portfolio-surface)] transition"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-xs mt-6 text-[var(--portfolio-text-muted)]">
            Continuously learning and building real-world projects.
          </p>
        </div>

      </div>
    </section>
  );
}