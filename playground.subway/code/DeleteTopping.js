module.exports.function = function multiSelectImage (menu, images) {
  var console = require('console');
  var textLib = require('textLib');
  var util = require('tool/util.js')
  var result = menu;
  var tmp = [];

  for(j=0; j< result.material.length; j++){
    for(i=0; i< images.length; i++){
      var imageArray = images[i].url.split(".");
      var temp = imageArray[imageArray.length-2].split("/");
      var image = temp[temp.length-1];
      
      console.log(image);
      console.log(result)
      var name = util.getNameByNo(image);
      if(textLib.fuzzyMatch(result.material[j].mt,name)){
        result.material.splice(j);
        console.log(result)
      }
    }
  }
  console.log(result);
  return result
}
