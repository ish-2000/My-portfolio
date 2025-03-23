import { motion } from "framer-motion";
import { FiDownload, FiMail, FiArrowDown } from "react-icons/fi";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Hero = () => {
  const titleWords = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Creative Technologist",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

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
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-blue-500 font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Ishara
            </h1>

            {/* Animated Role Tagline */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200 h-[2.5rem] md:h-[3rem]">
              {titleWords[currentRole]}
              <span
                className={`ml-2 text-blue-500 ${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                |
              </span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-xl">
              I craft user-centric digital experiences with clean code and
              pixel-perfect design. Turning complex problems into elegant
              solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/your-cv.pdf"
                download
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="mr-2" /> Download CV
              </motion.a>

              <motion.button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="mr-2" /> Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-60 h-60 md:w-72 md:h-72">
              <img
                src="https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742677860/WhatsApp_Image_2025-03-23_at_02.40.19_da62bba0111_ufkzuq.jpg"
                alt="Ishara"
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-700 shadow-lg"
              />
            </div>
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
            <span className="text-gray-600 dark:text-gray-400 text-sm mb-2">
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
