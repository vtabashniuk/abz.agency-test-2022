import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ options }) => {
  const { className, labelClass, isDisabled, label, onClick, type } = options;
  return (
    <button
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      <span className={labelClass}>{label}</span>
    </button>
  );
};

Button.propTypes = {
  options: PropTypes.shape({
    className: PropTypes.string,
    labelClass: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
  }),
};

export default Button;
