/**
 * db.js
 *
 * Database connection
 */

const mysql = require('mysql');
const config = require('config');

const connection = mysql.createConnection(config.db);

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('MySQL database connection successful!');
});

exports.connection = connection;
