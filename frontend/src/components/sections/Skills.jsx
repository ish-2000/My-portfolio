import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "design", label: "Design" },
    { id: "tools", label: "Tools" },
  ];

  const skillsData = {
    frontend: [
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 88 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 70 },
    ],
    design: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 88 },
      { name: "Adobe XD", level: 75 },
      { name: "Responsive Design", level: 95 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 85 },
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 80 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
    ],
  };

  return (
    <section id="skills" className="section bg-light-bg dark:bg-dark-bg reveal">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-center text-gray-700 dark:text-gray-300">
            I've acquired a diverse range of skills throughout my journey as a
            developer. Here's an overview of my technical expertise and the
            tools I work with.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeTab === category.id
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-dark-accent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-md"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-primary-600 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-primary-600"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-6 rounded-xl shadow-sm text-center"
        >
          <h3 className="font-semibold text-lg mb-2">Constantly Learning</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Beyond these skills, I'm constantly expanding my knowledge in
            emerging technologies and frameworks to stay at the forefront of web
            development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
