const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-Parser');

// Set up API Routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extende:false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use()
