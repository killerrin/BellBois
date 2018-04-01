const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Updates a Box
 * @param {string} ID box id.
 * @param {string} name
 * @param {string} picture
 * @param {string} description
 * @param {number} latitude of the box
 * @param {number} longitude of the box
 * @param {number} location User Friendly Location String
 * @returns {object}
 */
module.exports = async (id, name = 'box', picture = null, description = null, latitude = null, longitude = null, location = null, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("UPDATE `Boxes` SET name = ?, picture = ?, description = ?, latitude = ?, longitude = ?, location = ? WHERE `Boxes`.`ID` = ?", [name, picture, description, latitude, longitude, location, id]);
  return {id, name, picture, description, latitude, longitude, location, id};
};