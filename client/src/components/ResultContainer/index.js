import React from 'react';
import Result from '../Result';

const ResultContainer = ({ 
  heading, 
  buttonClass1, 
  buttonClass2, 
  buttonText1, 
  buttonText2 }) => {
  return (
    <section id = 'result-container'>
      <h3>{heading}</h3>
      <Result 
        buttonClass1 = {buttonClass1}
        buttonClass2 = {buttonClass2}
        buttonText1 = {buttonText1}
        buttonText2 = {buttonText2}/>
    </section>
  )
}

export default ResultContainer;