import React from 'react';
import React, { Component } from 'react';
import ResultContainer from '../components/ResultContainer';

// Page set up for search

class Search extends Component {
  
  

  render() {
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
}

export default Search;