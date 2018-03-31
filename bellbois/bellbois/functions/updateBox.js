const query = require("../services/SQLService");

/**
 * A basic Hello World function
 * @param {string} id box id.
 * @param {string} name
 * @param {string} picture
 * @param {string} description
 * @returns {object}
 */
module.exports =  async (id, name = 'box', picture = null, description = null, context) => {
  const result = await query("UPDATE `Boxes` SET name = ?, picture = ?, description = ? WHERE `Boxes`.`id` = ?", [name, picture, description, id]);
  return {id, name, picture, description};
};