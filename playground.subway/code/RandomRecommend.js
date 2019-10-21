module.exports.function = function randomRecommend (subwayName,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response = tool.getSandwichList();
  var result = [];
  for(var i = 0; i < response.length; i++) {
    if(result.length == 4) break;
    var roll = Math.ceil(Math.random() * 8);
    if(roll == 5){
        response[i].material = tool.divideMaterial(response[i].material);
        response[i].tag = tool.divideTag(response[i].tag);
        response[i].detail = tool.tagsentence(response[i].material);
        result.push(response[i]);
      }
  }
  return result;
}
