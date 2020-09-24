const env = require('../env');
const { Pool } = require('pg');
const conn = new Pool({
  host: env.dbHost,
  port: env.dbPort,
  user: env.dbUser,
  password: env.dbPass,
  database: env.dbName
});
module.exports = conn;