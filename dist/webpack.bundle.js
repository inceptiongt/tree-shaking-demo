/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/maths.js":
/*!**********************!*\
  !*** ./src/maths.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cube": () => (/* binding */ cube)
/* harmony export */ });
/* unused harmony export square */
function square ( x ) {
    // console.log('x')
	return x.a
}
var o = {}
Object.defineProperty(o,'a',{get:function(v){console.log(12)}})
square(o)

function cube ( x ) {
	return x * x * x;
}

/***/ }),

/***/ "./src/v.js":
/*!******************!*\
  !*** ./src/v.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V8Engine": () => (/* binding */ V8Engine)
/* harmony export */ });
/* unused harmony export V6Engine */
var V8Engine = (function () {
    function V8Engine () {}
    V8Engine.prototype.toString = function () { return 'V8' }
    return V8Engine
  }())
  var V6Engine = (function () {
    function V6Engine () {}
    // V6Engine.prototype = V8Engine.prototype // <---- side effect
    V6Engine.prototype.toString = function () { return 'V6' }
    return V6Engine
  }())

  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/* harmony import */ var _v__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v */ "./src/v.js");
/* harmony import */ var _maths_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maths.js */ "./src/maths.js");
// // goog.provide('main')
// // goog.require('util')
// // goog.require('menu')





console.log( (0,_maths_js__WEBPACK_IMPORTED_MODULE_0__.cube)( 5 ) ); // 125

let baz = () => {
  // post()
  var x = 1
  console.log(x)
  function unused () {
    return 5
  }
  return x
}

baz()


console.log(new _v__WEBPACK_IMPORTED_MODULE_1__.V8Engine().toString())
// import { Table } from "antd";

// console.log("table111",Table)


})();

/******/ })()
;