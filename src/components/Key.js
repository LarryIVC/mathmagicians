import React from 'react';
import PropTypes from 'prop-types';
import './Keys.css';

function Key({ children }) {
  const isOrange = (data) => {
    let output = '';
    if (data === '+' || data === 'x' || data === '-' || data === '÷' || data === '=') {
      output = 'orange';
    }
    return output;
  };
  return (
    <div className={`key ${isOrange(children)}`}>
      {children}
    </div>
  );
}

Key.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Key;
