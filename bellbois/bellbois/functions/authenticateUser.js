const {loginUser} = require("../services/authenticationService");

/**
 * Authenticate User
 * @param {string} email
 * @param {string} password
 * @returns {object.http}
 */
module.exports = async function authenticateUser(email, password, context) {
  var user = await loginUser(email, password);
  if (user == null) {
    return {
      statusCode: 401,
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Set-Cookie": `APIKey=${user.APIKey}; SameSite=Lax`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
};