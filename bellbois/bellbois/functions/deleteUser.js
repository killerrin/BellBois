const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Deletes a User
 * @param {string} ID User id.
 * @returns {any}
 */
module.exports =  async (ID, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("DELETE from `Users` WHERE `Users`.`ID` = ?", [ID]);
};