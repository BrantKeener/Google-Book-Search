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
      .create(req.body)
      .then(dbModel => cb(dbModel))
      .catch(error => cb(error));
  },

  // Delete a book TODO this
  remove: (req, cb) => {
    db.Book
      .deleteOne({
        _id: req
      })
      .then(data => cb("Deleted!"))
      .catch(error => cb(error))
  }
};

// MyModel.findOneAndUpdate(query, req.newData, {upsert:true}, function(err, doc){
//   if (err) return res.send(500, { error: err });
//   return res.send("succesfully saved");
// });