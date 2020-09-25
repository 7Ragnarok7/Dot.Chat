<<<<<<< HEAD
const conn = require('../configs/db-config');
let indexModel = {
  getUserList: function() {
    return new Promise(function(resolve, reject) {
      conn.query('SELECT  ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,GENDER,PASSWORD FROM USERS TABLE AS users JOIN COVERSATIONS AS chats on users.ID = chats.ID;' ),function(err, result) {
=======
const conn = require('../configs/db-configs');
let indexModel = {
  getUserList: function() {
    return new Promise(function(resolve, reject) {
      conn.query('Select * from USERS', function(err, result) {
>>>>>>> 520fd320d8b42beed9344066521cb0f2c2b68d5e
        if(err) {
          reject(err);
        }
        else {
<<<<<<< HEAD
          conn.query('Select * frorm USERS ', function(err1, result1) {
=======
          conn.query('Select * frorm USERS where ', function(err1, result1) {
>>>>>>> 520fd320d8b42beed9344066521cb0f2c2b68d5e
            if(err1) {
              reject(err1);
            }
            else {
<<<<<<< HEAD
              let successData = {
=======
              let resolveData = {
>>>>>>> 520fd320d8b42beed9344066521cb0f2c2b68d5e
                userList: result['rows'],
                jobRoleList: result1['rows']
              };
              resolve(resolveData);
            }
          });
        }
<<<<<<< HEAD
    },
    }
  },

  saveUserData: function(firstName,lastName,emailAddress,phoneNumber,gender,passWord) {
    return new Promise(function(resolve, reject) {
      conn.query("INSERT INTO USERS (FIRST_NAME, LAST_NAME,EMAIL,PHONE_NUMBER,GENDER,PASSWORD) VALUES ("+firstName+", '"+lastName+"', '"+emailAddress+"', '"+phoneNumber+"','"+gender+"',MD5('"+passWord+"'));", function(err, result) {
=======
      });
    });
  },

  saveUserData: function(userName, jobRoleId, userEmail, userPass) {
    return new Promise(function(resolve, reject) {
      conn.query("INSERT INTO day_two_schema.tbl_users (job_role_id, user_name, user_email, user_password) VALUES ("+jobRoleId+", '"+userName+"', '"+userEmail+"', MD5('"+userPass+"'));", function(err, result) {
>>>>>>> 520fd320d8b42beed9344066521cb0f2c2b68d5e
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