/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/config.json":
/*!*************************!*\
  !*** ./app/config.json ***!
  \*************************/
/*! exports provided: greetText, blueText, default */
/***/ (function(module) {

eval("module.exports = {\"greetText\":\"Hi there and greetings from JSON!!!\",\"blueText\":\"Hello!!!!!!  asasad\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2FwcC9jb25maWcuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/config.json\n");

/***/ }),

/***/ "./app/js/Greeter.js":
/*!***************************!*\
  !*** ./app/js/Greeter.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var config = __webpack_require__(/*! ../config.json */ \"./app/config.json\");\n\nclass Greet {\n  constructor(container) {\n    console.log(container);\n    this._$container = container;\n  }\n  greeter() {\n    var con = document.querySelector(this._$container);\n    let greet = document.createElement('div');\n    greet.classList.add('greet');\n    let blue = document.createElement('div');\n    blue.classList.add('blue');\n    greet.textContent = config.greetText;\n    blue.textContent = config.blueText;\n    con.append(greet, blue);\n  }\n  bulid() {\n    //TODO\n    var con = document.querySelector(this._$container);\n    var bg = document.getElementsByClassName(\"header\")[0];\n    for (let i = 0; i < 4; i++) {\n      var oDiv = document.createElement('div');\n      oDiv.classList.add('');\n      con.append(oDiv);\n    }\n    bg.classList.add('bg');\n  }\n}\n\nmodule.exports = Greet;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvR3JlZXRlci5qcz9kMzA1Il0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVpcmUiLCJHcmVldCIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsIl8kY29udGFpbmVyIiwiZ3JlZXRlciIsImNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdyZWV0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJsdWUiLCJ0ZXh0Q29udGVudCIsImdyZWV0VGV4dCIsImJsdWVUZXh0IiwiYXBwZW5kIiwiYnVsaWQiLCJiZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwib0RpdiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFNBQVMsbUJBQUFDLENBQVEseUNBQVIsQ0FBYjs7QUFFQSxNQUFNQyxLQUFOLENBQVk7QUFDVkMsY0FBWUMsU0FBWixFQUF1QjtBQUNyQkMsWUFBUUMsR0FBUixDQUFZRixTQUFaO0FBQ0EsU0FBS0csV0FBTCxHQUFtQkgsU0FBbkI7QUFDRDtBQUNESSxZQUFXO0FBQ1QsUUFBSUMsTUFBTUMsU0FBU0MsYUFBVCxDQUF1QixLQUFLSixXQUE1QixDQUFWO0FBQ0EsUUFBSUssUUFBUUYsU0FBU0csYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELFVBQU1FLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCO0FBQ0EsUUFBSUMsT0FBT04sU0FBU0csYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FHLFNBQUtGLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixNQUFuQjtBQUNBSCxVQUFNSyxXQUFOLEdBQW9CakIsT0FBT2tCLFNBQTNCO0FBQ0FGLFNBQUtDLFdBQUwsR0FBbUJqQixPQUFPbUIsUUFBMUI7QUFDQVYsUUFBSVcsTUFBSixDQUFXUixLQUFYLEVBQWlCSSxJQUFqQjtBQUNEO0FBQ0RLLFVBQVM7QUFDUDtBQUNBLFFBQUlaLE1BQU1DLFNBQVNDLGFBQVQsQ0FBdUIsS0FBS0osV0FBNUIsQ0FBVjtBQUNBLFFBQUllLEtBQUtaLFNBQVNhLHNCQUFULENBQWdDLFFBQWhDLEVBQTBDLENBQTFDLENBQVQ7QUFDQSxTQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJQUFJLENBQW5CLEVBQXNCQSxHQUF0QixFQUEyQjtBQUN6QixVQUFJQyxPQUFPZixTQUFTRyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQVksV0FBS1gsU0FBTCxDQUFlQyxHQUFmLENBQW1CLEVBQW5CO0FBQ0FOLFVBQUlXLE1BQUosQ0FBV0ssSUFBWDtBQUNEO0FBQ0RILE9BQUdSLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixJQUFqQjtBQUNEO0FBekJTOztBQTRCWlcsT0FBT0MsT0FBUCxHQUFpQnpCLEtBQWpCIiwiZmlsZSI6Ii4vYXBwL2pzL0dyZWV0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnLmpzb24nKTtcclxuXHJcbmNsYXNzIEdyZWV0IHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XHJcbiAgICB0aGlzLl8kY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gIH1cclxuICBncmVldGVyICgpIHtcclxuICAgIHZhciBjb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuXyRjb250YWluZXIpO1xyXG4gICAgbGV0IGdyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncmVldC5jbGFzc0xpc3QuYWRkKCdncmVldCcpO1xyXG4gICAgbGV0IGJsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJsdWUuY2xhc3NMaXN0LmFkZCgnYmx1ZScpO1xyXG4gICAgZ3JlZXQudGV4dENvbnRlbnQgPSBjb25maWcuZ3JlZXRUZXh0O1xyXG4gICAgYmx1ZS50ZXh0Q29udGVudCA9IGNvbmZpZy5ibHVlVGV4dDtcclxuICAgIGNvbi5hcHBlbmQoZ3JlZXQsYmx1ZSk7XHJcbiAgfVxyXG4gIGJ1bGlkICgpIHtcclxuICAgIC8vVE9ET1xyXG4gICAgdmFyIGNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fJGNvbnRhaW5lcik7XHJcbiAgICB2YXIgYmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGVhZGVyXCIpWzBdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICB2YXIgb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBvRGl2LmNsYXNzTGlzdC5hZGQoJycpO1xyXG4gICAgICBjb24uYXBwZW5kKG9EaXYpO1xyXG4gICAgfVxyXG4gICAgYmcuY2xhc3NMaXN0LmFkZCgnYmcnKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JlZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/js/Greeter.js\n");

