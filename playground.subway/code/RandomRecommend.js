module.exports.function = function randomRecommend (subwayName,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response = tool.getSandwichList();
  
  var result = [];
  for(var i = 0; i < response.length; i++) {
    if(result.length == 4) break;
    var roll = Math.ceil(Math.random() * 10);
    response[i].material = tool.divideMaterial(response[i].material);
    if(roll == 5){
        response[i].material = tool.divideMaterial(response[i].material);
        res.push(response[i]);
      }
  }
  return result;
}
