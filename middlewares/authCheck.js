var validUserData = {
      userName: 'surajit',
      userPass: 'abcd1234'
    };
    
    var authCheck = function(req, res, next) {
      if(req.params.userName == validUserData.userName && req.params.userPass == validUserData.userPass) {
        req.params.accessToken = 'AbcdXyz1234';
        next();
      }
      else {
        res.send('Invalid User');
      }
    };
    
    module.exports = authCheck;