const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Get a Single Box
 * @param {string} boxID user id.
 * @returns {object}
 */
module.exports =  async (boxID, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("SELECT * from `Boxes` WHERE `Boxes`.`id` = ?", [boxID]);

  if (result.length === 1) {
    return result[0];
  }

  throw new Error("Box not found");
};