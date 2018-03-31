const crypto = require('crypto');
const hash = crypto.createHash('sha256');

function hashPassword(password) {
  hash.update(password);
  var passwordHash = hash.digest('hex');
  return passwordHash;
}

function hashAPIKey(id, username) {
  hash.update(id + username);
  var authHash = hash.digest('hex');
  return authHash;
}

module.exports = {hashPassword, hashAPIKey};