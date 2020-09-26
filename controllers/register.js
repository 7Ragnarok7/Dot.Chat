var express = require('express');
var router = express.Router();
var db = require('../models/register');

/* GET registration page */
router.get('/', (req, res, next) => {
  res.render('register', { title: 'Register', style: 'css/style.css', msg:''});
});

router.post('/', (req, res, next) => {
  const First_Name = req.body.fname,
      Last_Name = req.body.lname,
      Email = req.body.email,
      Phone_Number = req.body.number,
      Gender = req.body.gender,
      Password = req.body.pwd;


db.checkUserData(Email).then((resp) => {
    db.saveUserData(First_Name, Last_Name, Email, Phone_Number, Gender, Password).then((resp) => {
      res.render('register', { title: 'Register', style: 'css/style.css', msg: 'User registered successfully! <a href="/">LOGIN</a><br><br>'});  
  }).catch((err) => {
    if(err.detail == `Key (email)=(${Email}) already exists.`)
    {
      res.render('register', { title: 'Register', style: 'css/style.css', msg: 'User exists already!<br><br>'});
    }
    else{
    res.status(500).send('<h1 style="text-align: center;">500! Internal Server Error!</h1>'); }
   }); 
  }).catch((err) => {
    res.status(500).send('<h1 style="text-align: center;">500! Internal Server Error!</h1>'); }
  ); });

module.exports = router;