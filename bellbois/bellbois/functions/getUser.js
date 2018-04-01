const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Geta a single User
 * @param {string} id
 * @param {string} apiKey
 * @returns {object}
 */
module.exports = async function getUser(id, apiKey, context) {
  const user = authenticateUserContext(context);
  if (!user) {
    throw new Error("Not authenticated");
  }

  return user;
};