const query = require("../services/SQLService");

/**
 * A basic Hello World function
 * @param {string} ID for BoxItem.
 * @returns {object}
 */
module.exports =  async (ID, context) => {
  const result = await query("SELECT * from `BoxItems` WHERE `BoxItems`.`id` = ?", [ID]);

  if (result.length === 1) {
    return result[0];
  }

  throw new Error("Box Item not found");
};