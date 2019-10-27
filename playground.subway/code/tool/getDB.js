var http = require('http');
module.exports.getSandwich = function () {
  let sandwich = http.getUrl('https://api.sheety.co/b22d0d25-9ba9-481b-a000-a2206781526b', {format : "json"});
  return sandwich;
}
module.exports.getBread = function () {
  let bread = http.getUrl('https://api.sheety.co/ed1ef90d-4980-4f22-98b0-d41efb419257', {format : "json"});
  return bread;
}
module.exports.getSauce = function () {
  let sauce = http.getUrl('https://api.sheety.co/6f8952e8-ae0d-4d98-84bb-4be8131c534a', {format : "json"});
  return sauce;
}
module.exports.getTopping = function () {
  let topping = http.getUrl('https://api.sheety.co/5f320b37-f502-4696-b1e0-ca5c1e21ca60', {format : "json"});
  return topping;
}
// module.exports.getAllergy = function () {
//   let allergy = http.getUrl('https://api.sheety.co/f6fbda79-d1f9-4e26-9df0-855485531ca1', {format : "json"});
//   return allergy;
// }
// module.exports.getSalad = function () {
//   let salad = http.getUrl('https://api.sheety.co/f3c75b8a-b1b0-420b-92e3-24af83f0dd8a', {format : "json"});
//   return salad;
// }