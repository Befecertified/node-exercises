const EventEmitter = require("events").EventEmitter;
const util = require("util");

class Person {
  constructor(name) {
    this.name = name;
  }
}

// ES5 constructor function for creating classes
// var Person = function(name) {
//   this.name = name;
// };

util.inherits(Person, EventEmitter);

module.exports = Person;
