import React from 'react';
import Searchbar from '../components/Searchbar';
import ResultContainer from '../components/ResultContainer';

// Page set up for search

const Search = () => {
  return (
    <div>
      <Searchbar />
      <ResultContainer 
        heading = 'Results' 
        buttonClass1 = 'result-view'
        buttonClass2 = 'result-save'
        buttonText1 = 'View'
        buttonText2 = 'Save' />
    </div>
  )
}

export default Search;