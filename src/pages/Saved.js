import React, { Component } from 'react';
import ResultContainer from '../components/ResultContainer';
import Result from '../components/Result';
import Button from '../components/Button';
import API from '../utils/API';

// Page set up for saved

class Saved extends Component {
  
  state = {
    savedBooks: []
  };

  loadSavedBooks = () => {
    API.loadBooksDB()
      .then(response => {
        const data = response.data;
        this.setState({ savedBooks: data });
        console.log(this.state.savedBooks);
      })
  }

  componentDidMount() {
    this.loadSavedBooks();
  }

  deleteBook = (event) => {
    console.log(event.target.name);
  }

  render() {
    return (
      <div>
        <ResultContainer 
          heading = 'Saved Books'>
          {this.state.savedBooks.map((book) => {
            return(
            <Result
              key = {book._id}
              title = {book.title}
              autorhs = {book.authors}
              image = {book.image}
              description = {book.description}>
              <Button 
                reference = {book.info}
                type = 'button'
                classy = 'result-view'
                buttonText = 'View' />
              <Button 
                name = {book._id}
                type = 'button'
                onClick = {this.deleteBook} 
                classy = 'result-delete'
                buttonText = 'Delete' />
            </Result>
            )
          })}
        </ResultContainer>
      </div>
    )
  }
}

export default Saved;


           
            
            