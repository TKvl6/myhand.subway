var db = require('tool/getDB.js');
var textLib = require('textLib');
var console = require('console');
var http = require('http');

module.exports.getSandwichList = function(){
  let sandwich = db.getSandwich();
  return sandwich;
}
module.exports.searchSandwichByCal = function(cal, standard){ 
  let sandwich = db.getSandwich();
  let result = [];
  if(standard == 'high'){
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
  let sandwich = db.getSandwich();
  let result = [];
  for(i = 0; i < sandwich.length; i++){
    if(textLib.fuzzyMatch(sandwich[i].tag,tag)){
      result.push(sandwich[i]);
    }
  }
  return result;
}
module.exports.divideMaterial = function(m,tag){
  var aJsonArray = new Array();
  var li = m.split(",");
  var index = 1;
  li.forEach(function(el){
    var aJson = new Object();
    var image = new Object();
    aJson.no = index++;
    var len = el.split(" ").length;
    var mtArr = "";
    if(el.split(" ")[0] == "추천") for(j = 1; j < len; j++) mtArr = mtArr + el.split(" ")[j];
    else if(len > 1){
      mtArr = el.split(" ",len-1);
      mtArr = mtArr.join(" ");
    } 
    else if(len == 1) mtArr = el
    for(i=0;i<tag.length;i++){
      if(textLib.fuzzyMatch(tag[i].material,mtArr, 1)){
        aJson.index = tag[i].no; 
        break;
      }
    }
    var url = "https://raw.githubusercontent.com/TKvl6/myhand.subway/master/materialCard/"+ aJson.index + ".png";
    image.url = url;
    aJson.mt = el;
    aJson.img = image;
    aJsonArray.push(aJson);
  })
  return aJsonArray;
}
module.exports.divideTag = function(tag){
  var li = tag.split(",");
  var str = "";
  for(i =0; i< li.length; i++){
    str += "#" + li[i] + " ";
  }
  return str;
}
module.exports.tagsentence = function(material,tag) {
  var res = [];
  for(i = 0; i < material.length; i++){
    var len = material[i].mt.split(" ").length;
    var mtArr = "";
    if(material[i].mt.split(" ")[0] == "추천") for(j = 1; j < len; j++) mtArr = mtArr + material[i].mt.split(" ")[j];
    else if(len > 1){
      mtArr = material[i].mt.split(" ",len-1);
      mtArr = mtArr.join(" ");
    } 
    else if(len == 1) mtArr = material[i].mt
    next: for(j = 0; j < tag.length; j++){
      if(textLib.fuzzyMatch(mtArr,tag[j].material)){
        for(k = 0; k < res.length; k++){
          if(textLib.fuzzyMatch(res[k].tag,mtArr)){
            res[k].idx1 = parseInt(res[k].idx1) + parseInt(tag[j].idx1);
            res[k].idx2 = parseInt(res[k].idx2) + parseInt(tag[j].idx2);
            res[k].idx3 = parseInt(res[k].idx3) + parseInt(tag[j].idx3);
            res[k].idx4 = parseInt(res[k].idx4) + parseInt(tag[j].idx4);
            res[k].idx5 = parseInt(res[k].idx5) + parseInt(tag[j].idx5);
            res[k].idx6 = parseInt(res[k].idx6) + parseInt(tag[j].idx6);
            continue next;
          }
        }
        res.push({ tag : mtArr, idx1 : tag[j].idx1, idx2 : tag[j].idx2
                , idx3 : tag[j].idx3, idx4 : tag[j].idx4
                , idx5 : tag[j].idx5, idx6 : tag[j].idx6});
        break;
      }
    }
  }
  var str =  ["환상적인","누구나 좋아할","절묘하게","오묘하게"];
  var roll = Math.ceil(Math.random() * str.length-1);
  var maxScore = 0;
  var maxTag = "";
  var suffix = " 맛!";
  var taste = [0,0,0,0,0,0];
  var util = require('tool/util.js')
  for(i = 0; i < res.length; i++){
    taste[0] += res[i].idx1
    taste[1] += res[i].idx2
    taste[2] += res[i].idx3
    taste[3] += res[i].idx4
    taste[4] += res[i].idx5
    taste[5] += res[i].idx6
  }
  for(i=0; i < taste.length; i++){
    if(taste[i] > maxScore){
      maxScore = taste[i];
      maxTag = util.tasteTag(i+1);
    }
  }
  var result = str[roll] + " " + maxTag + suffix;
  return result;
}
module.exports.tasteTag = function(index){
  var maxTag;
  if(index == 1) maxTag = "매콤한";
  else if(index == 2) maxTag = "달콤한";
  else if(index == 3) maxTag = "짭짤한";
  else if(index == 4) maxTag = "새콤한"
  else if(index == 5) maxTag = "육즙 가득한"
  else if(index == 6) maxTag = "고소한"

  return maxTag;
}

module.exports.getNameByNo = function(no,topping){
  for(i=0;i<topping.length;i++){
    if(no == topping[i].no){
      return topping[i].material;
    }
  }
}