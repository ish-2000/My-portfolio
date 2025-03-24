import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

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
        "https://res.cloudinary.com/dgvdlyxhw/image/upload/v1739010702/the-anam-_twiIcIsp2s-unsplash_eyafvn_c_crop_w_1536_h_864_hbinht.jpg",
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
        "https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742847901/7_exercises_to_increase_running_speed_according_to_a_former_sprint_champion_cr1omg.jpg",
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
      id: 3,
      title: "FitPulse - Fitness & Health Tracker App",
      description:
        "A powerful health & fitness app for tracking workouts, monitoring progress, and staying motivated.",
      image:
        "https://res.cloudinary.com/dgvdlyxhw/image/upload/v1742847901/7_exercises_to_increase_running_speed_according_to_a_former_sprint_champion_cr1omg.jpg",
      technologies: ["Kotlin", "Android Studio", "Firebase", "MVVM", "XML"],
      demoLink: "",
      githubLink: "https://github.com/kushanxyz/fitpulse",
      details:
        "FitPulse is a complete fitness and health management mobile app built using Kotlin in Android Studio. It helps users stay committed to their fitness goals by offering real-time workout tracking, health monitoring, personalized workout plans, and visual progress analytics. With a clean and engaging user interface, the app integrates Firebase for real-time data handling and offers push notifications for workout reminders. FitPulse is designed to be a reliable companion for anyone serious about their fitness journey.",
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
