const query = require("../services/SQLService");

/**
 * A basic Hello World function
 * @param {string} boxID user id.
 * @returns {object}
 */
module.exports =  async (boxID, context) => {
  const result = await query("SELECT * from `Boxes` WHERE `Boxes`.`id` = ?", [boxID]);

  if (result.length === 1) {
    return result[0];
  }

  throw new Error("Box not found");
};