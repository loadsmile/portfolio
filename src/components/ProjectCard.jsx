import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="bg-white rounded-lg overflow-hidden shadow-xl"
  >
    <div className="h-48 bg-accent/5"></div>
    <div className="p-6">
      <h3 className="font-paytone text-2xl text-accent mb-3">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-accent/5 text-accent rounded-full text-sm"
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
    codeLink: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default ProjectCard;
