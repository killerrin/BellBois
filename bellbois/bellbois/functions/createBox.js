const query = require("../services/SQLService");

const uuidv4 = require("uuid/v4");

/**
 * A basic Hello World function
 * @param {string} userID user id.
 * @param {string} name box's name
 * @param {string} picture picture
 * @param {string} description box's description
 * @returns {object}
 */
module.exports =  async (userID, name = 'box', picture = null, description = null, context) => {
  const id = uuidv4();

  const result = await query("INSERT INTO `Boxes` (ID, name, userID, picture, description) VALUES (?, ?, ?, ?, ?)", [id, name, userID, picture, description]);

  return {id, name, userID, picture, description};
};