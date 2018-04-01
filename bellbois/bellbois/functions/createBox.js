const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");
const {HasUserPurchased} = require("../services/userTransactionService")
const uuidv4 = require("uuid/v4");

/**
 * A basic Hello World function
 * @param {string} name box's name
 * @param {string} picture picture
 * @param {string} description box's description
 * @param {number} latitude of the box
 * @param {number} longitude of the box
 * @param {string} location User friendly location string
 * @returns {object}
 */
module.exports = async (name = 'box', picture = null, description = null, latitude = null, longitude = null, location = null, context) => {
  var user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }
  if (picture != null && !HasUserPurchased(user)) {
    throw new Error("This user has not purchased the ability to do this");
  }

  const ID = uuidv4();

  const result = await query("INSERT INTO `Boxes` (ID, name, userID, picture, description, latitude, longitude, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [ID, name, user.ID, picture, description, latitude, longitude, location]);

  return {ID, name, userID: user.ID, picture, description, latitude, longitude};
};