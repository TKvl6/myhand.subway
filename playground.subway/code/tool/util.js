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
}
module.exports.divideMaterial = function(m){
  var aJsonArray = new Array();
  var li = m.split(",");
  li.forEach(function(el){
    var aJson = new Object();
    aJson.mt = el;
    aJsonArray.push(aJson);
  })
  return aJsonArray;
}
module.exports.divideTag = function(tag){
  var aJsonArray = new Array();
  var li = tag.split(",");
  var str = "";
  for(i =0; i< li.length; i++){
    str += "#" + li[i] + " ";
  }
  return str;
}
module.exports.tagsentence = function(material) {
  var http = require('http');
  var textLib = require('textLib');
  var console = require('console');
  var tag = http.getUrl('https://api.sheety.co/e543fd14-622d-46cf-a993-7654aa4a22be',{format : "json"});
  var res = [];
  var regex = "0-9";
  for(i = 0; i < material.length; i++){
    var len = material[i].mt.split(" ").length;
    var mtArr;
    if(material[i].mt.split(" ")[0] == "추천"){
      for(i = 1; i < len; i++){
        mtArr = mtArr + material[i].mt.split(" ")[i];
      }
    }else if(len > 1) mtArr = material[i].mt.split(" ",len-1);
    else if(len == 1) mtArr = material[i].mt
    console.log(mtArr);
    console.log(mtArr[0]);
    if(len > 1 && mtArr[0] != "추천") mtArr = mtArr.join("");
    console.log(mtArr)
    next: for(j = 0; j < tag.length; j++){
      // console.log(mtArr + " / " + tag[j].material)
      if(textLib.fuzzyMatch(mtArr,tag[j].material)){
        for(k = 0; k < res.length; k++){
          if(textLib.fuzzyMatch(res[k].tag,mtArr)){
            for(l = 1; l <= 6; l++){
              var index = "idx" + l;
              console.log(index);
              if(tag[j].index != null){
                var tmp = parseInt(res[k].index) + parseInt(tag[j].index);
                res[k].index = tmp;
              }
            }
            continue next;
          }
        }
        res.push({ tag : mtArr, idx1 : tag[j].idx1
                , idx2 : tag[j].idx2, idx3 : tag[j].idx3
                , idx4 : tag[j].idx4, idx5 : tag[j].idx5
                , idx6 : tag[j].idx6});
      //  res.push({ tag : mtArr[0], spicy : tag[j].idx1
      //           , sweet : tag[j].idx2, salty : tag[j].idx3
      //           , sour : tag[j].idx4, juicy : tag[j].idx5
      //           , tasty : tag[j].idx6});
        console.log(res);
      }
    }
  }
  console.log(res);
  var str =  ["환상적인","환상적인","환상적인","환상적인"];
  var roll = Math.ceil(Math.random * str.length);
  var maxScore = 0;
  var maxTag;
  var suffix = "한 맛";
  for(i = 0; i < res.length; i++){
    for(j=1; j <= 6; j++)
    var index = "idx" + j;
    if(res[i].index > maxScore){
      maxScore = res[i].index;
      if(j == 1) maxTag = "매콤";
      else if(j == 2) maxTag = "달콤";
      else if(j == 3) maxTag = "짭짤";
      else if(j == 4) maxTag = "새콤"
      else if(j == 5) maxTag = "육즙"
      else if(j == 6) maxTag = "고소"
    }
  }
  var result = str[roll] + maxTag + suffix;
  return result;
}
