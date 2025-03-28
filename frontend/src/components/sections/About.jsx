import { motion, useScroll, useTransform } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  const techIcons = [
    { icon: <FaReact size={36} />, name: "React" },
    { icon: <FaNodeJs size={36} />, name: "Node.js" },
    { icon: <SiTypescript size={36} />, name: "TypeScript" },
    { icon: <SiTailwindcss size={36} />, name: "Tailwind" },
    { icon: <FaDatabase size={36} />, name: "Databases" },
    { icon: <FaFigma size={36} />, name: "UI/UX Design" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-gradient-to-br from-gray-900 to-blue-950/30 reveal py-12 md:py-20 relative"
    >
      {/* Subtle top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] 
        bg-gradient-to-r from-blue-500/20 via-gray-500/10 to-transparent 
        dark:from-blue-500/20 dark:via-white/10 dark:to-transparent"
      ></div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full 
          bg-blue-500/5 dark:bg-blue-500/5 blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full 
          bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl z-0"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-40 right-[15%] w-32 h-32 
          border border-blue-300/40 dark:border-blue-500/20 rounded-md z-0"
      />

      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute bottom-40 left-[10%] w-24 h-24 
          border border-indigo-300/40 dark:border-indigo-500/20 rounded-full z-0"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern 
        opacity-[0.05] dark:opacity-[0.03] z-0"
      ></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            About Me
          </motion.h2>

          {/* Gradient accent line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mb-8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-80 lg:h-96 w-full overflow-hidden rounded-xl">
              {/* Background glow effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 
                  bg-gradient-to-tr from-blue-300/20 to-indigo-300/20 
                  dark:from-blue-500/20 dark:to-indigo-500/20 
                  blur-2xl rounded-xl z-0"
              />

              {/* Geometric accents around image */}
              <motion.div
                className="absolute -top-4 -left-4 h-72 w-72 
                  border-2 border-blue-300/40 dark:border-blue-500/30 rounded-xl z-0"
                animate={{ rotate: [0, 5, 0] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-2 -right-2 h-16 w-16 
                  border border-indigo-300/50 dark:border-indigo-400/40 rounded-full z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <img
                src="/about-image.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-xl relative z-10 shadow-xl"
              />
              <div
                className="absolute bottom-4 right-4 p-4 
                bg-white/80 backdrop-blur-sm border border-blue-100/50
                dark:bg-gray-900/80 dark:border-gray-700/50 
                rounded-lg shadow-xl z-20"
              >
                <p className="font-bold text-primary-600 dark:text-primary-400">
                  {yearsOfExperience}+ Years
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Development Experience
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="subsection-title text-gray-800 dark:text-gray-100">
              <span className="text-primary-600 dark:text-primary-500">
                Full Stack Developer , UI UX Designer
              </span>{" "}
              with a passion for creating beautiful, functional websites
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I'm a passionate developer with a strong background in both
              frontend and backend technologies. I specialize in building
              responsive web applications with modern frameworks like React,
              focusing on performance, accessibility, and user experience.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              My journey in web development started over {yearsOfExperience}
              &nbsp; years ago, and I've worked on various projects ranging from
              e-commerce platforms to complex web applications. I'm constantly
              learning new technologies and methodologies to improve my craft.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 text-sm">
                💡 <span className="font-semibold">Creativity</span> — turning
                ideas into intuitive digital experiences.
              </div>
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-900/10 text-sm">
                🔍 <span className="font-semibold">Detail-Oriented</span> — I
                care about the little things that make big impacts.
              </div>
              <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/10 text-sm">
                🤝 <span className="font-semibold">Team Spirit</span> — I thrive
                in collaborative environments.
              </div>
              <div className="p-4 rounded-xl bg-yellow-50 dark:bg-emerald-900/10 text-sm">
                📚 <span className="font-semibold">Lifelong Learner</span> — I
                constantly explore new tools and techniques.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient divider for depth */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] 
        bg-gradient-to-r from-transparent via-gray-500/10 to-blue-300/20
        dark:from-transparent dark:via-white/10 dark:to-blue-500/20"
      ></div>
    </section>
  );
};

export default About;
