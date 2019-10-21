module.exports.function = function multiSelectImage (menu, images) {
  var console = require('console');
  var textLib = require('textLib');
  var util = require('tool/util.js')
  var result = menu;
  var len = result.material.length;
  var http = require('http');
  var tag = http.getUrl('https://api.sheety.co/a590e2a1-d231-43c3-ac32-8fb031931e17',{format : "json"});

  for(i=0; i< images.length; i++){
    var imageArray = images[i].url.split(".");
    var temp = imageArray[imageArray.length-2].split("/");
    var image = temp[temp.length-1];
    
    var name = util.getNameByNo(image);

    var aJson = new Object();
    console.log(result.material[len-1]);
    aJson.no = result.material[len-1].no + i + 1;
    for(i=0;i<tag.length;i++){
      if(textLib.fuzzyMatch(tag[i].material,name)){
        aJson.index = tag[i].no;
        break;
      }
    }
    aJson.mt = name;
    result.material.push(aJson); 
    // #tag, 환상적인 ~~맛 변경 필요
  }
  console.log(result);
  return result
}
