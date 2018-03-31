const mysql = require("mysql");

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.username,
  password: process.env.password,
  database: process.env.table,
});

/**
 * A basic Hello World function
 * @param {string} string user id.
 * @param {array} args box's name
 * @returns {object}
 */
module.exports = (string, args) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        reject(err);
      }
      conn.query(string, args, (err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result);
        }
      });
    });
  });

};