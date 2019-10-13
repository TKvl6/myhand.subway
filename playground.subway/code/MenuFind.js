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
  console.log(response[0].kname);

  var result = [];
  console.log(String(menu).replace(" ",""));
  var material = "";
  for(var i = 0; i < response.length; i++) {

    if(textLib.fuzzyMatch(response[i].kname, menu)){
      result.push(response[i]);
    }
  }
  console.log(result);

  // RollResult
  return result;
}