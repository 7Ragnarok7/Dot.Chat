const conn = require('../configs/db-config');
const registerModel = {
      checkUserData: (Email) => {
        return new Promise((resolve, reject) => {
        conn.query("select email from users where email = '"+Email+"';", (err, result) => {
          if(err) {
            reject(err);
          }
          else {
            var resolveData = {
              email: result['rows']
            }
            resolve(resolveData);
        }; })
      })
      },

      saveUserData: (First_Name, Last_Name, Email, Phone_Number, Gender, Password) => {
      return new Promise((resolve, reject) => {
        conn.query("Insert into USERS (first_name,last_name,email,phone_number,gender,password) VALUES ("+First_Name+", '"+Last_Name+"', '"+Email+"','"+Phone_Number+"','"+Gender+"', MD5('"+Password+"'));", (err, result) => {
          if(err) {
            reject(err);
          }
          else {
            console.log(result);
                resolve(1);
          }
        });
      });
    }
  };

  module.exports = registerModel;