import React from 'react';

const Result = (props) => {
  const { children } = props;
  return (
    <section className = 'result'>
      <section className = 'result-buttons'>
        { children }
      </section>
      <section className = 'result-title-author'>
        <h3 className = 'result-book-title'>{props.title}</h3>
        <h4 className = 'result-author'>{props.authors}</h4>
      </section>
      <section className = 'result-image-synopsis'>
        <img src = {props.image} className = 'result-image' alt = 'Book Jacket'></img>
        <p className = 'result-synopsis'>{props.description}</p>
      </section>
    </section>
  )
}

export default Result;