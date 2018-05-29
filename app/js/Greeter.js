var config = require('../config.json');

class Greet {
  constructor(container) {
    console.log(container);
    this._$container = container;
  }
  greeter () {
    let con = document.querySelector(this._$container);
    let greet = document.createElement('div');
    greet.classList.add('greet');
    let blue = document.createElement('div');
    blue.classList.add('blue');
    greet.textContent = config.greetText;
    blue.textContent = config.blueText;
    con.append(greet,blue);
  }
}

module.exports = Greet;