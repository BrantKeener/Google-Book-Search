import React from 'react';
// import Result from '../Result';

const ResultContainer = ( props ) => {
  const { children } = props;
  return (
    <section id = 'result-container'>
      <h3>{props.heading}</h3>
      { children }
    </section>
  )
}

export default ResultContainer;