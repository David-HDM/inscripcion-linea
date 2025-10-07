const mysql = require("mysql2");

const remote = mysql.createPool({
  host: process.env.REMOTE_DB_HOST,
  user: process.env.REMOTE_DB_USER,
  password: process.env.REMOTE_DB_PASS,
  database: process.env.REMOTE_DB_NAME,
});

const internal = mysql.createPool({
  host: process.env.INTERNAL_DB_HOST,
  user: process.env.INTERNAL_DB_USER,
  password: process.env.INTERNAL_DB_PASS,
  database: process.env.INTERNAL_DB_NAME,
});

module.exports = { remote, internal };