const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Gets a Box Items
 * @param {string} ID for Box.
 * @returns {array}
 */
module.exports =  async (ID, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("SELECT * from `BoxItems` WHERE `BoxItems`.`boxID` = ?", [ID]);

  return result;
};