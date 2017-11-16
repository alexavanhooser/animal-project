const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-Parser');

// Set up API Routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));// extended false is deprecated... 

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api); // This route must come after all other 
// routes have been declared

// Catch all routes and return to the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Setting up ports and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP Server
const server = http.createServer(app);

// Listen on provided port
server.listen(port, () => console.log('API running on local host: '+  port));
