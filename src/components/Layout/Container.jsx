import PropTypes from 'prop-types';

export const Container = ({ children, className = "" }) => (
  <div className={`container mx-auto max-w-7xl ${className}`}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
