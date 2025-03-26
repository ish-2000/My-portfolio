import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiX, FiInfo } from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FarmCart - Digital Marketplace",
      description:
        "A digital marketplace connecting farmers directly with consumers, featuring a shopping cart, secure checkout, and payment processing.",
      image:
        "https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742846527/Schilderijkoning_-_Canvas_Schilderij_Een_Doos_Groenten_-_40_x_30_cm_yiqz2b.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
      demoLink: "https://farmcart-demo.com",
      githubLink: "https://github.com/yourusername/farmcart",
      details:
        "FarmCart enables direct farm-to-consumer sales with features like product browsing, shopping cart management, secure payments via PayHere, order tracking with real-time updates using Socket.io, and an admin dashboard for farmers to manage products and orders. Built with a React frontend and a Node.js/Express backend, utilizing MongoDB for scalable data storage.",
    },
    {
      id: 1,
      title: "Royal Lodge Hotel Booking System",
      description:
        "A complete hotel booking platform with real-time availability, secure payments, and admin control.",
      image:
        "https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742972006/Screenshot_20250225_173611_zj2tl2.png",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Bootstrap",
        "Stripe",
      ],
      demoLink: "",
      githubLink: "",
      details:
        "Royal Lodge is a modern hotel reservation system that allows users to browse rooms, make bookings, and process payments securely using Stripe. Admins can manage rooms, view all bookings, and handle cancellations. The app features responsive design, animated UI components, PDF report downloads, and advanced booking tracking. The MERN stack ensures smooth performance with MongoDB for data storage and JWT-based authentication for secure user management.",
    },
    {
      id: 2,
      title: "Hello Coffee - Android Ordering App",
      description:
        "A modern coffee ordering app with real-time tracking and a smooth Kotlin-powered experience.",
      image:
        "https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742847396/Download_Close-up_of_a_laptop_and_coffee_for_free_yvbqji.jpg",
      technologies: ["Kotlin", "Android Studio", "XML", "Firebase", "MVVM"],
      demoLink: "",
      githubLink: "",
      details:
        "Hello Coffee is an Android application built using Kotlin in Android Studio, designed to deliver a seamless and interactive coffee ordering experience. Users can browse a variety of coffee types, customize their drinks, and track their orders in real-time. The app features a clean, intuitive UI with responsive design, following MVVM architecture and Firebase backend integration. Emphasizing both functionality and aesthetics, Hello Coffee makes ordering your favorite brew convenient, engaging, and delightful.",
    },
    {
      id: 3,
      title: "FitPulse - Fitness & Health Tracker App",
      description:
        "A powerful health & fitness app for tracking workouts, monitoring progress, and staying motivated.",
      image:
        "https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742976975/%EF%B8%8F__%EF%B8%8F_Fitness_Training_App_UI_eg17un.jpg",
      technologies: ["Kotlin", "Android Studio", "Firebase", "MVVM", "XML"],
      demoLink: "",
      githubLink: "https://github.com/kushanxyz/fitpulse",
      details:
        "FitPulse is a complete fitness and health management mobile app built using Kotlin in Android Studio. It helps users stay committed to their fitness goals by offering real-time workout tracking, health monitoring, personalized workout plans, and visual progress analytics. With a clean and engaging user interface, the app integrates Firebase for real-time data handling and offers push notifications for workout reminders. FitPulse is designed to be a reliable companion for anyone serious about their fitness journey.",
    },
    {
      id: 2,
      title: "Clothing Brand E-Commerce Website",
      description:
        "A full-featured online store for a fashion brand with dynamic product listings, cart management, and a smooth checkout experience.",
      image:
        "https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742848832/Screenshot_20250325_020927_umzxvh.png", // Replace with your actual image path
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      demoLink: "https://clothing-brand-demo.vercel.app", // Replace with your actual deployed link
      githubLink: "https://github.com/kushanxyz/clothing-brand", // Replace with your actual repo
      details:
        "This e-commerce platform is built for a modern clothing brand, allowing users to explore products, add them to a cart, and complete purchases with a user-friendly interface. Admins can manage inventory, update product info, and track orders. The platform uses the MERN stack for scalability, Tailwind CSS for responsive design, and JWT for secure user authentication. Features include product filtering, order summaries, customer profiles, and clean, minimal UI styling.",
    },
    {
      id: 4,
      title: "Online Vehicle Spare Parts System",
      description:
        "A complete platform for browsing, ordering, and managing vehicle spare parts online with secure admin and user panels.",
      image:
        "https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742976146/Top_Car_Website_Templates_for_Auto_Enthusiasts_-_EntheosWeb_yi9m9j.jpg", // Replace with your actual image URL
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      demoLink: "", // Add if hosted
      githubLink: "https://github.com/kushanxyz/vehicle-spare-parts-system",
      details:
        "The Online Vehicle Spare Parts System is a web-based application designed to streamline the purchase and management of automobile spare parts. Built using PHP and MySQL, it features separate panels for customers and administrators. Users can browse available parts, view product details, and place orders easily. The admin panel includes inventory control, order management, and product listing functionality. The system offers a smooth UI/UX, secure database operations, and efficient order processing for both sellers and buyers in the auto parts market.",
    },
  ];

  // Animation variants for card reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="projects"
      className="section bg-gradient-to-br from-gray-900 to-blue-950/30 reveal py-12 md:py-20 relative"
    >
      {/* Subtle top glow to complement the wave from About section */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-900/50 to-transparent opacity-60"></div>

      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="relative group overflow-hidden rounded-xl bg-white dark:bg-[#1a1f2b] transition-all duration-300 shadow-md hover:shadow-xl h-full"
            >
              {/* Project image with gradient overlay */}
              <div className="relative h-56 md:h-48 lg:h-52 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-[1]"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Project title overlay - only visible on mobile */}
                <h3 className="absolute bottom-0 left-0 right-0 text-white text-xl font-bold p-4 z-10 md:hidden">
                  {project.title}
                </h3>
              </div>

              {/* Project details - hidden on mobile */}
              <div className="p-5 md:block hidden">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-white bg-primary-600 hover:bg-primary-700 px-3 py-1.5 rounded-md text-sm font-medium flex items-center"
                  >
                    Details
                  </button>

                  <div className="flex space-x-3">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile view - Click overlay */}
              <div className="absolute inset-0 md:hidden flex items-center justify-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 w-full h-full z-20 opacity-0"
                  aria-label={`View ${project.title} details`}
                ></button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://github.com/ish-2000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary-600/10 hover:bg-primary-600/20 text-primary-700 dark:text-primary-300 dark:bg-primary-900/20 dark:hover:bg-primary-800/30 rounded-lg transition-colors duration-300 font-medium"
          >
            View More Projects &gt;&gt;
          </a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
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

              <div className="flex gap-4 flex-wrap">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FiGithub className="mr-2" /> View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
