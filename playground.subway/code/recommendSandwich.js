module.exports.function = function recommendSandwich (mName) {
  var util = require('tool/util.js');
  var sandwich = util.searchSandwichByMaterial(mName);
  return sandwich;
}
