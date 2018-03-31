const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.username,
  password: process.env.password,
  database: process.env.table,
});

const util = require("util");
const query = util.promisify(connection.query.bind(connection));

const crypto = require('crypto');
const hash = crypto.createHash('sha256');

/**
 * Authentication
 * @param {string} id
 * @param {string} apiKey
 * @returns {boolean}
 */
async function authenticateUser(id, apiKey, context) {
  connection.connect();
  var result = await query("SELECT ID, APIKey FROM Users WHERE ID = ? AND APIKey = ?", [id, apiKey]);
  console.log(result);
  connection.end();

  if (result == undefined) return false;
  return true;
}

/**
 * Login
 * @param {string} username
 * @param {string} password
 * @returns {object}
 */
module.exports = async function loginUser(username, password, context) {
  connection.connect();
  var result = await query("SELECT * FROM Users WHERE username = ?", [username]);

  hash.update(password);
  var password_hash = hash.digest('hex');


  console.log(result);
  connection.end();

  return {};
}