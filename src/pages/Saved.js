import React, { Component } from 'react';
import ResultContainer from '../components/ResultContainer';
import Result from '../components/Result';
import Button from '../components/Button';

// Page set up for saved

class Saved extends Component {
  
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


           
            
            