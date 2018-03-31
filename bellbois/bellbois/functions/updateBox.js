const query = require("../services/SQLService");

/**
 * A basic Hello World function
 * @param {string} id box id.
 * @param {string} name
 * @param {string} picture
 * @param {string} description
 * @param {double} latitude of the box
 * @param {double} longitude of the box
 * @returns {object}
 */
module.exports =  async (id, name = 'box', picture = null, description = null, latitude = null, longitude = null, context) => {
  const result = await query("UPDATE `Boxes` SET name = ?, picture = ?, description = ?, latitude = ?, longitude = ? WHERE `Boxes`.`id` = ?", [name, picture, description, latitude, longitude, id]);
  return {id, name, picture, description};
};