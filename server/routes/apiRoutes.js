// Routes necessary for making calls to Google Books API, and our database

const booksController = require('../controllers/books_controllers');

module.exports = (app) => {
  app.get('/books', (req, res) => {
    booksController.findAll((response) => {
      res.json(response);
    })
  })
  app.put('/savebook', (req, res) => {
    booksController.create(req.body, (response) => {
      res.send(response);
    });
  })
  app.delete('/book/:id', (req, res) => {
    booksController.remove(req.params.id, (response => {
      res.send(response);
    }))
  })
}