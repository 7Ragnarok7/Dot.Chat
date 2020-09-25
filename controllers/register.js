var express = require('express');
var router = express.Router();

/* GET registration page */
router.get('/', function (req, res, next) {
  res.render('register', { title: 'Register', style: 'css/style.css' });
<<<<<<< HEAD
});

router.post('/', function(req, res, next) {
  let userName = req.body.user_name,
      jobRoleId = req.body.job_role_id,
      userEmail = req.body.user_email,
      userPass = req.body.user_pass;
=======
>>>>>>> 520fd320d8b42beed9344066521cb0f2c2b68d5e
});

module.exports = router;