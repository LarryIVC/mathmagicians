import React from 'react';
import PropTypes from 'prop-types';
import './css/Keys.css';

const Key = ({ children, manageClick }) => {
  const isOrange = (data) => {
    let output = '';
    if (data === '+' || data === 'x' || data === '-' || data === '÷' || data === '=') {
      output = 'orange';
    }
    return output;
  };
  return (
    <button
      className={`key ${isOrange(children)}`}
      onClick={manageClick}
      type="button"
    >
      {children}
    </button>
  );
};

Key.propTypes = {
  children: PropTypes.node.isRequired,
  manageClick: PropTypes.func.isRequired,
};

export default Key;
