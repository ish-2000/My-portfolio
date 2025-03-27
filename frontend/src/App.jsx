import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import SplashScreen from "./components/ui/SplashScreen";
import ScrollToTop from "./components/ui/ScrollToTop";
import TestSection from "./components/sections/TestSection"; // Import the new section
import FloatingTech from "./components/sections/FloatingTech";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { darkMode } = useTheme();

  // Add scroll reveal functionality
  useEffect(() => {
    console.log(
      "%cHey curious dev! 👋 This site was handcrafted by Ishara",
      "color: #38bdf8; font-size: 14px; font-family: monospace;"
    );

    const handleScroll = () => {
      const sections = document.querySelectorAll(".reveal");

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
          section.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Splash Screen */}
      <SplashScreen />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <div
          className={`min-h-screen bg-light-bg dark:bg-dark-bg transition-all duration-300 ease-theme ${
            darkMode ? "dark-theme" : "light-theme"
          }`}
        >
          <Navbar />
          <main>
            <Hero />
            <TestSection />
            <About />
            <Experience />
            <Projects />
            <FloatingTech />

            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
