const query = require("../services/SQLService");

const uuidv4 = require("uuid/v4");

/**
 * A basic Hello World function
 * @returns {array}
 */
module.exports =  async (context) => {
  const id = uuidv4();

  const userID = "d554d6cf-3514-11e8-bdfc-e03f49e8168b";

  const result = await query("SELECT * from `Boxes` WHERE `Boxes`.`userID` = ?", [userID]);

  return result.map(item => Object.assign({}, item));
};