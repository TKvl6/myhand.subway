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

  next:
  for (k = 0; k < input.material.length; k++) {
    let mat = input.material[k].mt
    console.log(mat);
    var len = mat.split(" ").length;
    var mtArr = "";
    if(mat.split(" ")[0] == "추천") for(j = 1; j < len; j++) mtArr = mtArr + mat.split(" ")[j];
    else if(len > 1){
      mtArr = mat.split(" ",len-1);
      mtArr = mtArr.join(" ");
    } 
    else if(len == 1) mtArr = mat;
    console.log(mtArr);
    for (i = 0; i < sandwich.length; i++) {
      if (textLib.fuzzyMatch(sandwich[i].kname, mtArr)) {
        console.log("bread");
        result.push("빵은 "+ mat+" 로 주세요!");
        continue next;
      }
    }
    for (i = 0; i < topping.length; i++) {
      if (textLib.fuzzyMatch(topping[i].kname, mtArr)) {
        console.log("topping");
        result.push("토핑은 " + mat+ " 로 주세요");
        continue next;
      }
    }
    for (i = 0; i < sauce.length; i++) {
      if (textLib.fuzzyMatch(sauce[i].kname, mtArr)) {
        console.log("sauce");
        result.push("소스는 "+ mat+ " 로 주세요");
        continue next;
      }
    }
  }
  console.log(result);
  result=menu;
  return result;
}
