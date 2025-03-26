import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Add this import
import { useTheme } from "@contexts/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaJs,
  FaJava,
  FaPython,
  FaAngular,
  FaVuejs,
  FaAws,
  FaPhp,
  FaBitbucket,
  FaGithub,
  FaWordpress,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostman,
  SiRedux,
  SiFirebase,
  SiGraphql,
  SiKotlin,
  SiDjango,
  SiFlutter,
  SiElectron,
  SiSass,
  SiVite,
  SiVercel,
  SiNetlify,
  SiGithubactions,
  SiAndroidstudio,
} from "react-icons/si";

const FloatingTech = () => {
  const { darkMode } = useTheme();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Add useInView hook for scroll-triggered animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Array of tech icons with their names and colors
  const techIcons = [
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: FaNodeJs, name: "Node.js", color: "#689F63" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
    { icon: FaDocker, name: "Docker", color: "#2496ED" },
    { icon: SiExpress, name: "Express.js", color: "#ffffff" },
    { icon: SiRedux, name: "Redux", color: "#764ABC" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: FaJava, name: "Java", color: "#007396" },
    { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: SiDjango, name: "Django", color: "#092E20" },
    { icon: FaAngular, name: "Angular", color: "#DD0031" },
    { icon: FaVuejs, name: "Vue.js", color: "#4FC08D" },
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiElectron, name: "Electron", color: "#47848F" },
    { icon: SiPostman, name: "Postman", color: "#FF6C37" },
    { icon: SiSass, name: "Sass", color: "#CC6699" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: SiVite, name: "Vite", color: "#646CFF" },
    { icon: FaPhp, name: "PHP", color: "#777BB4" },
    { icon: FaGithub, name: "GitHub", color: "#ffffff" },
    { icon: SiVercel, name: "Vercel", color: "#ffffff" },
    { icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
    { icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
    { icon: SiAndroidstudio, name: "Android Studio", color: "#3DDC84" },
  ];

  // Get container dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // Update dimensions on mount
    updateDimensions();
    // Small delay to ensure all elements are properly rendered
    setTimeout(updateDimensions, 100);
    setIsMounted(true);

    // Update dimensions on resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section
      id="tech-stack"
      className={`relative flex flex-col items-center justify-center overflow-hidden py-8 md:py-12
    ${
      darkMode
        ? "bg-gradient-to-b from-gray-900 to-gray-800"
        : "bg-gradient-to-br from-blue-50 to-slate-100"
    }`}
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large glowing orbs in the background */}
        <div
          className={`absolute top-1/4 left-1/5 w-96 h-96 rounded-full 
            ${
              darkMode
                ? "bg-blue-500/5 blur-[100px]"
                : "bg-blue-300/20 blur-[80px]"
            }`}
        ></div>
        <div
          className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full 
            ${
              darkMode
                ? "bg-purple-500/5 blur-[100px]"
                : "bg-indigo-200/30 blur-[80px]"
            }`}
        ></div>

        {/* Grid pattern overlay */}
        <div
          className={`absolute inset-0 opacity-[0.07] ${
            darkMode ? "bg-grid-pattern" : "bg-grid-pattern-light"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Updated title section with scroll-triggered animations */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-4 
    ${darkMode ? "text-white" : "text-gray-800"}`}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            My Tech Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className={`max-w-2xl mx-auto 
              ${darkMode ? "text-blue-200/80" : "text-blue-700/80"}`}
          >
            Tools and technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Tech icon floating container */}
        <div
          ref={containerRef}
          className="relative w-full h-[70vh] max-h-[700px] mx-auto"
        >
          {isMounted &&
            techIcons.map((tech, index) => {
              // Generate random movement range (±40% of container dimensions)
              const moveX =
                Math.random() * dimensions.width * 0.8 - dimensions.width * 0.4;
              const moveY =
                Math.random() * dimensions.height * 0.8 -
                dimensions.height * 0.4;

              // Random initial position (using percentages to ensure responsiveness)
              const initialTop = `${Math.random() * 80 + 10}%`;
              const initialLeft = `${Math.random() * 80 + 10}%`;

              // Random duration between 6-12 seconds
              const duration = 6 + Math.random() * 6;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{
                    top: initialTop,
                    left: initialLeft,
                    zIndex: Math.floor(Math.random() * 20),
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: [0, moveX, 0],
                    y: [0, moveY, 0],
                    // Add subtle rotation for more organic movement
                    rotate: [0, Math.random() * 20 - 10, 0],
                  }}
                  transition={{
                    duration,
                    delay: Math.random() * 2, // Staggered start
                    repeat: Infinity,
                    repeatType: "mirror", // Smooth back-and-forth
                    ease: "easeInOut",
                    opacity: { duration: 1 },
                  }}
                  whileHover={{
                    scale: 1.3,
                    zIndex: 50,
                    filter: `drop-shadow(0 0 15px ${tech.color}80)`,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoveredIcon(tech.name)}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  <div className="relative">
                    <tech.icon
                      className={`text-4xl md:text-5xl lg:text-6xl transition-all duration-300
                        ${
                          hoveredIcon === tech.name
                            ? "opacity-100"
                            : darkMode
                            ? "opacity-80"
                            : "opacity-90"
                        }`}
                      style={{
                        color: tech.color,
                        filter: `drop-shadow(0 0 5px ${tech.color}40)`,
                      }}
                    />

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredIcon === tech.name ? 1 : 0,
                        y: hoveredIcon === tech.name ? 0 : 10,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 rounded-lg
                        text-xs font-medium whitespace-nowrap z-50
                        ${
                          darkMode
                            ? "bg-gray-800/90 text-blue-100 border border-blue-900/40"
                            : "bg-white/90 text-blue-900 border border-blue-200"
                        }`}
                      style={{
                        boxShadow: darkMode
                          ? "0 0 20px rgba(30, 64, 175, 0.3)"
                          : "0 4px 15px rgba(59, 130, 246, 0.15)",
                      }}
                    >
                      {tech.name}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default FloatingTech;
