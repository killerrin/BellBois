const crypto = require('crypto');

function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  var passwordHash = hash.digest('hex');
  return passwordHash;
}

function hashAPIKey(username, passwordHash, dateCreated) {
  const hash = crypto.createHash('sha256');
  hash.update(username + passwordHash + dateCreated + Date.now());
  var authHash = hash.digest('hex');
  return authHash;
}

module.exports = {hashPassword, hashAPIKey};