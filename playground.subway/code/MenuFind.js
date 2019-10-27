module.exports.function = function menuFind (menu,includeKeyword,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response = tool.getSandwichList();
  var http = require('http');
  console.log(String(menu).replace(" ",""));
  var mat = http.getUrl('https://api.sheety.co/a590e2a1-d231-43c3-ac32-8fb031931e17',{format : "json"});
  var tag = http.getUrl('https://api.sheety.co/e543fd14-622d-46cf-a993-7654aa4a22be',{format : "json"});
  var menus = [];
  for(var i = 0; i < response.length; i++) {
    if(menus.length == 4) break;
    if(textLib.fuzzyMatch(response[i].kname, menu,1)){
      console.log(response[i].kname + "/" + menu)
      response[i].material = tool.divideMaterial(response[i].material,mat);
      response[i].tag = tool.divideTag(response[i].tag);
      response[i].detail = tool.tagsentence(response[i].material,tag);
      menus.push(response[i])
    }
  }
  return {
    menus : menus,
    keyword : menu+"(이)가 포함된 "
  };
}