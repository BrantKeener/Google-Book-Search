import React from 'react';
import Button from '../Button';

const Result = ({ 
  buttonClass1, 
  buttonClass2, 
  buttonText1, 
  buttonText2}) => {
  return (
    <section className = 'result'>
      <section className = 'result-buttons'>
        <Button classy = {buttonClass1} buttonText = {buttonText1} />
        <Button classy = {buttonClass2} buttonText = {buttonText2} />
      </section>
      <section className = 'result-title-author'>
        <h3 className = 'result-book-title'>Title</h3>
        <h4 className = 'result-author'>Author</h4>
      </section>
      <section className = 'result-image-synopsis'>
        <img className = 'result-image' alt = 'Book Jacket'></img>
        <p className = 'result-synopsis'></p>
      </section>
    </section>
  )
}

export default Result;