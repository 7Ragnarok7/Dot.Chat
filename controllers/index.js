var express = require('express');
var router = express.Router();
var db= require('../models/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login', style: 'css/style.css' });
});

router.post('/', function(req, res, next) {
  let Email = req.body.email,
  Password = req.body.pwd;
});

module.exports = router;
