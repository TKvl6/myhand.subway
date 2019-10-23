module.exports.function = function order(menu) {
 var console = require('console');
 var textLib = require('textLib');
 var util = require('tool/util.js')
 var db = require('tool/getDB.js');
 var input = menu;
 var result=[];
 let sandwich = db.getSandwich();
 let sauce = db.getSauce();
 let topping = db.getTopping();
 next:
 for (j = 0; j < input.material.length; j++) {
   let mat = input.material[j].mt
   console.log(mat);
   for (i = 0; i < sandwich.length; i++) {
     if (textLib.fuzzyMatch(sandwich[i].tag, mat)) {
       console.log("bread");
       result.push(mat);
       continue next;
     }
   }
   for (i = 0; i < topping.length; i++) {
     if (textLib.fuzzyMatch(topping[i].tag, mat)) {
       console.log("topping");
       result.push(mat);
       continue next;
     }
   }
   for (i = 0; i < sauce.length; i++) {
     if (textLib.fuzzyMatch(sauce[i].tag, mat)) {
       console.log("sauce");
       result.push(mat);
       continue next;
     }
   }
 }
 console.log(result);
 return result;
}