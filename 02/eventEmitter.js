const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("customEvent", function(arg) {
  console.log(`${arg.message}: ${arg.statusCode}`);
});

emitter.emit("customEvent", { statusCode: 200, message: "Hello World!" });
