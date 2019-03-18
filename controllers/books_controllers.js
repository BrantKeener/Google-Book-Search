// Controller for our db
const db = require('../models');

module.exports = {
  // Get request for all the saved files
  findAll: (req, res) => {
    db.Book
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error));
  },

  // Save new books
  create: (req, res) => {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error));
  },

  // Delete a book TODO this
  remove: (req, res) => {
    db.Book
    .remove({
    
    })
    .then(data => {
      return res.json(data);
    })
    .catch(error => {
      throw error;
    });
  }
};