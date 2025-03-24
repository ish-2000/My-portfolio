import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@contexts/ThemeContext";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    // Show splash screen for exactly 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`fixed inset-0 flex items-center justify-center z-[100] ${
            darkMode ? "bg-dark-bg" : "bg-blue-50"
          }`}
          style={{ pointerEvents: "all" }}
        >
          <motion.div
            className="futuristic-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [0.8, 1.05, 1],
              transition: {
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.7, 1],
              },
            }}
          >
            <h1 className={`name-logo ${!darkMode && "text-gray-800"}`}>
              ISHARA
              <span className="logo-dot"></span>
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
