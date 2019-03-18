// Routes necessary for making calls to Google Books API, and our database

const booksController = require('../controllers/books_controllers');

module.exports = (app) => {
  app.get('/sbooks', (req, res) => {
    booksController.findAll((response) => {
      res.json(response);
    })
  })
  app.put('/savebook', (req, res) => {
    booksController.create(req, (response) => {
      res.send(response);
    });
  })
}