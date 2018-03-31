const {loginUser} = require("../services/authenticationService");

/**
 * Authenticate User
 * @param {string} username
 * @param {string} password
 * @returns {any}
 */
module.exports = async function authenticateUser(username, password, context) {
  var user = await loginUser(username, password);
  if (user == null) {
    return null;
  }
  return user;
}