import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const About = () => {
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
      className="section bg-light-accent dark:bg-dark-accent reveal"
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-80 lg:h-96 w-full overflow-hidden rounded-xl">
              <div className="absolute -top-4 -left-4 h-72 w-72 bg-primary-600 rounded-xl opacity-20"></div>
              <img
                src="/about-image.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-xl relative z-10 shadow-xl"
              />
              <div className="absolute bottom-4 right-4 p-4 bg-white dark:bg-dark-card rounded-lg shadow-xl z-20">
                <p className="font-bold text-primary-600">5+ Years</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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
            <h3 className="subsection-title">
              <span className="text-primary-600">Full Stack Developer</span>{" "}
              with a passion for creating beautiful, functional websites
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I'm a passionate developer with a strong background in both
              frontend and backend technologies. I specialize in building
              responsive web applications with modern frameworks like React,
              focusing on performance, accessibility, and user experience.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              My journey in web development started over 5 years ago, and I've
              worked on various projects ranging from e-commerce platforms to
              complex web applications. I'm constantly learning new technologies
              and methodologies to improve my craft.
            </p>

            <div className="mb-8">
              <h4 className="font-semibold mb-3">Technologies I work with:</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-3 bg-white dark:bg-dark-card rounded-lg shadow hover:shadow-md transition-all"
                  >
                    <div className="text-primary-600 mb-2">{tech.icon}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <a
              href="/your-cv.pdf"
              download
              className="btn btn-primary inline-flex items-center"
            >
              <FiDownload className="mr-2" /> Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
