const query = require("./SQLService");
const {hashPassword, hashAPIKey} = require ("./hashingService");

function authenticateUserContext(context) {
  const headers = context.http.headers;
  if (headers.hasOwnProperty("APIKey")) {
    return authenticateUser(headers.APIKey);
  }
}

async function authenticateUser(APIKey) {
  var result = await query("SELECT * FROM Users WHERE APIKey = ?", [APIKey]);

  if (result.length === 0) return false;
  return result[0];
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

module.exports = {authenticateUser, authenticateUserContext, loginUser};