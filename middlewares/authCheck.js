var db = require('../models/index');
var crypto = require('crypto');

var authCheck = (req, res, next) => {
let Email = req.body.email,
  Password= crypto.createHash('md5').update(req.body.pwd).digest('hex');
  console.log(Email,Password);
  
db.getUserData(Email, Password).then((resp)=> {
    if(resp[2] == "" || resp[3] == ""){
      res.render('index', { title: 'Login', style: 'css/style.css', msg: 'Invalid Email/Password !' });
    }

    else{
      // req.params.accessToken = 'AbcdXyz1234';
      next(resp); 
      console.log(resp);
    }
  }).catch((err) => {
      res.status(500).send('<h1 style="text-align: center;">500! Internal Server Error!</h1>'); });
    };

  module.exports = authCheck;
