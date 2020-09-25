const conn = require('../configs/db-config');
let indexModel = {
  getUserList: function() {
    return new Promise(function(resolve, reject) {
          conn.query('SELECT * from USERS where EMAIL= Email;', function() {
            if(err1) {
              reject(err1);
            }
            else {
              let resolveData = {
                userList: result['rows'],
              };
              resolve(resolveData);
            }
      });
    });
  }
};
  module.exports = indexModel;