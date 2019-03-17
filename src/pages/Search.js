import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import ResultContainer from '../components/ResultContainer';
import Result from '../components/Result';
import Button from '../components/Button';
// import Axios from 'axios';
import API from '../utils/API';

// Page set up for search

class Search extends Component {

  state = {
    books: []
  };

  saveBook = (event) => {
    console.log(event.target.name)
  };

  searchBook = (event) => {
    event.preventDefault();
    let searchForm = document.getElementsByName(event.target.name)[1];
    API.googleSearch(searchForm.value)        
      .then(response => {
        const booksArray = [];
        const booksData = response.data.items;
        for (let i = 0; i < Object.keys(booksData).length; i++) {
          const volume = booksData[i].volumeInfo;
          let image = volume.imageLinks ? volume.imageLinks.thumbnail : 'No Image Provided'
          const bookObject = {
            title: volume.title || 'No Title Provided',
            authors: volume.authors || 'No Authors Provided',
            description: volume.description || 'No Description Provided',
            image: image,
            info: volume.infoLink || 'No Additional Info Available'
          };
          booksArray.push(bookObject);
        }
        this.setState({ books: booksArray });
      })
      .catch(error => {
        console.log(error);
      });;
  };

  render() {
    return (
      <div>
        <Searchbar 
          onClick = {this.searchBook}/>
        <ResultContainer 
          heading = 'Results'>
          {this.state.books.map((book, index) => {
            return (
            <Result 
              key = {index}
              title = {book.title}
              authors = {book.authros}
              image = {book.image}
              description = {book.description}>
              <Button 
                reference = {book.info}
                type = 'button'
                classy = 'result-view'
                buttonText = 'View' />
              <Button 
                name = {index}
                type = 'button'
                onClick = {this.saveBook} 
                classy = 'result-save'
                buttonText = 'Save' />
            </Result>
            )
          })}
        </ResultContainer>
      </div>
    )
  }
}

export default Search;