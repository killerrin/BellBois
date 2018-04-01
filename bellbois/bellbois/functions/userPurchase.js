const {authenticateUserContext} = require("../services/authenticationService");
const {GenerateTransactionID, GetUserTransaction, DeleteUserTransaction, CreateUserTransaction} = require("../services/userTransactionService")

/**
 * Begins the process of generating a User Purchase
 * @returns {object}
 */
module.exports = async function userPurchase(context) {
  const user = await authenticateUserContext(context);
  if (!user) {
    throw new Error("Not authenticated");
  }

  // Check if the User has already purchased the item
  if(user.purchaseDate !== null) {
    throw new Error("This user has already purchased the premium upgrade")
  }

  // Generate the Transaction ID
  var transactionID = GenerateTransactionID();

  // Query ChangeJar to create the Transaction URLs

  // Add the pending transaction to the Database
  CreateUserTransaction(transactionID, user.ID);

  return {
    transactionID: transactionID,
    transactionURLS: {}
  }
};