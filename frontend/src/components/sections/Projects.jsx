import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with cart, checkout, and payment processing.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://project1-demo.com",
      githubLink: "https://github.com/yourusername/project1",
      details:
        "This e-commerce platform features user authentication, product search/filtering, shopping cart functionality, secure payment processing, and an admin dashboard for inventory management. Built with a React frontend and Node.js backend, it uses MongoDB for data storage and Stripe for payments.",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity app for task management with real-time updates.",
      image: "/project2.jpg",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      demoLink: "https://project2-demo.com",
      githubLink: "https://github.com/yourusername/project2",
      details:
        "This task management application helps users organize their work with features like task creation, due dates, priority levels, and status tracking. The app includes collaborative features allowing teams to assign tasks and communicate. Built with React and Firebase for real-time updates and authentication.",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description:
        "A comprehensive financial dashboard for expense tracking and budgeting.",
      image: "/project3.jpg",
      technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
      demoLink: "https://project3-demo.com",
      githubLink: "https://github.com/yourusername/project3",
      details:
        "This financial dashboard provides users with tools to track expenses, monitor income, and set budgeting goals. Features include transaction categorization, monthly reports, and visual data representation through interactive charts. Built with Next.js and TypeScript, it uses PostgreSQL for reliable data storage.",
    },
    {
      id: 4,
      title: "Social Media Platform",
      description:
        "A social networking platform with real-time messaging and content sharing.",
      image: "/project4.jpg",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      demoLink: "https://project4-demo.com",
      githubLink: "https://github.com/yourusername/project4",
      details:
        "This social platform enables users to create profiles, connect with friends, share content, and engage in real-time messaging. Features include post creation with media support, likes and comments, and personalized feeds. Built with React and Socket.io for real-time functionality.",
    },
    {
      id: 5,
      title: "Travel Blog",
      description:
        "A content-focused travel blog with rich media support and location mapping.",
      image: "/project5.jpg",
      technologies: ["Gatsby.js", "GraphQL", "Netlify CMS", "Mapbox"],
      demoLink: "https://project5-demo.com",
      githubLink: "https://github.com/yourusername/project5",
      details:
        "This travel blog showcases destinations with rich media content including photos and videos. Features include location mapping, travel tips, and itinerary planning tools. Built with Gatsby.js for performance, it uses GraphQL for data querying and Netlify CMS for content management.",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "A health and fitness application for workout tracking and progress visualization.",
      image: "/project6.jpg",
      technologies: ["React Native", "Redux", "Express", "MongoDB"],
      demoLink: "https://project6-demo.com",
      githubLink: "https://github.com/yourusername/project6",
      details:
        "This fitness tracker helps users monitor workouts, track nutrition, and visualize progress over time. Features include custom workout creation, goal setting, achievement badges, and detailed analytics. Built with React Native for cross-platform compatibility and Express backend for API services.",
    },
  ];

  return (
    <section
      id="projects"
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
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-primary-600 font-medium hover:underline focus:outline-none"
                  >
                    View Details
                  </button>
                  <div className="flex-grow"></div>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-dark-card rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {selectedProject.details}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FiGithub className="mr-2" /> View Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
