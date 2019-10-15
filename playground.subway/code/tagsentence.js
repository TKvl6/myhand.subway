module.exports.function = function tagsentence (menu) {
  var material = menu.material;
  var http = require('http');
  var textLib = require('textLib');
  var tag = http.getUrl('',{format : "json"});
  var res = [];
  for(i = 0; i < material.length; i++){
    var mt = material[i].mt;
    var mtArr = mt.trim(" ");
    for(j = 0; j < tag.length; j++){
      if(textLib.fuzzyMatch(mt[0],tag[j].material)){
        for(k = 0; j < res.length; k++){
          if(textLib.fuzzyMatch(res[k].tag,mt[0])){
            var tmp = parseInt(res[k].score) + parseInt(tag[j].score);
            res[k].score = tmp;
          }else{
            res.push({ tag : mt[0], score : tag[j].score});
          }
        }
      }
    }
  }
  var str =  ["환상적인","환상적인","환상적인","환상적인"];
  var roll = Math.ceil(Math.random * str.length);
  var maxScore = 0;
  var maxTag;
  var suffix = "한 맛";
  for(i = 0; i < res.length; i++){
    if(res[i].score > maxScore){
      maxScore = res[i].score;
      maxTag = res[i].tag;
    }
  }
  var result = str[roll] + maxTag + suffix;
  return result;
}
