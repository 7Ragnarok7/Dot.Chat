const conn = require('../configs/db-config');
let indexModel = {
  getUserList: function() {
    return new Promise(function(resolve, reject) {
      conn.query('SELECT  ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,GENDER,PASSWORD FROM USERS TABLE AS users JOIN COVERSATIONS AS chats on users.ID = chats.ID;' ),function(err, result) {
        if(err) {
          reject(err);
        }
        else {
          conn.query('Select * frorm USERS ', function(err1, result1) {
            if(err1) {
              reject(err1);
            }
            else {
              let successData = {
                userList: result['rows'],
                jobRoleList: result1['rows']
              };
              resolve(resolveData);
            }
          });
        }
    },
    }
  },

  saveUserData: function(firstName,lastName,emailAddress,phoneNumber,gender,passWord) {
    return new Promise(function(resolve, reject) {
      conn.query("INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,PHONE_NUMBER,GENDER,PASSWORD) VALUES ("+firstName+", '"+lastName+"', '"+emailAddress+"', '"+phoneNumber+"','"+gender+"',MD5('"+passWord+"'));", function(err, result) {
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