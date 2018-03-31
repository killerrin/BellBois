const {authenticateUser} = require("../services/authenticationService");

/**
 * Get User
 * @param {string} id
 * @param {string} apiKey
 * @returns {object}
 */
module.exports = async function getUser(id, apiKey, context) {
  if (authenticateUser(id, apiKey)) {
    return { };
  }
  return null;
}