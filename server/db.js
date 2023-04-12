const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit: 10,
  host: 'locahost',
  user: 'root',
  password: 'admin',
  database: 'computerproj',
});

module.exports = db;
