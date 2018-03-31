const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.username,
  password: process.env.password,
  database: process.env.table,
});

const util = require("util");
const query = util.promisify(connection.query.bind(connection));

async function authenticateUser(id, apiKey) {
  connection.connect();
  var result = await query("SELECT ID, APIKey FROM Users WHERE ID = ? AND APIKey = ?", [id, apiKey]);
  console.log(result);
  connection.end();

  if (result == undefined) return false;
  return true;
}