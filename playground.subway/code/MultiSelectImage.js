module.exports.function = function multiSelectImage (menu, images ,addsub) {
  var console = require('console');
  var textLib = require('textLib');
  var util = require('tool/util.js')
  var result = menu;
  var tmp = [];
  ///////////////////////////////
  // 이미지  -> 재료명 처리 필요  //
  ///////////////////////////////
  if(addsub == "추가"){
    for(i=0; i< images.length; i++){
      var imageArray = images[i].url.split(".");
      var temp = imageArray[imageArray.length-2].split("/");
      var image = temp[temp.length-1];
      
      console.log(image);
      var name = util.getNameByNo(image);
      result.material.push({mt : name}); 
    }
  }else{
    for(j=0; j< result.material.length; j++){
      for(i=0; i< images.length; i++){
        var imageArray = images[i].url.split(".");
        var temp = imageArray[imageArray.length-2].split("/");
        var image = tem
        p[temp.length-1];
        
        console.log(image);
        var name = util.getNameByNo(image);
        if(textLib.fuzzyMatch(result.material[j].mt,name)){
        }else{
          tmp.push(result.material[j])
        }
      }
    }
    result.material = tmp;
  }
  console.log(result);
  return result
}
