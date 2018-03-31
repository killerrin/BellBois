const query = require("../services/SQLService");

/**
 * A basic Hello World function
 * @param {string} boxID user id.
 * @returns {object}
 */
module.exports =  async (boxID, context) => {
  const result = await query("DELETE from `Boxes` WHERE `Boxes`.`id` = ?", [boxID]);
};