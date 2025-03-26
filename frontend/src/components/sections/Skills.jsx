import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@contexts/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { MdDesignServices, MdOutlineArchitecture } from "react-icons/md";
import { BsTools } from "react-icons/bs";

const Skills = () => {
  const { darkMode } = useTheme();
  const backgroundRef = useRef(null);

  // Improved viewport detection with higher threshold
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Mouse parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;

      const elements = backgroundRef.current.querySelectorAll(".parallax-bg");
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      elements.forEach((el, i) => {
        // Different movement factor for each element
        const factor = (i + 1) * 0.02;
        const x = (e.clientX - centerX) * factor;
        const y = (e.clientY - centerY) * factor;

        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Organize skills by category
  const skillCategories = [
    {
      category: "Frontend",
      icon: <FaReact />,
      color: "blue",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Backend",
      icon: <FaNodeJs />,
      color: "green",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "RESTful APIs", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Design",
      icon: <MdDesignServices />,
      color: "purple",
      skills: [
        { name: "UI/UX Design", icon: <MdDesignServices /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Responsive Design", icon: <FaCss3Alt /> },
        { name: "Wireframing", icon: <MdOutlineArchitecture /> },
      ],
    },
    {
      category: "Tools",
      icon: <BsTools />,
      color: "amber",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "CI/CD", icon: <FaGitAlt /> },
      ],
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for category containers
  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.08,
      },
    },
  };

  // Animation variants for individual skills
  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  // Helper function to get color classes based on category
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        light: {
          bg: "bg-blue-50",
          border: "border-blue-100",
          text: "text-blue-600",
          hover: "hover:bg-blue-100/50",
          shadow: "shadow-blue-500/20",
        },
        dark: {
          bg: "dark:bg-blue-900/20",
          border: "dark:border-blue-800/30",
          text: "dark:text-blue-400",
          hover: "dark:hover:bg-blue-800/30",
          shadow: "dark:shadow-blue-500/10",
        },
      },
      green: {
        light: {
          bg: "bg-green-50",
          border: "border-green-100",
          text: "text-green-600",
          hover: "hover:bg-green-100/50",
          shadow: "shadow-green-500/20",
        },
        dark: {
          bg: "dark:bg-green-900/20",
          border: "dark:border-green-800/30",
          text: "dark:text-green-400",
          hover: "dark:hover:bg-green-800/30",
          shadow: "dark:shadow-green-500/10",
        },
      },
      purple: {
        light: {
          bg: "bg-purple-50",
          border: "border-purple-100",
          text: "text-purple-600",
          hover: "hover:bg-purple-100/50",
          shadow: "shadow-purple-500/20",
        },
        dark: {
          bg: "dark:bg-purple-900/20",
          border: "dark:border-purple-800/30",
          text: "dark:text-purple-400",
          hover: "dark:hover:bg-purple-800/30",
          shadow: "dark:shadow-purple-500/10",
        },
      },
      amber: {
        light: {
          bg: "bg-amber-50",
          border: "border-amber-100",
          text: "text-amber-600",
          hover: "hover:bg-amber-100/50",
          shadow: "shadow-amber-500/20",
        },
        dark: {
          bg: "dark:bg-amber-900/20",
          border: "dark:border-amber-800/30",
          text: "dark:text-amber-400",
          hover: "dark:hover:bg-amber-800/30",
          shadow: "dark:shadow-amber-500/10",
        },
      },
    };

    return colors[color] || colors.blue;
  };

  // Helper function to get a random floating animation parameters
  const getRandomFloatParams = (index) => {
    // Create deterministic but varied parameters based on index
    const seed = index * 0.537; // Use a multiplier to create variation

    return {
      // Y movement range (up and down)
      yRange: [0, -8 - (seed % 4), 0],

      // Optional subtle X movement for some icons (horizontal drift)
      xRange:
        index % 3 === 0 ? [0, 5, 0] : index % 3 === 1 ? [0, -4, 0] : [0, 0, 0],

      // Duration between 3-5 seconds
      duration: 3 + (seed % 2) * 2,

      // Delay to stagger animations
      delay: seed % 1.5,
    };
  };

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      {/* Floating background elements with parallax effect */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
        <div className="parallax-bg absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
        <div className="parallax-bg absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-400/5 dark:bg-purple-400/10 blur-3xl"></div>
        <div className="parallax-bg absolute top-2/3 left-2/3 w-64 h-64 rounded-full bg-green-400/5 dark:bg-green-400/10 blur-3xl"></div>
      </div>

      {/* Grid pattern overlay for additional texture */}
      <div
        className={`absolute inset-0 opacity-[0.03] ${
          darkMode ? "bg-grid-pattern" : "bg-grid-pattern-light"
        }`}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            animate={
              inView
                ? {
                    textShadow: darkMode
                      ? "0 0 8px rgba(59, 130, 246, 0.3)"
                      : "0 0 8px rgba(59, 130, 246, 0.15)",
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            My Tech Stack
          </motion.h2>

          {/* Animated gradient line */}
          <motion.div
            className="h-1 w-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-size-200"
            initial={{ width: 0, opacity: 0 }}
            animate={
              inView
                ? {
                    width: "6rem",
                    opacity: 1,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
              backgroundPosition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Tools and technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills grid with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);

            return (
              <motion.div
                key={category.category}
                variants={categoryVariants}
                className={`rounded-xl backdrop-blur-sm p-5 border ${
                  colorClasses.light.border
                } ${colorClasses.dark.border}
                  ${darkMode ? "bg-gray-800/40" : "bg-white/80"}
                  shadow-md hover:shadow-lg transition-all duration-300`}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${colorClasses.light.bg} ${colorClasses.dark.bg} ${colorClasses.light.text} ${colorClasses.dark.text}`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{category.category}</h3>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-3 gap-3">
                  {category.skills.map((skill, i) => {
                    // Get random floating animation parameters
                    const floatParams = getRandomFloatParams(i + index * 10);

                    return (
                      <motion.div
                        key={`${category.category}-${skill.name}`}
                        variants={skillVariants}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1)`,
                          backgroundColor: darkMode
                            ? "rgba(255, 255, 255, 0.05)"
                            : "rgba(255, 255, 255, 0.9)",
                        }}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg ${
                          colorClasses.light.hover
                        } ${colorClasses.dark.hover}
                          transition-all duration-300 aspect-square border border-transparent hover:border-opacity-30
                          ${
                            darkMode
                              ? "hover:border-gray-700"
                              : "hover:border-gray-200"
                          }`}
                      >
                        {/* Icon with floating animation */}
                        <motion.div
                          className={`text-2xl mb-2 ${colorClasses.light.text} ${colorClasses.dark.text} relative`}
                          animate={{
                            y: floatParams.yRange,
                            x: floatParams.xRange,
                          }}
                          transition={{
                            duration: floatParams.duration,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: floatParams.delay,
                          }}
                          whileHover={{
                            scale: 1.15,
                            filter: `drop-shadow(0 0 4px ${
                              darkMode
                                ? "rgba(59, 130, 246, 0.6)"
                                : "rgba(59, 130, 246, 0.4)"
                            })`,
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        <p className="text-xs font-medium text-center">
                          {skill.name}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* "Always learning" badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`mt-12 py-4 px-6 rounded-xl mx-auto max-w-2xl text-center relative overflow-hidden
            ${
              darkMode
                ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30"
                : "bg-gradient-to-r from-blue-50 to-purple-50/50 border border-blue-100/80"
            }`}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }}
          />

          <p className="relative z-10 text-sm md:text-base">
            <span className="font-semibold">Always learning:</span> Continuously
            expanding my knowledge in emerging technologies and frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
