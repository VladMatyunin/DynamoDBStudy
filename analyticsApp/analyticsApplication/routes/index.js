var express = require('express');
var router = express.Router();
var logRepository = require('../repository/logs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , data: logRepository.getAll()});
});

module.exports = router;
