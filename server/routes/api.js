const express = require('express');
const router = express.Router();

// Get API listening
router.get('/', (req, res) =>{
    res.send('api workks');
});

module.exports = router;
