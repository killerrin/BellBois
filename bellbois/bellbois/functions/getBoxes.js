const query = require("../services/SQLService");
const {authenticateUserContext} = require("../services/authenticationService");


/**
 * A basic Hello World function
 * @returns {array}
 */
module.exports =  async (context) => {
  const user = authenticateUserContext(context);
  if (!user) {
    throw new Error("Not Authenticated")
  }

  const result = await query("SELECT * from `Boxes` WHERE `Boxes`.`userID` = ?", [user.id]);

  return result.map(item => Object.assign({}, item));
};