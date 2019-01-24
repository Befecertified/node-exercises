const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);

    if (req.url === "/") {
      fs.readFile("./public/index.html", "UTF-8", (err, htmlCode) => {
        if (err) {
          console.log("Error: ", err);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(htmlCode);
        }
      });
    } else if (req.url === "/ario.css") {
      fs.readFile("./public/ario.css", "UTF-8", (err, cssCode) => {
        if (err) {
          console.log("Error: ", err);
        } else {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.end(cssCode);
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 file not found.");
    }
  })
  .listen(3000);

console.log("Server listening on port 3000");
