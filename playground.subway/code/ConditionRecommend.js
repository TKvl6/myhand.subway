module.exports.function = function conditionRecommend (inputKeyword,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response;
  var http = require('http');
  var mat = http.getUrl('https://api.sheety.co/a590e2a1-d231-43c3-ac32-8fb031931e17',{format : "json"});
  var tag = http.getUrl('https://api.sheety.co/e543fd14-622d-46cf-a993-7654aa4a22be',{format : "json"});
  
  var res = [];
  if(inputKeyword == "다이어트"){
    response = tool.searchSandwichByCal(350,'low');
    
    for(i =0; i< response.length; i++){
      if(res.length == 4) break;
      var roll = Math.ceil(Math.random() * 3);
      if(roll == 2){
        response[i].material = tool.divideMaterial(response[i].material,mat);
        response[i].tag = tool.divideTag(response[i].tag);
        response[i].detail = tool.tagsentence(response[i].material,tag);
        res.push(response[i]);
      }
    }
  }else if(inputKeyword == "든든"){
    response = tool.searchSandwichByCal(450,'high');
    console.log(response);
    for(i =0; i< response.length; i++){
      if(res.length == 4) break;
      var roll = Math.ceil(Math.random() * 3);
      if(roll == 2){
        response[i].material = tool.divideMaterial(response[i].material,mat);
        response[i].tag = tool.divideTag(response[i].tag);
        response[i].detail = tool.tagsentence(response[i].material,tag);
        res.push(response[i]);
      }
    }
  }else{
    response = tool.searchSandwichByTag(inputKeyword);
    console.log(response)
    for(i =0; i< response.length; i++){
      if(res.length == 4) break;
      var roll = Math.ceil(Math.random() * 3);
      if(roll == 2){
        response[i].material = tool.divideMaterial(response[i].material,mat);
        response[i].tag = tool.divideTag(response[i].tag);
        response[i].detail = tool.tagsentence(response[i].material,tag);
        res.push(response[i]);
      }
    }
  }
  return res;
}
