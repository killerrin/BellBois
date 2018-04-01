const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Updates a Box Item
 * @param {string} id
 * @param {string} boxID
 * @param {string} userID
 * @param {string} name
 * @returns {object}
 */
module.exports =  async (ID, boxID, userID, name, context) => {
  const user = authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("UPDATE `BoxItems` SET boxID = ?, userID = ?, name = ? WHERE `BoxItems`.`id` = ?", [boxID, userID, name, ID]);
  return {id, boxID, userID, name};
};