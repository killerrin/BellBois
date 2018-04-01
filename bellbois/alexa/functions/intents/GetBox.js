const query = require("../../services/SQLService");

/**
 * Basic "Hello World" intent, can receive a `name` parameter
 * @param {string} name Your name
 * @returns {string}
 */
module.exports = async (name = "box", context) => {

  console.log("box", name);
  const result = await query("SELECT * from `Boxes` WHERE `Boxes`.`name` = ? && `Boxes`.`userID` = ?", [name, "96371ac1-5c00-4578-ba9e-d104ca05f426"]);

  if (result.length < 1) {
    return "No box found by that name";
  }

  return `The box by the name of ${result[0].name} has the description ${result[0].description} and is in ${result[0].location}`;

};
