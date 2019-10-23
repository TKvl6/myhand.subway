module.exports.function = function randomRecommend (subwayName,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response = tool.getSandwichList();
  var result = [];
  var http = require('http');
  var mat = http.getUrl('https://api.sheety.co/a590e2a1-d231-43c3-ac32-8fb031931e17',{format : "json"});
  var tag = http.getUrl('https://api.sheety.co/e543fd14-622d-46cf-a993-7654aa4a22be',{format : "json"});
  for(var i = 0; i < response.length; i++) {
    if(result.length == 4) break;
    var roll = Math.ceil(Math.random() * 3);
    if(roll == 2){
        var images = [];
        response[i].material = tool.divideMaterial(response[i].material,mat);
        response[i].tag = tool.divideTag(response[i].tag);
        response[i].detail = tool.tagsentence(response[i].material,tag);
        for(j=0;j<response[i].material.length;j++){
          var no = response[i].material[j].index;
          var url = "https://github.com/TKvl6/myhand.subway/blob/master/playground.subway/assets/images/materialCard/"+ no + ".png?raw=true";
          var bJson = new Object();
          bJson.url = url;
          images.push(bJson);
        }
        response[i].img = images;
        result.push(response[i]);
      }
  }
  return result;
}


  