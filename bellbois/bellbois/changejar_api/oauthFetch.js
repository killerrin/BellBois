const fetch = require('node-fetch');
const config = require('./env');
const httpHelpers = require('./httpHelpers');

let oauthToken = null;

function oauthFetch(...args) {
  if (oauthToken) {
    return fetchWithOAuthToken(oauthToken, ...args);
  } else {
    return fetchOAuthToken()
      .then(oauthToken => {
        return fetchWithOAuthToken(oauthToken, ...args);
      });
  }
}

function fetchWithOAuthToken(oauthToken, ...args) {
  let newArgs = args
  newArgs[1].headers.Authorization = 'Bearer ' + oauthToken.access_token;

  return fetch(...newArgs)
    .then(httpHelpers.checkHttpStatus)
}

function fetchOAuthToken() {
  console.log("fetchOAuthToken");
  console.log(config.apiUser);
  console.log(config.apiPassword);
  console.log(config.credentials);
  return fetch(config.baseUrl + '/oauth/token', {
    method: 'post',
    credentials: 'omit',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': "Basic " + config.credentials
    },
    body: "grant_type=password&scope=read%20write&username=" + encodeURIComponent(config.apiUser) + "&password=" + encodeURIComponent(config.apiPassword)
  })
    .then(httpHelpers.checkOAuthHttpStatus)
    .then(httpHelpers.parseJSON)
    .then(oauthToken => {
      console.log(oauthToken);
      oauthToken = oauthToken;
      return oauthToken;
    });
}

module.exports = oauthFetch;