const conn = require('../configs/db-configs');
let indexModel = {
  getUserList: function() {
    return new Promise(function(resolve, reject) {
      conn.query('Select * from USERS', function(err, result) {
        if(err) {
          reject(err);
        }
        else {
          conn.query('Select * frorm USERS where ', function(err1, result1) {
            if(err1) {
              reject(err1);
            }
            else {
              let resolveData = {
                userList: result['rows'],
                jobRoleList: result1['rows']
              };
              resolve(resolveData);
            }
          });
        }
      });
    });
  },

  saveUserData: function(userName, jobRoleId, userEmail, userPass) {
    return new Promise(function(resolve, reject) {
      conn.query("INSERT INTO day_two_schema.tbl_users (job_role_id, user_name, user_email, user_password) VALUES ("+jobRoleId+", '"+userName+"', '"+userEmail+"', MD5('"+userPass+"'));", function(err, result) {
        if(err) {
          reject(err);
        }
        else {
          resolve(1);
        }
      });
    });
  }
};

module.exports = indexModel;