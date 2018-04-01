const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Get User
 * @param {string} id
 * @param {string} apiKey
 * @returns {object}
 */
module.exports = async function getUser(id, apiKey, context) {
  const user = await authenticateUserContext(context);

  if (!user) {
    throw new Error("Not authenticated");
  }

  return user;
};