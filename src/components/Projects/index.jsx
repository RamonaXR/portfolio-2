import { PROJECTS } from "../../data/projects";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ImageModal from "../Modal";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="container mx-auto px-4 py-12" id="projects">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>

      <div className="grid grid-cols-(--grid-cols-cards) gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-lg bg-[#37374f] p-6 shadow-md transition-shadow hover:shadow-[0_0_15px_rgba(139,92,246,0.8)]"
          >
            <div
              className="mb-4 h-56 w-full cursor-pointer overflow-hidden"
              onClick={() => handleImageClick(project.image)}
            >
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            </div>

            <h3 className="mb-2 text-xl font-semibold text-gray-100">{project.title}</h3>
            <p className="mb-4 flex-grow text-gray-300">{project.description}</p>

            <div className="flex justify-between">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-yellow-400 transition-colors hover:text-yellow-300"
              >
                <FaExternalLinkAlt className="mr-1" /> Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-yellow-400 transition-colors hover:text-yellow-300"
              >
                <FaGithub className="mr-1" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <ImageModal isOpen={!!selectedImage} imageSrc={selectedImage} onClose={handleCloseModal} />
    </section>
  );
};

export default Projects;
