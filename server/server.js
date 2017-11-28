// import { String } from 'core-js/library/web/timers';
const path = require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-Parser');
// const mongoose = require('mongoose');
var config = require('config.json');

app.use(cors());

// Parsers for POST data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Set up API Routes
// const api = require('./server/routes/api');
app.use('/users', require('./controllers/users.controllers'));


// // mongoose.connect('mongodb://localhost/myappdatabase');

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// // Set our api routes
// app.use('/api', api); // This route must come after all other 
// // routes have been declared

// // Catch all routes and return to the index file
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// start server: 
var port = process.env.NODE_ENV === 'production' ? 80: 4000;
// Setting up ports and store in Express
// const port = process.env.PORT || '3000';
// app.set('port', port);
var server = app.listen(port, function() {
    console.log("Server listening on port " + port);
});

// // Create HTTP Server
// const server = http.createServer(app);

// // Listen on provided port
// server.listen(port, () => console.log('API running on local host: '+  port));

// let UserSchema = new mongoose.Schema({
//     userName: String,
//     password: String,
//     name: String, 
//     points: Number
// });

// // Create a model based on the schema
// let User = mongoose.model('User', UserSchema);