/***/ }),

/***/ "./app/less/main.less":
/*!****************************!*\
  !*** ./app/less/main.less ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbGVzcy9tYWluLmxlc3M/MjViOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL2FwcC9sZXNzL21haW4ubGVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/less/main.less\n");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//main.js\nconst less = __webpack_require__(/*! ./less/main.less */ \"./app/less/main.less\");\nconst Greet = __webpack_require__(/*! ./js/Greeter.js */ \"./app/js/Greeter.js\");\n\nconst greet = new Greet(\"#root\");\ngreet.greeter();\n// greet.bulid()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz9mMTYxIl0sIm5hbWVzIjpbImxlc3MiLCJyZXF1aXJlIiwiR3JlZXQiLCJncmVldCIsImdyZWV0ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsT0FBTyxtQkFBQUMsQ0FBUSw4Q0FBUixDQUFiO0FBQ0EsTUFBTUMsUUFBUSxtQkFBQUQsQ0FBUSw0Q0FBUixDQUFkOztBQUVBLE1BQU1FLFFBQVEsSUFBSUQsS0FBSixDQUFVLE9BQVYsQ0FBZDtBQUNJQyxNQUFNQyxPQUFOO0FBQ0EiLCJmaWxlIjoiLi9hcHAvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vbWFpbi5qc1xyXG5jb25zdCBsZXNzID0gcmVxdWlyZSgnLi9sZXNzL21haW4ubGVzcycpO1xyXG5jb25zdCBHcmVldCA9IHJlcXVpcmUoJy4vanMvR3JlZXRlci5qcycpO1xyXG5cclxuY29uc3QgZ3JlZXQgPSBuZXcgR3JlZXQoXCIjcm9vdFwiKVxyXG4gICAgZ3JlZXQuZ3JlZXRlcigpO1xyXG4gICAgLy8gZ3JlZXQuYnVsaWQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/main.js\n");

/***/ })

/******/ });