module.exports.function = function randomRecommend (subwayName,searchKeyword) {
  var textLib = require('textLib');
  var tool = require('tool/util.js');
  var console = require('console');
  let response = tool.getSandwichList();
  var result = [];
  var http = require('http');
  var mat = http.getUrl('https://api.sheety.co/a590e2a1-d231-43c3-ac32-8fb031931e17',{format : "json"});
  var tag = http.getUrl('https://api.sheety.co/e543fd14-622d-46cf-a993-7654aa4a22be',{format : "json"});

  if(subwayName == "인기"){
    for(i=31; i< response.length; i++){
      if(result.length == 4) break;
      var roll = Math.ceil(Math.random() * 4);
      if(roll == 2){
          var images = [];
          response[i].material = tool.divideMaterial(response[i].material,mat);
          response[i].tag = tool.divideTag(response[i].tag);
          response[i].detail = tool.tagsentence(response[i].material,tag);
          // for(j=0;j<response[i].material.length;j++){
          //   var no = response[i].material[j].index;
          //   var url = "https://github.com/TKvl6/myhand.subway/blob/master/playground.subway/assets/images/materialCard/"+ no + ".png?raw=true";
          //   var bJson = new Object();
          //   bJson.url = url;
          //   images.push(bJson);
          // }
          // response[i].img = images;
          result.push(response[i]);
        }
    }
    return {
      menus : result,
      keyword : "베스트 "
    }
  }else{
    var randomMenu = new Array(5);
    var cnt = 0;
    var flag = true;
    while(cnt < 5){
      var num;
      num = parseInt(Math.random() * response.length) + 1;
      for(var i = 0; i < cnt; i++){
        if(randomMenu[i] == num) flage = false;
      }

      if(flag){
        randomMenu[cnt] = num;
        cnt++;
      }
      flag = true;
      
    }
    console.log(randomMenu);
    for(var i = 0; i < 5; i++){
          var menuidx = randomMenu[i];
          var images = [];
          response[menuidx].material = tool.divideMaterial(response[menuidx].material,mat);
          response[menuidx].tag = tool.divideTag(response[menuidx].tag);
          response[menuidx].detail = tool.tagsentence(response[menuidx].material,tag);
          for(j=0;j<response[menuidx].material.length;j++){
            var no = response[menuidx].material[j].index;
            var url = "https://github.com/TKvl6/myhand.subway/blob/master/playground.subway/assets/images/materialCard/"+ no + ".png?raw=true";
            var bJson = new Object();
            bJson.url = url;
            images.push(bJson);
          }
          response[menuidx].img = images;
          result.push(response[menuidx]);
    }
      return {
      menus : result
    };
    // for(var i = 0; i < response.length; i++) {
    //   if(result.length == 4) break;
    //   var roll = Math.ceil(Math.random() * 4);
    //   if(roll == 2){
    //       var images = [];
    //       response[i].material = tool.divideMaterial(response[i].material,mat);
    //       response[i].tag = tool.divideTag(response[i].tag);
    //       response[i].detail = tool.tagsentence(response[i].material,tag);
    //       // for(j=0;j<response[i].material.length;j++){
    //       //   var no = response[i].material[j].index;
    //       //   var url = "https://github.com/TKvl6/myhand.subway/blob/master/playground.subway/assets/images/materialCard/"+ no + ".png?raw=true";
    //       //   var bJson = new Object();
    //       //   bJson.url = url;
    //       //   images.push(bJson);
    //       // }
    //       // response[i].img = images;
    //       result.push(response[i]);
    //     }
    // }
  }

}


  