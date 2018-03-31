const {loginUser} = require("../services/authenticationService");

/**
 * Authenticate User
 * @param {string} username
 * @param {string} password
 * @returns {object.http}
 */
module.exports = async function authenticateUser(username, password, context) {
  var user = await loginUser(username, password);
  if (user == null) {
    return {
      statusCode: 401,
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Set-Cookie": `APIKey=${user.APIKey}; HttpOnly; Secure; SameSite=Strict`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
};