const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Deletes a Box Item
 * @param {string} ID
 * @returns {object}
 */
module.exports =  async (ID, context) => {
  const user = authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("DELETE from `BoxItems` WHERE `BoxItems`.`id` = ?", [ID]);
};c