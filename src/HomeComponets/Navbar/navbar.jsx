import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact us", href: "#services" },
    { label: "Sign In", href: "#contact" },
    { label: "Sign Up", href: "#contact" },
  ];

  return (
    <nav
      className="p-2 sticky top-0 z-50 shadow-lg"
      style={{
        backgroundColor: "#0B050C",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="group text-white text-xl md:text-2xl font-bold tracking-wider transition duration-300 cursor-pointer">
          L
          <span className="transition duration-300 group-hover:text-red-400">
            O
          </span>
          GO
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map(({ label, href }, index) => (
            <li key={index}>
              <a
                href={href}
                className={`text-white hover:text-purple-800 transition duration-300 tracking-wider font-[400] py-2 px-1`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div
            ref={drawerRef}
            className="fixed inset-0 z-40 bg-[#0B050C] bg-opacity-95 md:hidden transition-all duration-500 ease-in-out transform animate-slideDown "
          >
            <div className="flex justify-end pt-5 px-4">
              <button
                onClick={closeMenu}
                className="text-white hover:text-red-400 focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 text-lg p-4     font-semibold tracking-wider text-gray-200 bg-[#0B050C]">
              {navLinks.map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  onClick={closeMenu}
                  className="text-white hover:text-purple-400 transition duration-300 border-b border-transparent hover:border-gray-500 pb-1"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
