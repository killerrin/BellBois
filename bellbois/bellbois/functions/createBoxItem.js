const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");
const uuidv4 = require("uuid/v4");

/**
 * A basic Hello World function
 * @param {string} boxID box id.
 * @param {string} name box's name
 * @returns {object}
 */
module.exports =  async (boxID, name, context) => {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const ID = uuidv4();

  const result = await query("INSERT INTO `BoxItems` (ID, userID, boxID, name) VALUES (?, ?, ?, ?)", [ID, user.ID, boxID, name]);

  return {ID, userID: user.ID, boxID, name};
};