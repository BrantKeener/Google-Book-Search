import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import ResultContainer from '../components/ResultContainer';
import Result from '../components/Result';
import Button from '../components/Button';

// Page set up for search

class Search extends Component {

  viewBook = () => {
    console.log('view')
  }

  saveBook = () => {
    console.log('save')
  }

  searchBook = (event) => {
    event.preventDefault();
    console.log('search');
  }

  render() {
    return (
      <div>
        <Searchbar 
          onClick = {this.searchBook}/>
        <ResultContainer 
          heading = 'Results'>
          <Result
            buttonClass1 = 'result-view'
            buttonClass2 = 'result-save'
            buttonText1 = 'View'
            buttonText2 = 'Save'>
            <Button 
              type = 'button'
              onClick = {this.viewBook}
              classy = 'result-view'
              buttonText = 'View' />
            <Button 
              type = 'button'
              onClick = {this.saveBook} 
              classy = 'result-save'
              buttonText = 'Save' />
          </Result>
        </ResultContainer>
      </div>
    )
  }
}

export default Search;