module.exports.function = function multiSelectImage (menu, images ,addsub) {
  var console = require('console');
  var textLib = require('textLib');
  var result = menu;
  var tmp = [];
  ///////////////////////////////
  // 이미지  -> 재료명 처리 필요  //
  ///////////////////////////////
    for(i=0; i< images.length; i++){
      result.material.push({mt : 123123}); 

    }
  // }else{
  //   for(i=0; i< result.material.length; i++){
  //     if(textLib.fuzzyMatch(result.material[i].mt,images)){
  //     }else{
  //       tmp.push(result.material[i])
  //     }
  //   }
  //   result.material = tmp;
  // }
  console.log(result);
  return result
}
