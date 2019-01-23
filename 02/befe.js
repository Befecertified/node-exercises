const Person = require("./classes/Person");

var befe = new Person("Befe");

befe.on("speak", function(said) {
  console.log(`${this.name} says ${said}`);
});

befe.emit("speak", "The fear of the Lord is the beginning of wisdom.");
