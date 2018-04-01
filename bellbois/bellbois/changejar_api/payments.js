const oauthFetch = require('./oauthFetch');
const config = require('./env');
const httpHelpers = require('./httpHelpers');

module.exports.createTransaction = (transactionRequest) => {
console.log(transactionRequest)
  return oauthFetch(config.baseUrl + '/payments/v1/transactions', {
    method: 'post',
    credentials: 'omit',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionRequest)
  })
    .then(httpHelpers.parseJSON)
    .then(result => {
      console.log('payment result:' +  result);
      return result;
    })
}

module.exports.cancelTransaction = (transactionId) => {

  return oauthFetch(config.baseUrl + '/payments/v1/transactions?reference=' + transactionId, {
    method: 'delete',
    credentials: 'omit',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
