const {authenticateUserContext} = require("../services/authenticationService");
const {GenerateTransactionID, CreateUserTransaction} = require("../services/userTransactionService")
const payments = require('../changejar_api/payments');

/**
 * Begins the process of generating a User Purchase
 * @returns {object}
 */
module.exports = async function userPurchase(context) {
  const user = await authenticateUserContext(context);
  // if (!user) {
  //   throw new Error("Not authenticated");
  // }

  // Check if the User has already purchased the item
  if (user != undefined && user.purchaseDate != undefined) {
    if (user.purchaseDate !== null) {
      throw new Error("This user has already purchased the premium upgrade")
    }
  }

  // Generate the Transaction ID
  var transactionID = GenerateTransactionID();

  // Query ChangeJar to create the Transaction URLs
  const transactionRequest = {
    amount: 0.05,
    reference: transactionID,
    description: "Bellbois Premium",
    expiresIn: 600 // 10 minutes
  };

  var response = await payments.createTransaction(transactionRequest);
  console.log(response);

  // Add the pending transaction to the Database
  if (user != undefined && user.purchaseDate != undefined) {
    CreateUserTransaction(transactionID, user.id);
  }

  return {
    transactionID: transactionID,
    transactionURLS: {}
  }
};