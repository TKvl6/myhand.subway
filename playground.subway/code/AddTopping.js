module.exports.function = function multiSelectImage (menu, images) {
  var console = require('console');
  var textLib = require('textLib');
  var util = require('tool/util.js')
  var result = menu;
  
  var http = require('http');
  var tag = http.getUrl('https://api.sheety.co/a590e2a1-d231-43c3-ac32-8fb031931e17',{format : "json"});
  var length = images.length;
  for(i=0; i< length; i++){
    var len = result.material.length;
    console.log(length+"/"+len);
    var imageArray = images[i].url.split(".");
    var temp = imageArray[imageArray.length-2].split("/");
    var image = temp[temp.length-1];
    
    var name = util.getNameByNo(image);

    var aJson = new Object();
    console.log(result.material[len-1]);
    for(j=0;j<tag.length;j++){
      if(textLib.fuzzyMatch(tag[j].material,name)){
        aJson.index = tag[j].no;
        break;
      }
    }
    aJson.mt = name;
    aJson.no = result.material[len-1].no + i + 1;
    console.log(aJson)
    result.material.push(aJson); 
    // #tag, 환상적인 ~~맛 변경 필요
  }
  return result
}
