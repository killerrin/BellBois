const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.username,
  password: process.env.password,
  database: process.env.table,
});

const util = require("util");
const query = util.promisify(connection.query.bind(connection));

/**
 * A basic Hello World function
 * @param {string} string user id.
 * @param {array} args box's name
 * @returns {object}
 */
module.exports = async (string, args) => {
  connection.connect();

  const result = await query(string, args);

  connection.end();
  return result;
};