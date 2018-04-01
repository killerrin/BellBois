const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Deletes a Box Item
 * @param {string} ID item id
 * @returns {any}
 */
module.exports =  async (ID, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("DELETE from `BoxItems` WHERE `BoxItems`.`ID` = ?", [ID]);

  return {};
};