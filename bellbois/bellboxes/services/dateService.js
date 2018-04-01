const dateFormat = require('dateformat');

function GetSQLDate() {
  var today = new Date();
  var currentDate = dateFormat(today, "yyyy-MM-dd HH:MM:ss");
  // console.log(currentDate);
  return currentDate;
}

module.exports = GetSQLDate;