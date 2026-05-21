import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

/* ── Project Data ─────────────────────────────────────────── */
const projects = [
  {
    name: "CodeConquest",
    href: "https://github.com/Ampherost/CodeConquest",
    description:
      "A gamified coding challenge platform that turns learning algorithms into an adventure-style conquest.",
    tech: ["TypeScript", "React", "Node.js"],
  },
  {
    name: "Power Play",
    href: "https://github.com/ramirez-nathan/Power-Play",
    description:
      "An interactive 2D platform fighter game with unique character abilities, dynamic levels, and local multiplayer support.",
    tech: ["C#", "Unity"],
  },
  {
    name: "Cave Crusade",
    href: "https://github.com/ramirez-nathan/CaveCrusade",
    description:
      "A dungeon-crawling adventure game with caves, enemies, and loot systems.",
    tech: ["C++", "SFML", "Google Test"],
  },
  {
    name: "Algorithm Engineering",
    href: "https://github.com/Ampherost/Algorithm-Engineering",
    description:
      "A collection of optimized algorithm implementations and performance benchmarks.",
    tech: ["C++", "Python"],
  },
  {
    name: "AI Projects",
    href: "https://github.com/Ampherost/AI-Projects",
    description:
      "Various AI/ML projects including search algorithms, neural networks, and intelligent agents.",
    tech: ["Python", "TensorFlow"],
  },
];

/* ── Badge Color Mapping ──────────────────────────────────── */
const badgeStyles: Record<string, string> = {
  languages: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  frameworks:
    "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  tools: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  devskills:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  management:
    "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  certs: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  coreClasses:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  techElectives:
    "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-300",
};

