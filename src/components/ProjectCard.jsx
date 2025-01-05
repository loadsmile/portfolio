import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="bg-white rounded-lg overflow-hidden shadow-xl group hover:-translate-y-2 transition-all duration-300"
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-full text-accent hover:scale-110 transition-transform duration-300"
          aria-label="View Live Demo"
        >
          <FaExternalLinkAlt size={20} />
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-full text-accent hover:scale-110 transition-transform duration-300"
          aria-label="View Code"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-paytone text-2xl text-accent mb-3 group-hover:text-accent/80 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-700 mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-accent/5 text-accent rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default ProjectCard;
