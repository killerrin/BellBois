const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Deletes a Box
 * @param {string} boxID user id.
 * @returns {object}
 */
module.exports =  async (boxID, context) => {
  const user = authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("DELETE from `Boxes` WHERE `Boxes`.`id` = ?", [boxID]);
};