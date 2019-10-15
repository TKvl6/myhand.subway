var db = require('tool/getDB.js');
var textLib = require('textLib');
var console = require('console');

module.exports.searchAllergyByName = function(aName){
  var allergy = db.getAllergy();
  for(i = 0; i < allergy.length; i++){
    if(textLib.fuzzyMatch(aName,allergy[i].kname)){
      return allergy[i].material; // 알러지 재료가 들어간 제품들을 return
    }
  }
  return null;
}
module.exports.getSandwichList = function(){
  let sandwich = db.getSandwich();
  return sandwich;
}
module.exports.searchSandwichByName = function(kName){
  let sandwich = db.getSandwich();
  let result = [];
  for(i = 0; i < sandwich.length; i++){
    if(textLib.fuzzyMatch(sandwich[i].kname, kName)){
      result.push(sandwich[i]);
    }
  }
  return result;
}
module.exports.searchSandwichByMaterial = function(mName){
  let sandwich = db.getSandwich();
  let result = [];
  for(i = 0; i < sandwich.length; i++){
    if(textLib.fuzzyMatch(sandwich[i].material,mName)){
      // 제품의 재료 중에 검색한 재료가 존재하는 list를 return
      result.push(sandwich[i]);
    }
  }
  return result;
}
module.exports.searchSandwichByCal = function(cal, standard){ 
  // standard : cal보다 높은지 낮은지
  let sandwich = db.getSandwich();
  let result = [];
  if(standard == 'high'){
    // 제품의 재료 중에 검색한 재료가 존재하는 list를 return
    for(i = 0; i < sandwich.length; i++){
      if(sandwich[i].cal > cal){
        result.push(sandwich[i]);
      }
    }
  }else{
    for(i = 0; i < sandwich.length; i++){
      if(sandwich[i].cal <= cal){
        result.push(sandwich[i]);
      }
    }
  }
  return result;
}
module.exports.searchSandwichByTag = function(tag){ 
  // standard : cal보다 높은지 낮은지
  let sandwich = db.getSandwich();
  let result = [];
  for(i = 0; i < sandwich.length; i++){
    if(textLib.fuzzyMatch(sandwich[i].tag,tag)){
      result.push(sandwich[i]);
    }
  }
  return result;
}
module.exports.divideMaterial = function(material){
  var aJsonArray = new Array();
  var li = material.split(",");
  li.forEach(function(el){
    var aJson = new Object();
    aJson.mt = el;
    aJsonArray.push(aJson);
  })
  return aJsonArray;
}


