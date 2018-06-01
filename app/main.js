//main.js
const less = require('./less/main.less');
const Greet = require('./js/Greeter.js');

const greet = new Greet("#root");
    greet.greeter()
    greet.bulid()