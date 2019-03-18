// Bring backend data to the frontend
import axios from 'axios';
// import '../dotenv';

export default {
  googleSearch: (search) => {
      const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
      const title = search;
      const APIKey = `&key=${process.env.API_KEY}`;
      const searchTerm = 'intitle:';
      // const author;
      const builtURL = `${baseURL}${searchTerm}${title}${APIKey}`;
      return axios.get(builtURL);
  },
  
  loadBooksDB: () => {
    return axios.get('/books');
  },

  deleteBookDB: (name) => {
    return axios.delete(`/book/${name}`);
  },

  saveBookDB: (book) => {
    return axios.put('/savebook', book);
  }
}
