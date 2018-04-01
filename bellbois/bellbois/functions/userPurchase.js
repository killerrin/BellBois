const {authenticateUserContext} = require("../services/authenticationService");
const {GenerateTransactionID, GetUserTransaction, DeleteUserTransaction, CreateUserTransaction} = require("../services/userTransactionService")

/**
 * Geta a single User
 * @param {string} id
 * @param {string} apiKey
 * @returns {object}
 */
module.exports = async function userPurchase(context) {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not authenticated");
  }

  var transactionID = GenerateTransactionID();

  // Query ChangeJar to create the Transaction URLs

  // Add the pending transaction to the Database
  CreateUserTransaction(transactionID, user.ID);

  return {
    transactionID: transactionID,
    transactionURLS: {}
  }
};