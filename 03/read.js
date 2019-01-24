const fs = require("fs");

// const contents = fs.readFileSync("../README", "UTF-8");

// console.log(contents);

fs.readFile("../README", "UTF-8", (err, contents) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(contents);
  }
});
