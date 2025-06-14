import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-zinc-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-white">
          Tech Portfolio
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-white hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;