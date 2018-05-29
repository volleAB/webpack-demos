//main.js
// const greeter = require('./Greeter.js');
const Greet = require('./js/Greeter.js');

// document.querySelector("#root").appendChild(greeter());
const greet = new Greet("#root")
    greet.greeter();
// const greet = new Greet();
// document.querySelector("#root").Greet.greeter();

