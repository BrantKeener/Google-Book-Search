import React, { Component } from 'react';
import ResultContainer from '../components/ResultContainer';
import Result from '../components/Result';
import Button from '../components/Button';
import API from '../utils/API';

// Page set up for saved

class Saved extends Component {
  
  loadSavedBooks = () => {
    API.loadBooksDB()
  }

  componentDidMount() {
    this.loadSavedBooks();
  }
  viewBook = () => {
    console.log('view');
  }

  deleteBook = () => {
    console.log('delete');
  }

  render() {
    return (
      <div>
        <ResultContainer 
          heading = 'Saved Books'>
          <Result>
            <Button 
              type = 'button'
              onClick = {this.viewBook}
              classy = 'result-view'
              buttonText = 'View' />
            <Button 
              type = 'button'
              onClick = {this.deleteBook} 
              classy = 'result-delete'
              buttonText = 'Delete' />
          </Result>
        </ResultContainer>
      </div>
    )
  }
}

export default Saved;


           
            
            