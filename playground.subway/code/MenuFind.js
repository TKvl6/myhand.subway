module.exports.function = function menuFind (menu) {
  var textLib = require('textLib');

  let options = {
    format: 'json',
    headers: {
      'accept': 'application/json'
    },
  };
  const http = require('http');
  const console = require('console');
  let response = http.getUrl('https://api.sheety.co/b22d0d25-9ba9-481b-a000-a2206781526b', options);
  

  console.log(response[0].material);
  
  
  console.log(String(menu).replace(" ",""));

  var aJsonArray = new Array();
  var li = response[0].material.split(",");
  li.forEach(function(el){
    var aJson = new Object();
    aJson.mt = el;
    console.log(el);
    aJsonArray.push(aJson);
  })
  
  console.log(aJsonArray);

  // var material = JSON.stringify(aJsonArray);

  var result = [];
  for(var i = 0; i < response.length; i++) {

    if(textLib.fuzzyMatch(response[i].kname, menu)){
      result.push(response[i]);
    }
  }
  result[0].material = aJsonArray;

  console.log(result);
  console.log("첫번째 재료 : " + result[0].material[0].mt);
  // RollResult
  return result;
}