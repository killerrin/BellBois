const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");
const {HasUserPurchased} = require("../services/userTransactionService")

/**
 * Updates a Box
 * @param {string} ID box id.
 * @param {string} name
 * @param {string} picture
 * @param {string} description
 * @param {number} latitude of the box
 * @param {number} longitude of the box
 * @returns {object}
 */
module.exports = async (ID, name = 'box', picture = null, description = null, latitude = null, longitude = null, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }
  if (picture != null && !HasUserPurchased(user)) {
    throw new Error("This user has not purchased the ability to do this");
  }

  const result = await query("UPDATE `Boxes` SET name = ?, picture = ?, description = ?, latitude = ?, longitude = ? WHERE `Boxes`.`ID` = ?", [name, picture, description, latitude, longitude, ID]);
  return {ID, name, picture, description};
};