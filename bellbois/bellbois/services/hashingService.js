const crypto = require('crypto');

function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  var passwordHash = hash.digest('hex');
  return passwordHash;
}

function hashAPIKey(username, dateCreated) {
  const hash = crypto.createHash('sha256');
  hash.update(username + dateCreated);
  var authHash = hash.digest('hex');
  return authHash;
}

module.exports = {hashPassword, hashAPIKey};