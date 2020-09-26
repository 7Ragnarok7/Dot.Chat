var express = require('express');
var router = express.Router();
var authCheck = require('../middlewares/authCheck');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Login', style: 'css/style.css', msg: '' });
});

router.post('/', authCheck, (req, res, next) => {
  res.render('homepage', {
    title: 'Welcome to Dot.Chat!',
    style1: 'css/lib/bootstrap.min.css', 
    style2: 'css/swipe.min.css',
    data: {
      fname: next[0], 
      lname: next[1],
      email: next[2], 
      active: next[4]
    }
 });
});
module.exports = router;
