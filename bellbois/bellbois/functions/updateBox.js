const query = require("../services/SQLService");

/**
 * A basic Hello World function
 * @param {string} id boxItemm id.
 * @param {string} boxID
 * @param {string} name
 * @param {string} userID
 * @returns {object}
 */
module.exports =  async (id, boxID, name, userID, context) => {
  const result = await query("UPDATE `BoxItems` SET boxID = ?, name = ?, userID = ? WHERE `BoxItems`.`id` = ?", [boxID, name, userID, id]);
  return {id, name, boxID, userID};
};