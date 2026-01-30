import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-xl">
      {/* Header */}
      <Header />

    <main className="flex-grow">
      {/* About Me */}
      <section id="about" className="p-8">
        <Container title="About Me" className="bg-gradient-to-b from-[#d0bda9] to-[#91857a]">
          <p className="mb-4">
            Hello! I am an aspiring software engineer and a dedicated <strong>BS + MS</strong> computer science
            student with a passion for problem-solving, building impactful applications,
            and a love for coding.
          </p>
          <p className="mb-4">
            I am especially passionate about <strong>Software engineering, AI/ML, and cybersecurity</strong>,
            and I am deeply interested in fields like <strong>defense, autonomous systems, fintech, and 
            robotics</strong>. I am constantly seeking opportunities to learn, grow, and contribute to exciting projects.
          </p>
          <p>
            Outside of coding, I enjoy <strong>PC building, playing chess, hiking,
            marksmanship, and gym</strong>, which help me stay balanced and bring
            creativity into my work.
          </p>
        </Container>
      </section>

      {/* Relevant Coursework */}
      <section id="relevant-coursework" className="p-8">
        <Container
          title="Relevant Coursework"
          className=""
        >

         <div className="space-y-6">
      {/* Core Classes */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Core Classes</h3>
        <div className="flex flex-wrap gap-2">
          {["Data Structures & Algorithms", "Software Construction", "Discrete Structures", "Computer Architecture", "Operating Systems", "Formal Languages & Automata", "Compilers", "Logic Design" ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tech Electives */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Technical Electives</h3>
        <div className="flex flex-wrap gap-2">
          {["Algorithm Engineering", "Software Engineering", "Unix Systems Administration", "Senior Design Project", "Database Management Systems", "Computing Entrepreneurship", "Artificial Intelligence", "Software Testing" ].map(
            (skill) => (
              <span
                key={skill}
                className="bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  </Container>
       </section>




      {/* Skillz */}
<section id="skills" className="p-8">
  <Container title="Skills" className="">
    <div className="space-y-6">
      {/* Programming Languages */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
        <div className="flex flex-wrap gap-2">
          {["C++", "C", "C#", "Python", "JavaScript", "TypeScript", "Rust", "HTML", "CSS"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Frameworks & Libraries</h3>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Tailwind CSS", "Node.js", "Supabase", "Express", "Django", ".NET"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {["Git", "Github", "Google Test", "Pytest", "Jest", "React Testing Library", "Travis CI", "Cmake/make", "gcov/lcov", "Docker", "SFML"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Development Skills */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Development Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["Test-driven development", "Unit & Integration Testing", "CI/CD deployment", "SOLID Principles", "Design Patterns", "Agile Practices", "Version Control Workflows"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Management */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Management</h3>
        <div className="flex flex-wrap gap-2">
          {["Scrum", "Kanban", "Github projects", "Jira"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {["Google Cloud", "Agile", "Docker", "Kubernetes", "Finops"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Container>
</section>


      

      {/* Projects */}
      <section id="projects" className="p-8">
        <Container
          title="Projects"
          className=""
        >
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a
                href="https://github.com/Ampherost/CodeConquest"
                className="text-blue-300 hover:text-blue-200"
              >
                CodeConquest
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ramirez-nathan/Power-Play"
                className="text-blue-300 hover:text-blue-200"
              >
                Power Play
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ramirez-nathan/CaveCrusade"
                className="text-blue-300 hover:text-blue-200"
              >
                Cave Crusade
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ampherost/Algorithm-Engineering"
                className="text-blue-300 hover:text-blue-200"
              >
                Algorithm Engineering
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ampherost/AI-Projects"
                className="text-blue-300 hover:text-blue-200"
              >
                AI Projects
              </a>
            </li>
          </ul>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8">
        <Container
          title="Contact"
          className=""
        >
          <p>
            Email:{" "}
            <a
              href="mailto:russell.g.ly@gmail.com"
              className="text-blue-300 hover:text-blue-200"
            >
              russell.g.ly@gmail.com
            </a>
          </p>
        </Container>
       </section>
      </main>

       {/* Footer */}
      <Footer />
    </div>
  );
}

