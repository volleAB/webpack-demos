var config = require('./config.json');

/**module.exports = function() {
    let greet = document.createElement('div');
    greet.classList.add('greet');
    let blue = document.createElement('div');
    blue.classList.add('blue');
    greet.textContent = config.greetText;
    blue.textContent = config.blueText;
    return greet,blue;
};
*/

class Greet {
    greet () {
        let greet = document.createElement('div');
        greet.classList.add('greet');
        let blue = document.createElement('div');
        blue.classList.add('blue');
        greet.textContent = config.greetText;
        blue.textContent = config.blueText;
    }
}


module.exports = Greet;