var express = require('express');
var router = express.Router();
const errorData = require('../models/error')

/* GET home page. */
router.get('/', function (req, res, next) {
res.render('error', errorData);
});

module.exports = router;
