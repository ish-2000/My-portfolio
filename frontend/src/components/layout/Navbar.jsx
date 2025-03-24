import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@contexts/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced theme toggle button with animation
  const ThemeToggleButton = () => (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-light-accent dark:bg-dark-accent hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative overflow-hidden`}
      whileTap={{ scale: 0.95 }}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative z-10"
      >
        {darkMode ? (
          <FaMoon className="text-yellow-400" />
        ) : (
          <FaSun className="text-indigo-600" />
        )}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-100 dark:from-indigo-600 dark:to-blue-900 opacity-20 dark:opacity-30"
        initial={false}
        animate={{
          opacity: darkMode ? 0.3 : 0.2,
          scale: darkMode ? 1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="text-2xl font-poppins font-bold cursor-pointer"
        >
          <span className="text-primary-600">Port</span>folio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-primary-600 font-medium"
                  className="hover:text-primary-600 transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggleButton />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggleButton />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-light-accent dark:bg-dark-accent"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-dark-card shadow-lg rounded-b-xl"
        >
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-6 hover:bg-light-accent dark:hover:bg-dark-accent hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
