const {authenticateUser} = require("../services/authenticationService");

/**
 * Authentication
 * @param {string} id
 * @param {string} apiKey
 * @returns {boolean}
 */
module.exports = async function auth(id, apiKey, context) {
  return authenticateUser(id, apiKey);
}