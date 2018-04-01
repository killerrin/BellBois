const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Get a Single Box
 * @param {string} ID box id.
 * @returns {object}
 */
module.exports =  async (ID, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("SELECT * from `Boxes` WHERE `Boxes`.`ID` = ?", [ID]);

  if (result.length === 1) {
    console.log(result[0]);
    const box = result[0];
    if (box.hasOwnProperty("picture") && box.picture instanceof Buffer) {
      box.picture = box.picture.toString("utf8");
    }
    console.log(box);
    return box;
  }

  throw new Error("Box not found");
};