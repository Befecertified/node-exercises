const http = require("http");

http
  .createServer(function(req, res) {
    if (req.url === "/") {
      res.write("<h1>Hello World!</h1>");
      res.end();
    }
    if (req.url === "/me") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write("<h2>Hi Befe!</h2>");
      res.end();
    }
  })
  .listen(3000);

console.log("Server listening on port 3000");
