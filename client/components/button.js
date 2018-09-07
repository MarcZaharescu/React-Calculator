import React from 'react';
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <input
      type = "button"
      className = {props.type === 'Action'? 'button action type' : 'button input type'}
      value = {props.label}
      onClick = {props.handleClick}
    />
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button;
