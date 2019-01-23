// require the path module (require object is available as part of the module wrapper function)
var path = require("path");
//console object is available on the global object
console.log("NodeJS running on PC!!!");
console.log(
  `The sum of any two odd numbers is an even number. e.g 9 + 3 = ${9 + 3}`
);

var fullName = "My name is Deekor Baribefe";
var nickName = fullName.slice(22);

console.log(`Hi, I'm ${nickName}`);

console.log(__dirname);
console.log(__filename);

console.log(`NodeJs file reading from ${path.basename(__filename)}`);
