const query = require("../services/SQLService");

const uuidv4 = require("uuid/v4");

/**
 * A basic Hello World function
 * @param {string} userID user id.
 * @param {string} name box's name
 * @param {string} picture picture
 * @param {string} description box's description
 * @param {double} latitude of the box
 * @param {double} longitude of the box
 * @returns {object}
 */
module.exports =  async (userID, name = 'box', picture = null, description = null, latitude = null, longitude = null, context) => {
  const id = uuidv4();

  const result = await query("INSERT INTO `Boxes` (ID, name, userID, picture, description, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?)", [id, name, userID, picture, description, latitude, longitude]);

  return {id, name, userID, picture, description, latitude, longitude};
};