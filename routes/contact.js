var express = require('express');
var router = express.Router();

/* Get contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', {title: 'Contact Page'});
});

module.exports = router;