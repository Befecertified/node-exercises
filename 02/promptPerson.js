const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
  name: "",
  sayings: []
};

var { name, sayings } = realPerson;

rl.question("What is the name of a real person? ", function(answer) {
  name = answer;

  rl.setPrompt(`What would ${name} say? `);

  rl.prompt();

  rl.on("line", function(saying) {
    sayings.push(saying.trim());

    if (saying.trim() === "exit") {
      rl.close();
    } else {
      rl.setPrompt(`What else would ${name} say? (type 'exit' to leave) `);

      rl.prompt();
    }
  });
});

rl.on("close", function() {
  console.log("%s is a guy that says %j", name, sayings);
  process.exit();
});
