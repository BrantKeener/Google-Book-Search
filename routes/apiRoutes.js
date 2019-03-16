// Routes necessary for making calls to Google Books API, and out database
require('dotenv').config();

module.exports = (app) => {
  app.get('/googlesearch', (req, res) => {
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    const title = 'It';
    const APIKey = `&key=${process.env.API_KEY}`;
    const searchTerm = 'intitle:';
    // const author;
    const builtURL = `${baseURL}${searchTerm}${title}${APIKey}`
    console.log(builtURL);
    // fetch()
  })
}