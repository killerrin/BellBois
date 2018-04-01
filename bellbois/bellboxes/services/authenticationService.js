const query = require("./SQLService");
const {hashPassword, hashAPIKey} = require ("./hashingService");

function authenticateUserContext(context) {
  const headers = context.http.headers;
  if (headers.hasOwnProperty("apikey")) {
    return authenticateUser(headers.apikey);
  }
}

async function authenticateUser(APIKey) {
  var result = await query("SELECT * FROM Users WHERE APIKey = ?", [APIKey]);

  if (result.length === 0) return false;
  return SafeUser(result[0]);
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

function SafeUser(dataColumns) {
  return {
    ID: dataColumns["ID"],
    username: dataColumns["username"],
    email: dataColumns["email"],
    APIKey: dataColumns["APIKey"],
    purchaseDate: dataColumns["purchaseDate"],
    dateCreated: dataColumns["dateCreated"]
  };
}

module.exports = {authenticateUser, authenticateUserContext, loginUser};