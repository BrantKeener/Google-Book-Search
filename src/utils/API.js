// Bring backend data to the frontend
import axios from 'axios';
require('dotenv').config();

export default {
  googleSearch: (search) => {
      const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
      const title = search;
      const APIKey = `&key=`;
      const searchTerm = 'intitle:';
      // const author;
      const builtURL = `${baseURL}${searchTerm}${title}${APIKey}`;
      return axios.get(builtURL)
  },
  
  loadBooksDB: () => {
    return axios.get('/books')
  },

  deleteBookDB: () => {
    
  }
}
