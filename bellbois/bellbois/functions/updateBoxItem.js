const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Updates a Box Item
 * @param {string} ID
 * @param {string} boxID
 * @param {string} name
 * @returns {object}
 */
module.exports =  async (ID, boxID, name, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("UPDATE `BoxItems` SET boxID = ?, userID = ?, name = ? WHERE `BoxItems`.`ID` = ?", [boxID, user.ID, name, ID]);
  return {ID, boxID, userID: user.ID, name};
};