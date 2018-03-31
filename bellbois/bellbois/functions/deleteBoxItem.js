const query = require("../services/SQLService");

/**
 * A basic Hello World function
 * @param {string} ID
 * @returns {object}
 */
module.exports =  async (ID, context) => {
  const result = await query("DELETE from `BoxItems` WHERE `BoxItems`.`id` = ?", [ID]);
};c