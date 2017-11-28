const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://mongodb://localhost/myappdatabase';


// Get API listening
router.get('/', (req, res) =>{
    res.send('api workks');
});

// Get all posts
router.get('/users', (req, res) =>{
    // Get the posts from the api
})

module.exports = router;
