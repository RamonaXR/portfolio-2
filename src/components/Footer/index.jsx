import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>
        <p className="mb-6 text-gray-400">Want to get in touch? Feel free to reach out!</p>
        <div className="mb-6 flex justify-center space-x-6">
          <a
            href="mailto:ramonaelise@gmail.com"
            aria-label="Email Ramona Jensen"
            className="text-yellow-500 transition-colors hover:text-yellow-400"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ramona-jensen-9994362b8/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Ramona Jensen's LinkedIn profile"
            className="text-yellow-500 transition-colors hover:text-yellow-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/RamonaXR"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Ramona Jensen's GitHub profile"
            className="text-yellow-500 transition-colors hover:text-yellow-400"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ramona Jensen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
