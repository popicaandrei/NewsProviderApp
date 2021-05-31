const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('Welcome to news page')
});

module.exports = router;