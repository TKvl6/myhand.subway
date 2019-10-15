module.exports.function = function randomRecommend (subwayName,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response = tool.getSandwichList();
  
  var result = [];
  for(var i = 0; i < response.length; i++) {
    var roll = Math.ceil(Math.random() * 10);
    console.log(roll);
    response[i].material = tool.divideMaterial(response[i].material);
    if(roll == 5)
      result.push(response[i]);
  }

  return result;
}
