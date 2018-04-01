const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * A basic Hello World function
 * @param {string} boxID for Box.
 * @returns {object}
 */
module.exports =  async (boxID, context) => {
  const user = authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("SELECT * from `BoxItems` WHERE `BoxItems`.`boxID` = ?", [boxID]);

  if (result.length > 0) {
    return result;
  }

  throw new Error("Box Item not found");
};