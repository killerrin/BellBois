const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Get a single User
 * @returns {object}
 */
module.exports = async function getUser(context) {
  const user = await authenticateUserContext(context);

  if (!user) {
    throw new Error("Not authenticated");
  }

  return user;
};