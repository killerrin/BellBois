const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");

/**
 * Updates a Box
 * @param {string} id box id.
 * @param {string} name
 * @param {string} picture
 * @param {string} description
 * @param {double} latitude of the box
 * @param {double} longitude of the box
 * @returns {object}
 */
module.exports =  async (id, name = 'box', picture = null, description = null, latitude = null, longitude = null, context) => {
  const user = authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("UPDATE `Boxes` SET name = ?, picture = ?, description = ?, latitude = ?, longitude = ? WHERE `Boxes`.`id` = ?", [name, picture, description, latitude, longitude, id]);
  return {id, name, picture, description};
};