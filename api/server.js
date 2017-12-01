const mongoose = require('mongoose');
const config = require('./config');
// CONNECT TO DATABASE

mongoose.Promise = global.Promise;
mongoose.connect(config.database, (err) => {
  useMongoClient: true;
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
    console.log('Connected to database: ' + 'animal');
  }
});