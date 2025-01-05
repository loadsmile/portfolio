import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const MobileMenu = ({ sections, isOpen, setIsOpen }) => (
  isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden bg-primary/95 backdrop-blur-sm w-full"
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          smooth={true}
          className="block px-4 sm:px-6 py-2 text-white hover:text-accent cursor-pointer font-bold"
          onClick={() => setIsOpen(false)}
        >
          {section.title}
        </Link>
      ))}
    </motion.div>
  )
);

MobileMenu.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
