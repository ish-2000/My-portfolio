import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiBook } from "react-icons/fi";

const Experience = () => {
  const workExperiences = [
    {
      id: 1,
      title: "Senior Front-End Developer",
      company: "Tech Innovations Inc.",
      duration: "2021 - Present",
      description:
        "Lead the front-end development team in creating responsive and accessible web applications. Implement best practices for React development and mentor junior developers.",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2019 - 2021",
      description:
        "Developed and maintained full-stack web applications. Collaborated with designers and product managers to deliver high-quality user experiences.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Creative Agency",
      duration: "2017 - 2019",
      description:
        "Created responsive websites for various clients. Implemented modern CSS techniques and JavaScript functionality.",
      technologies: ["JavaScript", "HTML/CSS", "SASS", "jQuery"],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "G.C.E. Ordinary & Advanced Level",
      institution: "Poramadulla Central College",
      duration: "2013 - 2022",
      description:
        "Completed both Ordinary Level and Advanced Level studies with a strong academic foundation. Actively engaged in science and technology subjects, laying the groundwork for my journey into IT and software development.",
    },
    {
      id: 2,
      degree: "BSc (Hons) in Information Technology (Specializing in IT)",
      institution: "Sri lanka institute of information technology",
      duration: "2023 - Present",
      description:
        "Undergraduate student in Information Technology, actively building knowledge in data structures, algorithms, database systems, and full-stack web development through hands-on projects and academic coursework.",
    },
  ];

  return (
    <section
      id="experience"
      className="section bg-light-bg dark:bg-dark-bg reveal"
    >
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experience & Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <FiBriefcase size={24} className="text-primary-600" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </motion.div>

            <div className="space-y-8">
              {workExperiences.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900/30"
                >
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary-600"></div>
                  <div className="card p-5">
                    <div className="flex flex-wrap justify-between mb-2">
                      <h4 className="text-xl font-semibold">{job.title}</h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <FiCalendar className="mr-1" />
                        <span>{job.duration}</span>
                      </div>
                    </div>
                    <p className="text-primary-600 font-medium mb-3">
                      {job.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <FiBook size={24} className="text-primary-600" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900/30"
                >
                  <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary-600"></div>
                  <div className="card p-5">
                    <div className="flex flex-wrap justify-between mb-2">
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <FiCalendar className="mr-1" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <p className="text-primary-600 font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-5 rounded-xl"
            >
              <h4 className="font-semibold mb-2">Professional Development</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>AWS Certified Developer Associate</li>
                <li>React Advanced Patterns Workshop</li>
                <li>UI/UX Design Fundamentals Course</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
