const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");
const uuidv4 = require("uuid/v4");

/**
 * A basic Hello World function
 * @param {string} userID user id.
 * @param {string} boxID user id.
 * @param {string} name box's name
 * @returns {object}
 */
module.exports =  async (userID, boxID, name, context) => {
  const user = authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const id = uuidv4();

  const result = await query("INSERT INTO `BoxItems` (ID, userID, boxID, name) VALUES (?, ?, ?, ?)", [id, userID, boxID, name]);

  return {id, userID, boxID, name};
};