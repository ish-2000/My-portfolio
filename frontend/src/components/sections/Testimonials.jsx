import { useRef } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const containerRef = useRef(null);

  // Testimonial data with duplicates for seamless looping
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "CTO, Tech Innovations",
      image: "/testimonial1.jpg",
      quote:
        "One of the most talented developers I've worked with. Their attention to detail and problem-solving skills are exceptional.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Product Manager, Digital Solutions",
      image: "/testimonial2.jpg",
      quote:
        "Working with them was a game-changer for our project. They provided valuable insights that improved the overall user experience.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Founder, StartUp Inc.",
      image: "/testimonial3.jpg",
      quote:
        "They took our vague idea and turned it into a beautiful, functional product. Their technical expertise created an application our users love.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "Lead Designer, Creative Agency",
      image: "/testimonial4.jpg",
      quote:
        "As a designer, I appreciate developers who can bring designs to life exactly as envisioned. They did that and more with subtle improvements.",
      rating: 5,
    },
    // Duplicates for seamless loop
    {
      id: 5,
      name: "Alex Johnson",
      position: "CTO, Tech Innovations",
      image: "/testimonial1.jpg",
      quote:
        "One of the most talented developers I've worked with. Their attention to detail and problem-solving skills are exceptional.",
      rating: 5,
    },
    {
      id: 6,
      name: "Sarah Williams",
      position: "Product Manager, Digital Solutions",
      image: "/testimonial2.jpg",
      quote:
        "Working with them was a game-changer for our project. They provided valuable insights that improved the overall user experience.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-r from-slate-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/30 reveal"
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Animated Title and Subtitle */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Feedback from peers, clients, and collaborators
          </motion.p>
        </div>

        {/* Floating Testimonials Container */}
        <div className="relative overflow-hidden" ref={containerRef}>
          {/* Left and right fading edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>

          {/* Infinite floating animation container */}
          <motion.div
            className="flex gap-6 py-8"
            animate={{
              x: ["0%", "-16.67%", "0%"],
            }}
            transition={{
              x: {
                duration: 25,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex-shrink-0 w-[350px] p-6 rounded-xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm shadow-md hover:shadow-xl border border-blue-100 dark:border-blue-900/30 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  backdropFilter: "blur(12px)",
                  transition: { duration: 0.3 },
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  // Subtle up and down animation for each card
                  animation: `float ${
                    3 + index * 0.3
                  }s ease-in-out infinite alternate`,
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative mr-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900/30 shadow-md">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 p-1 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                      <FaQuoteLeft className="text-primary-500 text-sm" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 italic leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>

                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-primary-500 mr-1" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Custom keyframe animation for the vertical floating */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
