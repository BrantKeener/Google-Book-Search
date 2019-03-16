import React from 'react';

const Button = ({ classy, buttonText, type = 'button' }) => {
  return (
    <button type = {type} className = {classy}>{buttonText}</button>
  )
}

export default Button;