const conn = require('../configs/db-configs');
let indexModel = {
  getUserList: function() {
    return new Promise(function(resolve, reject) {
      conn.query('SELECT u.id, u.user_name, j.job_role_name, u.user_email FROM day_two_schema.tbl_users AS u JOIN day_two_schema.tbl_job_role AS j ON u.job_role_id = j.id;', function(err, result) {
        if(err) {
          reject(err);
        }
        else {
          conn.query('SELECT id, job_role_name FROM day_two_schema.tbl_job_role;', function(err1, result1) {
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