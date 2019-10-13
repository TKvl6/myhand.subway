module.exports.function = function exceptAllergy (aName,list) {
  var util = require('tool/util.js');
  var console = require('console');
  var textLib = require('textLib');
  var allergy = util.searchAllergyByName(aName);
  if(list == null) list = util.getSandwichList(); // 샌드위치 list

  var result = [];
  var aList = allergy.split(","); // allergy list
  next:
  for(i=0; i < list.length; i++){
    for(j=0; j < aList.length; j++){
      if(textLib.fuzzyMatch(aList[j],list[i].material)){
        continue next;
      }
    }
    result.push(list[i]);
  }
  return result;
}
