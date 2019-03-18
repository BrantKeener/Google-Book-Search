// Controller for our db
const db = require('../models');

module.exports = (app) => {
  // Get request for all the saved files
  app.get('/getbooks', (req, res) => {
    db.Book.findAll({})
      .then(data => {
        return res.json(data);
      })
      .catch(error => {
        throw error;
      });
  });

  // Save new books
  app.post('/savebook', (req, res) => {
    db.Book.create(
      req.body
    )
    .then(result => {
      return res.json(result);
    })
    .catch(error => {
      throw error;
    });
  });

  // Delete a book
  app.post('/deletebook', (req, res) => {
    db.Book.remove({

    })
    .then(data => {
      return res.json(data);
    })
    .catch(error => {
      throw error;
    });
  });
  
};