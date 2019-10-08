var db = require('tool/getDB.js');

module.exports.searchAllergyByName = function(aName){
  var allergy = db.getAllergy();
  for(i = 0; allergy.length; i++){
    if(aName == allergy[i].kname){
      return allergy[i].material; // 알러지 재료가 들어간 제품들을 return
    }
  }
  return null;
}
module.exports.searchSandwichByName = function(sName){
  let sandwich = db.getSandwich();
  for(i = 0; sandwich.length; i++){
    if(sName == sandwich[i].kname){ // 검색한 샌드위치 return
      return sandwich[i];
    }
  }
  return null;
}
module.exports.searchSandwichByMaterial = function(mName){
  let sandwich = db.getSandwich();
  let result = [];
  for(i = 0; sandwich.length; i++){
    if(sandwich[i].material.indexOf(mName) != -1){
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
    for(i = 0; sandwich.length; i++){
      if(sandwich[i].cal > cal){
        result.push(sandwich[i]);
      }
    }
  }else{
    for(i = 0; sandwich.length; i++){
      if(sandwich[i].cal <= cal){
        result.push(sandwich[i]);
      }
    }
  }
}
