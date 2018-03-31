const {authenticateUser} = require("../services/authenticationService");

/**
 * Get User
 * @param {string} apiKey
 * @returns {object}
 */
module.exports = async function getUser(apiKey, context) {
  if (authenticateUser(apiKey)) {
    return { };
  }
  return null;
}