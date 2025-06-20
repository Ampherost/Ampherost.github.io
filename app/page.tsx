import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

export default function Home() {
  return (
    <main className="bg-sky-100 dark:bg-zinc-900 text-white text-xl min-h-screen">
      {/* Header */}
      <Header />

      {/* About Me */}
      <section id="about" className="p-8">
        <Container title="About Me">
          <p className="mb-4">
            Hello! I am an aspiring software engineer and a dedicated computer science
            student with a passion for problem-solving, building impactful applications,
            and a love for coding.
          </p>
          <p className="mb-4">
            I am particularly interested in <strong>Software engineering, Web development,
            cybersecurity, AI/Machine learning</strong>, and I am constantly seeking
            opportunities to learn, grow, and contribute to exciting projects.
          </p>
          <p>
            Outside of coding, I enjoy <strong>PC building, playing chess, hiking,
            marksmanship, and gym</strong>, which help me stay balanced and bring
            creativity into my work.
          </p>
        </Container>
      </section>




      {/* Skillz */}
      <section id="skills" className="p-8">
  <Container
    title="Skills"
    className=""
  >
    <div className="flex flex-wrap gap-2">
      {[
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Python",
        "Django",
        "SQL",
        "Git",
        "Docker",
      ].map((skill) => (
        <span
          key={skill}
          className="bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
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
                href="https://github.com/Ampherost/Nurtition-website"
                className="text-blue-300 hover:text-blue-200"
              >
                Nutrition Website
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ampherost/FE-echoes-shard-simulator"
                className="text-blue-300 hover:text-blue-200"
              >
                Fire Emblem Echoes Shard Simulator
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ampherost/AI-TicTacToe"
                className="text-blue-300 hover:text-blue-200"
              >
                AI TicTacToe
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
       {/* Footer */}
      <Footer />
    </main>
  );
}

