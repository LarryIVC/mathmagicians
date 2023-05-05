import React from 'react';
import './css/Display.css';
import PropTypes from 'prop-types';

const Display = ({ input }) => (
  <div className="Display">
    {input.total}
    {input.operation}
    {input.next}
  </div>
);

Display.propTypes = {
  input: PropTypes.shape({
    total: PropTypes.number.isRequired,
    next: PropTypes.number,
    operation: PropTypes.string,
  }).isRequired,
};

export default Display;
