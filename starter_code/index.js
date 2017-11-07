const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let passenger = new Person('Angel', 3, 8);
elevator.start();
elevator.call(passenger);
