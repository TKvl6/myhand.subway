module.exports.function = function order(menu) {
  var console = require('console');
  var textLib = require('textLib');
  var util = require('tool/util.js')
  var db = require('tool/getDB.js');
  var input = menu;
  var result=[];

  let sandwich = db.getBread();
  let sauce = db.getSauce();
  let topping = db.getTopping();
  // 1단계 : 샌드위치
  let sandwichName = input.kname;
  // 2단계 : 빵
  let breadName = input.material[0].mt;
  // 3단계 : 토핑
  var top = [];
  for(i=1;i<input.material.length;i++){
    let mat = input.material[i].mt
    console.log(mat);
    var len = mat.split(" ").length;
    var mtArr = "";
    if(mat.split(" ")[0] == "추천") for(j = 1; j < len; j++) mtArr = mtArr + mat.split(" ")[j];
    else if(len > 1){
      mtArr = mat.split(" ",len-1);
      mtArr = mtArr.join(" ");
    } 
    else if(len == 1) mtArr = mat;

    for (i = 0; i < topping.length; i++) {
      if (textLib.fuzzyMatch(topping[i].kname, mtArr)) {
        top.push(mat);
      }
    }
  }
  let sauceName = [];

  // 4단계 : 야채 & 소스
  var json = new Object();
  for(i=1;i<input.material.length;i++){
    let mat = input.material[i].mt
    console.log(mat);
    var len = mat.split(" ").length;
    var mtArr = "";
    if(mat.split(" ")[0] == "추천") for(j = 1; j < len; j++) mtArr = mtArr + mat.split(" ")[j];
    else if(len > 1){
      mtArr = mat.split(" ",len-1);
      mtArr = mtArr.join(" ");
    } 
    else if(len == 1) mtArr = mat;

    for (i = 0; i < sauce.length; i++) {
      if (textLib.fuzzyMatch(sauce[i].kname, mtArr)) {
        sauceName.push(mat);
      }
    }
  }
  json.order = sandwichName;
  result.push(json.order + " 주세요.");
  result.push("빵은 " + breadName + "로 해주시고,");
  var str = "";
  if(top.length > 1){
    for(i=0;i<top.length;i++){
      str += top
      if(i == top.length - 1) break; 
      str += ",";
    }
  }else str = top;
  result.push("토핑은 " + str + "로 해주시고,")
  var str = "";
  if(sauceName.length > 1){
    for(i=0;i<sauceName.length;i++){
      str += sauceName
      if(i == sauceName.length - 1) break; 
      str += ",";
    }
  }else str = sauceName
  result.push("소스는 "+ str + "로 해주시면 되요~~");
  var res = [];
  res.orders = result;
  console.log(res);
  return res;
}
