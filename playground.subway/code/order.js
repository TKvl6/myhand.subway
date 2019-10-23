module.exports.function = function order(menu) {
  var console = require('console');
  var textLib = require('textLib');
  var util = require('tool/util.js')
  var db = require('tool/getDB.js');
  var input = menu;
  var result={
    orders : undefined
  };
  var orders = new Array();
  

  let sandwich = db.getBread();
  let sauce = db.getSauce();
  let topping = db.getTopping();
  // 1단계 : 샌드위치
  let sandwichName = input.kname;
  var index = 1;
  var aJson = new Object();
  aJson.no = index++;
  aJson.order = sandwichName + " 주세요." ;
  orders.push(aJson);

  // 2단계 : 빵
  let breadName = input.material[0].mt;

  aJson = new Object();
  aJson.no = index++;
  aJson.order = "빵은 " + breadName + "로 해주시고, 구워주세요.";
  orders.push(aJson);
  
  // 4단계 : 야채 & 소스
  let toppingName = [];
  let sauceName = [];
  for(i=1;i<input.material.length;i++){
    let mat = input.material[i].mt
    var len = mat.split(" ").length;
    var mtArr = "";
    if(mat.split(" ")[0] == "추천") for(j = 1; j < len; j++) mtArr = mtArr + mat.split(" ")[j];
    else if(len > 1){
      mtArr = mat.split(" ",len-1);
      mtArr = mtArr.join(" ");
    } 
    else if(len == 1) mtArr = mat;
    var flag = false;
    for (j = 0; j < sauce.length; j++) {
      if (textLib.fuzzyMatch(sauce[j].kname, mtArr)) {
        sauceName.push(mtArr);
        flag = true;
        break;
      }
    }
    // 3단계 : 토핑
    if(!flag){
      toppingName.push(mtArr);
    }
  }
  var str = "";
  if(toppingName.length > 1){
    for(i=0;i<toppingName.length;i++){
      str = str + toppingName[i]
      console.log(toppingName[i] + "/" + str);
      if(i == toppingName.length - 1) break; 
      str = str + ",";
    }
  }
  
  aJson = new Object();
  aJson.no = index++;
  console.log(str);
  if(str.length == 0){
    str = "토핑 추가는 안할게요.";
    aJson.order = str;
  }else{
    aJson.order = "토핑은 " + str + "로 해주시고,";
  }
  
  orders.push(aJson);


  var str = "";
  if(sauceName.length > 1){
    for(i=0;i<sauceName.length;i++){
      str = str + sauceName[i]
      if(i == sauceName.length - 1) break; 
      str = str + ",";
    }
  }
  
  aJson = new Object();
  aJson.no = index++;
  aJson.order = "야채는 전부 넣고, 소스는 "+ str + "로 해주시면 되요~~";
  orders.push(aJson);
  console.log(orders);  
  result.orders = orders;
  console.log(result);
  return result;
}
