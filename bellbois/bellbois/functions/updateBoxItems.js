const query = require("../services/SQLService");

/**
 * A basic Hello World function
 * @param {string} id
 * @param {string} boxID
 * @param {string} userID
 * @param {string} name
 * @returns {object}
 */
module.exports =  async (ID, boxID, userID, name, context) => {
  const result = await query("UPDATE `BoxItems` SET boxID = ?, userID = ?, name = ? WHERE `BoxItems`.`id` = ?", [boxID, userID, name, ID]);
  return {id, boxID, userID, name};
};