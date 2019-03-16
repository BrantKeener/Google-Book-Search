import React from 'react';

const Button = (props) => {
  return (
    <button type = {props.button} className = {props.classy} onClick = {props.onClick}>{props.buttonText}</button>
  )
}

export default Button;