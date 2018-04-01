const query = require("./SQLService");
const GetSQLDate = require("./dateService");
const uuidv4 = require("uuid/v4");

function GenerateTransactionID() {
  const id = uuidv4();
  return id;
}

function HasUserPurchased(user) {
  // Check if the User has already purchased the item
  if(user.purchaseDate !== null) {
    return true;
  }
  return false;
}

async function GetUserTransaction(id) {
  const result = await query("SELECT * from `UserTransactions` WHERE `UserTransactions`.`id` = ?", [id]);

  if (result.length === 1) {
    return result[0];
  }
  return null;
}

async function DeleteUserTransaction(id) {
  const result = await query("DELETE from `UserTransactions` WHERE `UserTransactions`.`id` = ?", [id]);
}

async function CreateUserTransaction(id, userID) {
  var result = await query("INSERT INTO UserTransactions (ID, userID, transactionDate) VALUES (?, ?, ?)", [
    id,
    userID,
    GetSQLDate()
  ]);
}

module.exports = {GenerateTransactionID, HasUserPurchased, GetUserTransaction, DeleteUserTransaction, CreateUserTransaction};