import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-sky-100 text-black text-xl min-h-screen">
      {/* Header */}
      <Header />

      {/* About Me */}
      <section id="about" className="p-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          Hello! I am an aspiring software engineer and a dedicated computer science student with a passion for problem-solving, building impactful applications, and a love for coding.
        </p>
        <p className="mb-4">
          I am particularly interested in <strong>Software engineering, Web development, cybersecurity, AI/Machine learning</strong>, and I am constantly seeking opportunities to learn, grow, and contribute to exciting projects.
        </p>
        <p>
          Outside of coding, I enjoy <strong>PC building, playing chess, hiking, marksmanship, and gym</strong>, which help me stay balanced and bring creativity into my work.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://github.com/Ampherost/CodeConquest" className="text-blue-700 underline">CodeConquest</a></li>
          <li><a href="https://github.com/ramirez-nathan/Power-Play" className="text-blue-700 underline">Power Play</a></li>
          <li><a href="https://github.com/ramirez-nathan/CaveCrusade" className="text-blue-700 underline">Cave Crusade</a></li>
          <li><a href="https://github.com/Ampherost/Nurtition-website" className="text-blue-700 underline">Nutrition Website</a></li>
          <li><a href="https://github.com/Ampherost/FE-echoes-shard-simulator" className="text-blue-700 underline">Fire Emblem Echoes Shard Simulator</a></li>
          <li><a href="https://github.com/Ampherost/AI-TicTacToe" className="text-blue-700 underline">AI TicTacToe</a></li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:russell.g.ly@gmail.com" className="text-blue-700 underline">
            russell.g.ly@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}

