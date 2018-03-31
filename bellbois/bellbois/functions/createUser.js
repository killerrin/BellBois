const dateFormat = require('dateformat');
const query = require("../services/SQLService");
const {hashPassword, hashAPIKey} = require("../services/hashingService");
const uuidv4 = require("uuid/v4");

/**
 * Create User
 * @param {string} email
 * @param {string} password
 * @returns {any}
 */
module.exports = async function createUser(email, password, context) {
  // Get the current date and format in MYSQL date format
  var today = new Date();
  var currentDate = dateFormat(today, "yyyy-MM-dd HH:MM:ss");
  console.log(currentDate);

  // Hash the values
  var passwordHash = hashPassword(password);
  var apiKey = hashAPIKey(email, currentDate);

  var result = await query("INSERT INTO Users (ID, username, passwordHash, email, APIKey, purchaseDate, dateCreated) VALUES (?, ?, ?, ?, ?, ?, ?)", [
    uuidv4(),
    email,
    passwordHash,
    email,
    apiKey,
    null,
    currentDate
  ]);

  console.log(result);
}