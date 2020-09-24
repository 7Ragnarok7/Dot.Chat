var express = require('express');
var router = express.Router();

/* Get contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', {title: 'Contact', style: 'css/style.css'});
});

module.exports = router;