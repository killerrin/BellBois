const query = require("../services/SQLService");

/**
 * A basic Hello World function
 * @param {string} boxID for Box.
 * @returns {object}
 */
module.exports =  async (boxID, context) => {
  const result = await query("SELECT * from `BoxItems` WHERE `BoxItems`.`boxID` = ?", [boxID]);

  if (result.length > 0) {
    return result;
  }

  throw new Error("Box Item not found");
};