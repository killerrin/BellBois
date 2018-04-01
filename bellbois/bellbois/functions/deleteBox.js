const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Deletes a Box
 * @param {string} ID box id.
 * @returns {any}
 */
module.exports =  async (ID, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("DELETE from `Boxes` WHERE `Boxes`.`ID` = ?", [ID]);
};