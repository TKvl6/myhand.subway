module.exports.function = function multiSelectImage (menu) {
  var console = require('console');
  var textLib = require('textLib');
  var util = require('tool/util.js')
  var result = menu;
  var tmp = [];
  var http = require('http');
  var tag = http.getUrl('https://api.sheety.co/a590e2a1-d231-43c3-ac32-8fb031931e17',{format : "json"});
  var images = [];
  var material = menu.material;

  for(i=0;i<material.length;i++){
    var no = material[i].index;
    var url = "https://github.com/TKvl6/myhand.subway/blob/master/materialCard/"+ no + ".png?raw=true";
    images.push(url);
  }
  return images;  


  for(j=0; j< result.material.length; j++){
    for(i=0; i< images.length; i++){
      var imageArray = images[i].url.split(".");
      var temp = imageArray[imageArray.length-2].split("/");
      var image = temp[temp.length-1];
      
      console.log(image);
      console.log(result)
      var name = util.getNameByNo(image,tag);
      if(textLib.fuzzyMatch(result.material[j].mt,name)){
        result.material.splice(j);
        console.log(result)
      }
    }
  }
  console.log(result);
  return result
}
