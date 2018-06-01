var config = require('../config.json');

class Greet {
  constructor(container) {
    console.log(container);
    this._$container = container;
  }
  greeter () {
    var con = document.querySelector(this._$container);
    let greet = document.createElement('div');
    greet.classList.add('greet');
    let blue = document.createElement('div');
    blue.classList.add('blue');
    greet.textContent = config.greetText;
    blue.textContent = config.blueText;
    con.append(greet,blue);
  }
  bulid () {
    //TODO
    var con = document.querySelector(this._$container);
    var bg = document.getElementsByClassName("header")[0];
    for(let i = 0; i < 4; i++) {
      var oDiv = document.createElement('div');
      oDiv.classList.add('yellow');
      con.append(oDiv);
    }
    bg.classList.add('bg');
  }
}

module.exports = Greet;