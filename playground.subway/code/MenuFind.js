module.exports.function = function menuFind (menu,includeKeyword,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response = tool.getSandwichList();
    
  console.log(String(menu).replace(" ",""));

  var result = [];
  for(var i = 0; i < response.length; i++) {

    if(textLib.fuzzyMatch(response[i].kname, menu)){
      response[i].material = tool.divideMaterial(response[i].material);
      result.push(response[i]);
    }
  }

  return result;
}