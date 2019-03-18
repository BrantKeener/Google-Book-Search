import React from 'react';

const Button = (props) => {
  return (
    props.reference ? 
    <a href = {props.reference} rel = 'noopener noreferrer' target = '_blank'>{props.buttonText}</a>:
    <button name = {props.name} type = {props.button} className = {props.classy} onClick = {props.onClick}>{props.buttonText}</button>
  )
}

export default Button;