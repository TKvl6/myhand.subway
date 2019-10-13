module.exports.function = function menuFind (menu) {
  var util = require('tool/util.js');
  return util.searchSandwichByName(menu);
}