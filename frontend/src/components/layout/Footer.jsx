import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-card dark:bg-dark-card py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold mb-2">
              <span className="text-primary-600">Port</span>folio
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex mt-6 md:mt-0 space-x-4">
            <a
              href="https://github.com/ish-2000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-accent text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ishara-athapaththu-548840320"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-accent text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-accent text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:isharaudayanga1000@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-accent text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Ishara. All rights reserved.
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6 italic">
              Designed & built by{" "}
              <span className="text-primary-600 font-semibold">
                Ishara Udaanga
              </span>
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
