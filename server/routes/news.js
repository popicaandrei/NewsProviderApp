const express = require('express');
const router = express.Router();
const authorize = require('./permissions');

router.get('/', authorize, (req, res) => {
  res.send(req.user);
});

module.exports = router;
