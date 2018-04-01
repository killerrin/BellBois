const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");
const uuidv4 = require("uuid/v4");

/**
 * A basic Hello World function
 * @param {string} name box's name
 * @param {string} picture picture
 * @param {string} description box's description
 * @param {number} latitude of the box
 * @param {number} longitude of the box
 * @returns {object}
 */
module.exports = async (name = 'box', picture = null, description = null, latitude = null, longitude = null, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const ID = uuidv4();

  const result = await query("INSERT INTO `Boxes` (ID, name, userID, picture, description, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?)", [ID, name, user.ID, picture, description, latitude, longitude]);

  return {ID, name, userID: user.ID, picture, description, latitude, longitude};
};