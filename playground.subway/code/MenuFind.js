module.exports.function = function menuFind (menu,includeKeyword,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response = tool.getSandwichList();
  var http = require('http');
  console.log(String(menu).replace(" ",""));
  var tag = http.getUrl('https://api.sheety.co/e543fd14-622d-46cf-a993-7654aa4a22be',{format : "json"});
  var result = [];
  for(var i = 0; i < response.length; i++) {
    if(result.length == 4) break;
    if(textLib.fuzzyMatch(response[i].kname, menu)){
      console.log(response[i].kname + "/" + menu)
      response[i].material = tool.divideMaterial(response[i].material,tag);
      response[i].tag = tool.divideTag(response[i].tag);
      response[i].detail = tool.tagsentence(response[i].material,tag);
      result.push(response[i])
    }
  }
  return result;
}