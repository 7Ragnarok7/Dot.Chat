var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('recovery', { title: 'Recover Your Account', style: 'css/style.css' });
});

module.exports = router;
