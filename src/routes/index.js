var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Split api into each router module
const users = require('./users');
const timeline = require('./timeline');

// Use necessary route
router.use('/users', users);
router.use('/timeline', timeline);


module.exports = router;
