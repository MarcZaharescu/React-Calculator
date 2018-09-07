import React from 'react';

const Button = (props) => {
  return (
    </input
      type = "button"
      className = {props.type === 'Action'? 'button action type' : 'button input type'}
      value = {props.label}
      onClick = {props.handleClick}
  );
}

Button.proptypes = {
  type: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
}

export default Button;
