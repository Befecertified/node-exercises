const fs = require("fs");

//Synchronous blocking request to read files in 02 folder
// const files = fs.readdirSync("../02");
// console.log(files);

//Asynchronous non-blocking request to read files in 02 folder
fs.readdir("../02", (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log(files);
  }
});

console.log("Reading Files...");
