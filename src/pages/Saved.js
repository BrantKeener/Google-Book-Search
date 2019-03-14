import React from 'react';
import ResultContainer from '../components/ResultContainer';

// Page set up for search

const Search = () => {
  return (
    <div>
      <ResultContainer heading = 'Saved Books'
      buttonClass1 = 'result-view'
      buttonClass2 = 'result-delete'
      buttonText1 = 'View'
      buttonText2 = 'Delete'/>
    </div>
  )
}

export default Search;