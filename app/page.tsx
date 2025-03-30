import Image from "next/image";

// src/app/page.tsx

export default function Home() {
  return (
    <main className="bg-sky-100 text-black text-xl min-h-screen">
      {/* Header */}
      <header className="bg-navy text-white p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 text-left">
          <p className="text-2xl font-bold">Russell Ly</p>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        </div>
        <div className="flex-1 flex justify-end">
          <nav>
            <ul className="flex flex-wrap gap-4 justify-end">
              <li>
                <a
                  href="#about"
                  className="bg-yellow-400 text-blue-900 border border-navy rounded-xl px-4 py-2 text-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="bg-yellow-400 text-blue-900 border border-navy rounded-xl px-4 py-2 text-lg"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="bg-yellow-400 text-blue-900 border border-navy rounded-xl px-4 py-2 text-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Me */}
      <section id="about" className="p-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          Hello! I'm an aspiring software engineer and a dedicated computer science student with a passion for problem-solving and a love for coding.
        </p>
        <p className="mb-4">
          I'm particularly interested in <strong>Software engineering, Web development, cybersecurity</strong>, and I'm constantly seeking opportunities to learn, grow, and contribute to exciting projects.
        </p>
        <p>
          Outside of coding, I enjoy <strong>PC building, playing chess, hiking, and gym</strong>, which help me stay balanced and bring creativity into my work.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://github.com/ramirez-nathan/Power-Play" className="text-blue-700 underline">Power Play</a></li>
          <li><a href="https://github.com/ramirez-nathan/CaveCrusade" className="text-blue-700 underline">Cave Crusade</a></li>
          <li><a href="https://github.com/Ampherost/Nurtition-website" className="text-blue-700 underline">Nutrition Website</a></li>
          <li><a href="https://github.com/Ampherost/FE-echoes-shard-simulator" className="text-blue-700 underline">Fire Emblem Echoes Shard Simulator</a></li>
          <li><a href="https://github.com/Ampherost/KitchenKingdom" className="text-blue-700 underline">KitchenKingdom</a></li>
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

