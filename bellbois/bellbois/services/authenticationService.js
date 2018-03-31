const query = require("./SQLService");
const {hashPassword, hashAPIKey} = require ("./hashingService");

async function authenticateUser(id, apiKey) {
  var result = await query("SELECT ID, APIKey FROM Users WHERE ID = ? AND APIKey = ?", [id, apiKey]);
  // console.log(result);

  if (result == undefined) return false;
  return true;
}

async function loginUser(username, password) {
  var result = await query("SELECT * FROM Users WHERE username = ?", [username]);
  var passwordHash = hashPassword(password);
  console.log(result[0]);

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