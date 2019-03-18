const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

// Setup the middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// Add route
require('./public/routes/apiRoutes')(app);

// Serve static assets for sites like heroku
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
} else {
  app.use(express.static('server'));
};

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooksearch', { useNewUrlParser: true });

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API Server now listening on PORT ${PORT}.`)
})