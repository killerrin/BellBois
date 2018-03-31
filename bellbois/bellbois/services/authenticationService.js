const query = require("./SQLService");
const {hashPassword, hashAPIKey} = require ("./hashingService");

async function authenticateUser(apiKey) {
  var result = await query("SELECT ID, APIKey FROM Users WHERE APIKey = ?", [apiKey]);
  // console.log(result);

  if (result == undefined) return false;
  return true;
}

async function loginUser(username, password) {
  var passwordHash = hashPassword(password);

  var result = await query("SELECT * FROM Users WHERE username = ?", [username]);
  var dataColumns = result[0];
  if (dataColumns["passwordHash"] === passwordHash) {
    return {
      ID: dataColumns["ID"],
      username: dataColumns["username"],
      email: dataColumns["email"],
      APIKey: dataColumns["APIKey"],
      purchaseDate: dataColumns["purchaseDate"],
      dateCreated: dataColumns["dateCreated"]
    };
  }

  return null;
}

module.exports = {authenticateUser, loginUser};