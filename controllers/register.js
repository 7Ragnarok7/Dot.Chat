var express = require('express');
var router = express.Router();

/* GET registration page */
router.get('/', function (req, res, next) {
  res.render('register', { title: 'Register', style: 'css/style.css' });
});

router.post('/', function(req, res, next) {
  let userName = req.body.user_name,
      jobRoleId = req.body.job_role_id,
      userEmail = req.body.user_email,
      userPass = req.body.user_pass;
});

module.exports = router;