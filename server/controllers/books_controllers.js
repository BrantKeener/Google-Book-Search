// Controller for our db
const db = require('../models');

module.exports = {
  // Get request for all the saved files
  findAll: (cb) => {
    db.Book
      .find({})
      .then(dbModel => cb(dbModel))
      .catch(error => cb(error));
  },

  // Save new books
  create: (req, cb) => {
    db.Book
      .create(req)
      .then(dbModel => cb(dbModel))
      .catch(error => cb(error));
  },

  // Delete a book TODO this
  remove: (req, cb) => {
    db.Book
      .deleteOne({
        _id: req
      })
      .then(data => cb(`Deleted: ${data}`))
      .catch(error => cb(error))
  }
};