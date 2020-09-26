const conn = require('../configs/db-config');
const indexModel = {
    getUserData: (Email, Password) => {
        return new Promise((resolve, reject) => {
            conn.query("select first_name, last_name,email, password,active_status from users where email = '" + Email + "' AND password= '"+Password+"';", (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else {
                    var resolveData = result['rows'];
                    resolve(resolveData);
                }
            })
        })
    }
};

module.exports = indexModel;