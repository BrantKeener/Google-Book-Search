// Routes necessary for making calls to Google Books API, and out database
require('dotenv').config();
const axios = require('axios');

module.exports = (app) => {
  app.get('/googlesearch', (req, res) => {
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    const title = 'Game%20of%20Thrones';
    const APIKey = `&key=${process.env.API_KEY}`;
    const searchTerm = 'intitle:';
    // const author;
    const builtURL = `${baseURL}${searchTerm}${title}${APIKey}`;
    axios.get(builtURL)
      .then(response => {
        const books = response.data.items;
        for (let i = 0; i < Object.keys(books).length; i++) {
          const volume = books[i].volumeInfo;
          console.log(`Title: ${volume.title}`);
          console.log(`Autohr: ${volume.authors}`);
          console.log(`Desc: ${volume.description}`);
          console.log(`Image: ${volume.imageLinks.thumbnail}`);
          console.log(`Info: ${volume.infoLink}\n`);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
};