import { motion } from "framer-motion";
import { FiDownload, FiMail, FiArrowDown } from "react-icons/fi";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useTheme } from "@contexts/ThemeContext";

const Hero = () => {
  const titleWords = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Creative Technologist",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const { darkMode } = useTheme();

  // Rotate roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % titleWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden transition-colors duration-500 ease-in-out
        bg-gradient-to-b from-blue-50 via-slate-50 to-white 
        dark:from-[#0f172a] dark:via-[#0f172a] dark:to-[#030712]"
    >
      {/* Background floating UI elements - Updated for light mode */}
      <div className="absolute top-[-50px] left-[-80px] w-[200px] h-[200px] bg-blue-200/40 dark:bg-blue-500/10 rounded-full blur-2xl z-[-1]" />
      <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] bg-indigo-200/40 dark:bg-indigo-500/10 rounded-full blur-3xl z-[-1]" />
      <div className="absolute top-[30%] left-[40%] w-[150px] h-[150px] bg-blue-100/50 dark:bg-blue-400/5 rounded-full blur-xl z-[-1]" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              {/* Square Outline (Top-Left) - Vertical float animation */}
              <motion.div
                className="absolute top-[-40px] left-[-40px] w-28 h-28 border-[3px] border-blue-300/50 dark:border-blue-500/30 rounded-md z-[-1]"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Small Blue Dot (Bottom-Left) - Gentle pulse animation */}
              <motion.div
                className="absolute bottom-[-10px] left-[0px] w-3 h-3 bg-blue-400 dark:bg-blue-500 rounded-full z-[-1]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Small Blue Dot (Top-Right) - Horizontal shift with opacity wave */}
              <motion.div
                className="absolute top-[20px] right-[-10px] w-3 h-3 bg-blue-400 dark:bg-blue-500 rounded-full z-[-1]"
                animate={{ x: [0, 6, 0], opacity: [1, 0.6, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Half-Hidden Circle Outline (Behind Image Right Side) - Slow rotation */}
              <motion.div
                className="absolute top-[30%] right-[-20px] w-20 h-20 border-[2px] border-blue-300/50 dark:border-blue-500/30 rounded-full z-[-1]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Half-Hidden Solid Circle (Behind Image Right Side) - Floating with opacity fade */}
              <motion.div
                className="absolute top-[80%] right-[-20px] w-20 h-20 bg-blue-200/30 dark:bg-blue-500/10 rounded-full z-[-1]"
                animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Dark Blurred Circle (Bottom-Left Behind Image) - Pulsing glow */}
              <motion.div
                className="absolute bottom-[-80px] left-[0px] w-72 h-72 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl z-[-1]"
                animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />

              {/* Main profile container with image */}
              <div className="relative w-60 h-60 md:w-72 md:h-72 flex justify-center items-center mx-auto border-4 border-blue-400 dark:border-blue-500 rounded-full overflow-hidden shadow-lg transition-all duration-300">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-300 dark:border-blue-500" />

                {/* Inner ring - subtle glow */}
                <div className="absolute inset-[4px] rounded-full border border-blue-200/60 dark:border-blue-400/30" />

                {/* Image */}
                <img
                  src="https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742677860/WhatsApp_Image_2025-03-23_at_02.40.19_da62bba0111_ufkzuq.jpg"
                  alt="Ishara"
                  className="w-full h-full object-cover rounded-full shadow-lg z-10"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-blue-600 dark:text-blue-400 font-medium mb-2"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              Ishara Udayanga
            </motion.h1>

            {/* Animated Role Tagline */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-200 h-[2.5rem] md:h-[3rem]"
            >
              {titleWords[currentRole]}
              <span
                className={`ml-2 text-blue-500 ${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                |
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md"
            >
              I craft user-centric digital experiences with clean code and
              pixel-perfect design. Turning complex problems into elegant
              solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="/your-cv.pdf"
                download
                className="px-4 py-2 text-sm rounded font-medium transition-all duration-300 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white hover:text-white shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="mr-1.5" size={16} /> Download CV
              </motion.a>

              <motion.button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`px-4 py-2 text-sm rounded font-medium transition-all duration-300 inline-flex items-center 
                  ${
                    darkMode
                      ? "bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
                      : "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
                  }
                  
                  `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="mr-1.5" size={16} /> Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="cursor-pointer flex flex-col items-center"
          >
            <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">
              Scroll Down
            </span>
            <FiArrowDown className="animate-bounce text-blue-500" size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
