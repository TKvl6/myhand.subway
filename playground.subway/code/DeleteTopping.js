module.exports.function = function multiSelectImage (menu) {
  var console = require('console');
  var textLib = require('textLib');
  var util = require('tool/util.js')
  var result = menu;
  var tmp = [];

  var images = [];
  var material = menu.material;

  for(i=0;i<material.length;i++){
    var no = material[i].index;
    var url = "https://github.com/TKvl6/myhand.subway/blob/master/playground.subway/assets/images/materialCard/"+ no + ".png?raw=true";
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
