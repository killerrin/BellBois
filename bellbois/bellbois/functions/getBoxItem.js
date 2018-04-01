const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * A basic Hello World function
 * @param {string} ID for BoxItem.
 * @returns {object}
 */
module.exports =  async (ID, context) => {
  const user = authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("SELECT * from `BoxItems` WHERE `BoxItems`.`id` = ?", [ID]);

  if (result.length === 1) {
    return result[0];
  }

  throw new Error("Box Item not found");
};