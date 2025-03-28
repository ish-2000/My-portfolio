import { useRef } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const containerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "David Carter",
      position: "Owner, Carter Web Studio",
      image: "/testimonial1.jpg",
      quote:
        "Delivered a highly professional website ahead of schedule. Communication was smooth, and the attention to detail was top-notch. Will definitely work again.",
      rating: 5,
    },
    {
      id: 2,
      name: "Lisa Gomez",
      position: "Founder, FitPulse App",
      image: "/testimonial2.jpg",
      quote:
        "Turned our app idea into a fully functional and beautifully designed product. Truly a reliable and skilled developer who exceeded our expectations.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mark Robinson",
      position: "Marketing Manager, Luxe Clothing",
      image: "/testimonial3.jpg",
      quote:
        "Revamped our e-commerce platform flawlessly. The new design and performance improvements significantly boosted our sales.",
      rating: 4,
    },
    {
      id: 4,
      name: "Emily Silva",
      position: "Project Manager, FarmCart Sri Lanka",
      image: "/testimonial4.jpg",
      quote:
        "Very satisfied with the work. Great understanding of client needs, and always willing to go the extra mile. Highly recommend for any web or app project.",
      rating: 5,
    },
    // Duplicates for seamless loop
    {
      id: 5,
      name: "David Carter",
      position: "Owner, Carter Web Studio",
      image: "/testimonial1.jpg",
      quote:
        "Delivered a highly professional website ahead of schedule. Communication was smooth, and the attention to detail was top-notch. Will definitely work again.",
      rating: 5,
    },
    {
      id: 6,
      name: "Lisa Gomez",
      position: "Founder, FitPulse App",
      image: "/testimonial2.jpg",
      quote:
        "Turned our app idea into a fully functional and beautifully designed product. Truly a reliable and skilled developer who exceeded our expectations.",
      rating: 5,
    },
    {
      id: 1,
      name: "Oliver Bennett",
      position: "Founder, GreenTech UK",
      image: "/testimonial1.jpg",
      quote:
        "Handled our platform development flawlessly. Always responsive and ready to suggest innovative solutions. Highly recommended for international teams.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophie Tanaka",
      position: "UI/UX Lead, Sakura Digital (Japan)",
      image: "/testimonial2.jpg",
      quote:
        "Exceptional frontend work with strong attention to localization and user experience. Smooth communication throughout the project.",
      rating: 5,
    },
    {
      id: 3,
      name: "Carlos Mendes",
      position: "Owner, Mendes Fashion (Portugal)",
      image: "/testimonial3.jpg",
      quote:
        "Brought our online store to life with clean code and a stylish UI. Sales increased significantly after the launch. Very reliable freelancer.",
      rating: 4,
    },
    {
      id: 4,
      name: "Ava Mitchell",
      position: "Marketing Manager, Wanderlust Travel",
      image: "/testimonial4.jpg",
      quote:
        "Delivered a beautiful, fast-loading travel blog platform. The project was completed ahead of time without compromising quality.",
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
            className="flex gap-3 py-2"
            animate={{
              x: ["0%", "16.67%", "0%"], // move right
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
                className="flex-shrink-0 w-[350px] p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm shadow-md hover:shadow-xl border border-blue-100 dark:border-blue-900/30 transition-all duration-300"
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
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-3 py-2 mt-4"
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
                className="flex-shrink-0 w-[350px] p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm shadow-md hover:shadow-xl border border-blue-100 dark:border-blue-900/30 transition-all duration-300 "
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
                    <FaStar key={i} className="text-yellow-400 mr-1" />
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
