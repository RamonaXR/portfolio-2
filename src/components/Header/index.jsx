import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="border-b border-gray-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-lg font-bold">MyPortfolio</div>
        <ul className="hidden items-center space-x-6 md:flex">
          <li className="cursor-pointer transition-colors hover:text-gray-400">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-400">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-400">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="focus:outline-none">
            {menuOpen ? (
              <FaTimes className="h-6 w-6 text-gray-100" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-100" />
            )}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="bg-gray-800 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="cursor-pointer transition-colors hover:text-gray-400">
              <a href="#projects" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li className="cursor-pointer transition-colors hover:text-gray-400">
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="cursor-pointer transition-colors hover:text-gray-400">
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
