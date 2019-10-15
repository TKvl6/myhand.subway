module.exports.function = function conditionRecommend (inputKeyword,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response;

  var res = [];
  if(inputKeyword == "다이어트"){
    response = tool.searchSandwichByCal(350,'low');
    for(i =0; i< response.length; i++){
      var roll = Math.ceil(Math.random() * 7);
      if(roll == 5)
        res.push(response[i]);
    }
  }else if(inputKeyword == "든든"){
    response = tool.searchSandwichByCal(450,'high');
    for(i =0; i< response.length; i++){
      var roll = Math.ceil(Math.random() * 7);
      if(roll == 5)
        res.push(response[i]);
    }
  }else{
    res = tool.searchSandwichByTag(inputKeyword);
  }
  return res;
}
