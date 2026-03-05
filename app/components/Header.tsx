"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-md shadow-lg border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and title */}
        <Link href="/" className="flex items-center space-x-2 text-white">
          <Image
            src="/assets/portLogoTrans.png"
            alt="Logo"
            width={48}
            height={48}
          />
          <span className="text-xl font-bold tracking-tight">Tech Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="px-4 pb-4 space-y-3">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="block text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide uppercase py-1"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;