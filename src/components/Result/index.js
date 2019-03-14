import React from 'react';
import Button from '../Button';

const Result = () => {
  return (
    <section className = 'result'>
      <section className = 'result-buttons'>
        <Button classy = 'result-view' buttonText = 'View' />
        <Button classy = 'result-save' buttonText = 'Save' />
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