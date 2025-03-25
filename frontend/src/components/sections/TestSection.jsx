import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const TestSection = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Animation variants for staggered text - updated for more impact
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6, // Increased delay between lines for dramatic effect
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9, // Slower for more elegance
        ease: "easeOut",
      },
    },
  };

  // New headline with personal branding statements
  const headingLines = [
    "I Design Dreams.",
    "I Code Realities.",
    "I Build the Future.",
  ];

  return (
    <section
      id="impact" // Changed from "test" to "impact"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden
      bg-slate-50 dark:bg-gray-900 py-20"
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl z-0"
        animate={{
          y: [20, -20, 20],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Added subtle gradient glow behind text */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-blue-400/5 via-indigo-500/5 to-transparent dark:from-blue-400/10 dark:via-indigo-500/10 z-0"
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 text-center z-10 max-w-4xl">
        {/* Staggered heading with personal branding statements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white leading-tight">
            {headingLines.map((line, index) => (
              <motion.div
                key={index}
                variants={lineVariants}
                className="mb-3 md:mb-5"
              >
                {line}
              </motion.div>
            ))}
          </h2>
        </motion.div>

        {/* Updated subheading content */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 1.0, // Delayed more after headline
            ease: "easeOut",
            opacity: { duration: 1.5 },
          }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Whether it's a stunning interface or a powerful backend engine, I turn
          complex ideas into digital masterpieces. With clean code, clever
          interactions, and pixel-perfect passion — I don't just build apps. I
          craft experiences.
        </motion.p>

        {/* Updated button text and styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 1.4,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium flex items-center shadow-lg relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
          >
            {/* Shimmer effect on hover */}
            <span className="absolute w-24 h-full transform -translate-x-full bg-white/20 rotate-12 group-hover:translate-x-60 transition-transform duration-1000 ease-in-out"></span>

            <span>Let's Make It Happend</span>
            <motion.div
              className="ml-2 inline-flex"
              animate={{
                x: isButtonHovered ? 4 : 0,
                transition: { duration: 0.2 },
              }}
            >
              <FiArrowRight />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestSection;
