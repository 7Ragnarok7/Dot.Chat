var express = require('express');
const conn = require('../configs/db-config');
var router = express.Router();
var db= require('../models/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login', style: 'css/style.css' });
});

router.post('/', function(req, res, next) {
  let Email = req.body.email,
  Password = req.body.pwd;

  db.getUserData(Email,Password).then((resp =>{
    if (resp.Email== '"+Email+"'){
     res.render('register', { title: 'Register', style: 'css/style.css', msg: 'User exists already!'});
   }
  else {
    conn.query("select password from users where email='"+Email+"';")
  } }))
});

module.exports = router;