function BadgeGroup({
  label,
  items,
  style,
}: {
  label: string;
  items: string[];
  style: string;
}) {
  return (
    <div>
      <h3 className="text-base font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`px-3 py-1 rounded-full text-sm font-medium ${style}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Header />

      <main className="flex-grow">
        {/* ── Hero Section ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative container mx-auto px-8 py-24 md:py-32 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-4 font-medium">
              Software Engineer &middot; CS Graduate
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Russell Ly
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-10">
              CS graduate from{" "}
              <strong className="text-white">UC Riverside</strong> with a strong
              foundation across{" "}
              <strong className="text-white">
                software engineering, systems, and DevOps
              </strong>
              , with a focus on{" "}
              <strong className="text-white">full-stack web development</strong>{" "}
              and building fast, scalable, user-focused applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-colors duration-200"
              >
                View Projects &darr;
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white font-semibold text-sm transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/Ampherost"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white font-semibold text-sm transition-colors duration-200"
              >
                GitHub &#x2197;
              </a>
            </div>
          </div>
        </section>


        {/* ── About Me ────────────────────────────────────── */}
        <section id="about" className="px-8 py-12 max-w-5xl mx-auto">
          <Container
            title="About Me"
            className="bg-gradient-to-br from-[#d0bda9]/80 to-[#91857a]/80 dark:from-[#d0bda9]/20 dark:to-[#91857a]/20 border-[#b8a696] dark:border-[#91857a]/40"
          >
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                I am a CS graduate from <strong>UC Riverside</strong> with
                hands-on experience building{" "}
                <strong>
                  full-stack web applications, systems software, and developer
                  tooling
                </strong>
                . I am passionate about writing clean, maintainable code and
                shipping impactful software.
              </p>
              <p>
                Beyond web development, I am drawn to{" "}
                <strong>
                  systems engineering, DevOps, and the growing role of AI in
                  software development
                </strong>
                . Long term, I am particularly interested in{" "}
                <strong>defense tech and autonomous systems</strong>, fields
                where software has real-world, high-stakes impact and where
                engineering quality matters.
              </p>
              <p>
                Outside of coding, I enjoy building PCs, playing chess, hiking,
                practicing marksmanship, and tracking my personal finances,
                which keep me analytical, grounded, and sharpen my critical
                thinking.
              </p>
            </div>
          </Container>
        </section>


        {/* ── Experience ────────────────────────────────── */}
        <section id="experience" className="px-8 py-12 max-w-5xl mx-auto">
          <Container title="Experience">
            <div className="relative pl-6">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-sky-500/30 dark:bg-sky-400/20" />

              {/* ── Handshake AI ── */}
              <div className="relative pb-10">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-sky-500 border-2 border-white dark:border-zinc-900" />

                {/* Role header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-lg font-bold">
                    Software Engineer, AI Research
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                    May 2026 &ndash; Present
                  </span>
                </div>
                <p className="text-base font-medium text-sky-600 dark:text-sky-400 mb-4">
                  Handshake AI &middot; Remote
                </p>

                {/* Accomplishments */}
                <ul className="space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <li className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>
                      Authored reference implementations and{" "}
                      <strong>golden solutions</strong> for software engineering
                      tasks drawn from real-world GitHub pull requests across
                      complex, industry-grade codebases.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>
                      Designed automated test suites that fail without the
                      target solution and pass with it, creating reliable
                      evaluation benchmarks used to grade state-of-the-art AI
                      models.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>
                      Analyzed and refined solutions to non-trivial engineering
                      problems where current frontier models struggle, following
                      language-idiomatic best practices and production code
                      standards.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>
                      Contributed to the evaluation pipeline shaping how
                      next-generation coding models are benchmarked, with work
                      directly informing model training and performance
                      measurement.
                    </span>
                  </li>
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {[
                    "Python",
                    "TypeScript",
                    "Git",
                    "Automated Testing",
                    "Code Review",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── ACM ── */}
              <div className="relative pb-2">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-sky-500 border-2 border-white dark:border-zinc-900" />

                {/* Role header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-lg font-bold">Software Engineer</h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                    Dec 2024 &ndash; Jan 2026
                  </span>
                </div>
                <p className="text-base font-medium text-sky-600 dark:text-sky-400 mb-4">
                  ACM &middot; Web Development Club &middot; Riverside, CA
                </p>

                {/* Accomplishments */}
                <ul className="space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <li className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>
                      Developed and maintained responsive web applications using{" "}
                      <strong>Next.js</strong> and <strong>Tailwind CSS</strong>
                      , utilizing a modular and scalable architecture to
                      streamline development processes.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>
                      Boosted user engagement by <strong>45%</strong> through
                      the implementation of user-friendly interfaces and
                      accessible designs across desktop and mobile platforms.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>
                      Reduced code review time by <strong>20%</strong> by
                      integrating Prettier and ESLint, ensuring consistent and
                      high-quality code.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>
                      Enhanced SEO rankings and reduced page load times by{" "}
                      <strong>40%</strong> through server-side rendering and
                      static site generation in Next.js.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>
                      Collaborated with a team of <strong>11 developers</strong>{" "}
                      to design and implement reusable UI components using
                      Tailwind CSS, accelerating development timelines by{" "}
                      <strong>30%</strong> and ensuring design consistency
                      across projects.
                    </span>
                  </li>
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {[
                    "Next.js",
                    "Tailwind CSS",
                    "ESLint",
                    "Prettier",
                    "SSR/SSG",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>


        {/* ── Relevant Coursework ─────────────────────────── */}
        <section
          id="relevant-coursework"
          className="px-8 py-12 max-w-5xl mx-auto"
        >
          <Container title="Relevant Coursework">
            <div className="space-y-6">
              <BadgeGroup
                label="Core Classes"
                items={[
                  "Data Structures & Algorithms",
                  "Software Construction",
                  "Discrete Structures",
                  "Computer Architecture",
                  "Operating Systems",
                  "Formal Languages & Automata",
                  "Compilers",
                  "Logic Design",
                ]}
                style={badgeStyles.coreClasses}
              />
              <BadgeGroup
                label="Technical Electives"
                items={[
                  "Algorithm Engineering",
                  "Software Engineering",
                  "Unix Systems Administration",
                  "Senior Design Project",
                  "Database Management Systems",
                  "Computing Entrepreneurship",
                  "Artificial Intelligence",
                  "Software Testing",
                ]}
                style={badgeStyles.techElectives}
              />
            </div>
          </Container>
        </section>

        {/* ── Skills ──────────────────────────────────────── */}
        <section id="skills" className="px-8 py-12 max-w-5xl mx-auto">
          <Container title="Skills">
            <div className="space-y-6">
              <BadgeGroup
                label="Programming Languages"
                items={[
                  "C++",
                  "C",
                  "C#",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "Rust",
                  "HTML",
                  "CSS",
                ]}
                style={badgeStyles.languages}
              />
              <BadgeGroup
                label="Frameworks & Libraries"
                items={[
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Supabase",
                  "Express",
                  "Django",
                  ".NET",
                ]}
                style={badgeStyles.frameworks}
              />
              <BadgeGroup
                label="Tools"
                items={[
                  "Git",
                  "GitHub",
                  "Google Test",
                  "Pytest",
                  "Jest",
                  "React Testing Library",
                  "Travis CI",
                  "CMake/Make",
                  "gcov/lcov",
                  "Docker",
                ]}
                style={badgeStyles.tools}
              />
              <BadgeGroup
                label="Development Skills"
                items={[
                  "Test-driven Development",
                  "Unit & Integration Testing",
                  "CI/CD Deployment",
                  "SOLID Principles",
                  "Design Patterns",
                  "Agile Practices",
                  "Version Control Workflows",
                ]}
                style={badgeStyles.devskills}
              />
              <BadgeGroup
                label="Management"
                items={["Scrum", "Kanban", "GitHub Projects", "Jira"]}
                style={badgeStyles.management}
              />
              <BadgeGroup
                label="Certifications"
                items={[
                  "Google Cloud",
                  "Agile",
                  "Docker",
                  "Kubernetes",
                  "FinOps",
                ]}
                style={badgeStyles.certs}
              />
            </div>
          </Container>
        </section>

        {/* ── Projects ────────────────────────────────────── */}
        <section id="projects" className="px-8 py-12 max-w-5xl mx-auto">
          <Container title="Projects">
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold group-hover:text-sky-500 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <span className="text-zinc-400 group-hover:text-sky-500 transition-colors text-sm">
                      {"\u2197"}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Contact ─────────────────────────────────────── */}
        <section id="contact" className="px-8 py-12 max-w-5xl mx-auto">
          <Container title="Contact">
            <div className="space-y-3 text-base">
              <p>
                Email:{" "}
                <a
                  href="mailto:russell.g.ly@gmail.com"
                  className="text-sky-500 hover:text-sky-400 underline underline-offset-4 decoration-sky-500/30 hover:decoration-sky-400 transition-colors"
                >
                  russell.g.ly@gmail.com
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/Ampherost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:text-sky-400 underline underline-offset-4 decoration-sky-500/30 hover:decoration-sky-400 transition-colors"
                >
                  github.com/Ampherost
                </a>
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
