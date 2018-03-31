const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.username,
  password: process.env.password,
  database: process.env.table,
});

const util = require("util");
const uuidv4 = require("uuid/v4");
const query = util.promisify(connection.query.bind(connection));

/**
 * A basic Hello World function
 * @param {string} userID user id.
 * @param {string} name box's name
 * @param {string} picture picture
 * @param {string} description box's description
 * @returns {string}
 */
module.exports = async (userID, name = 'box', picture = null, description = null, context) => {
  connection.connect();

  const id = uuidv4();

  console.log(id);

  const result = await query("INSERT INTO `Boxes` (ID, name, userID, picture, description) VALUES (?, ?, ?, ?, ?)", [id, name, userID, picture, description]);

  console.log("thing");

  connection.end();
  return {id, name, userID, picture, description};
};