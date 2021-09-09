/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/index.css":
/*!**************************!*\
  !*** ./public/index.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://calculadora/./public/index.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_darkMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/darkMode */ \"./src/modules/darkMode.js\");\n/* harmony import */ var _public_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/index.css */ \"./public/index.css\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculadora/./src/main.js?");

/***/ }),

/***/ "./src/modules/calculadora.js":
/*!************************************!*\
  !*** ./src/modules/calculadora.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculator\": () => (/* binding */ calculator)\n/* harmony export */ });\n/* harmony import */ var _cleaningUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleaningUp */ \"./src/modules/cleaningUp.js\");\nconst calc = __webpack_require__(/*! ./fields */ \"./src/modules/fields.js\")\r\n;\r\n(0,_cleaningUp__WEBPACK_IMPORTED_MODULE_0__.deletingDigit)()\r\n;\r\n(0,_cleaningUp__WEBPACK_IMPORTED_MODULE_0__.cleaningScreen)()\r\nfunction calculator() {\r\n\r\n    calc.equal.addEventListener('click', (e) => {\r\n\r\n\r\n        if (calc.display.innerText == '') {\r\n\r\n            e.preventDefault()\r\n            const empty = 'empty'\r\n            calc.display.innerText = empty\r\n            setTimeout(() => { calc.display.innerText = '' }, 5000)\r\n            return\r\n\r\n        } else {\r\n\r\n            calc.display.innerText = eval(calc.display.innerText)\r\n        }\r\n\r\n\r\n    })\r\n}\r\ncalc.equal.addEventListener('click', calculator)\n\n//# sourceURL=webpack://calculadora/./src/modules/calculadora.js?");

/***/ }),

/***/ "./src/modules/cleaningUp.js":
/*!***********************************!*\
  !*** ./src/modules/cleaningUp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleaningScreen\": () => (/* binding */ cleaningScreen),\n/* harmony export */   \"deletingDigit\": () => (/* binding */ deletingDigit)\n/* harmony export */ });\n/* harmony import */ var _digitsScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digitsScreen */ \"./src/modules/digitsScreen.js\");\nconst calc = __webpack_require__(/*! ./fields */ \"./src/modules/fields.js\")\r\n;\r\n(0,_digitsScreen__WEBPACK_IMPORTED_MODULE_0__.digitsScreen)()\r\n\r\n\r\nfunction cleaningScreen() {\r\n\r\n    calc.clear.addEventListener('click', (e) => {\r\n        calc.display.innerText = ''\r\n        setTimeout(() => {\r\n            calc.display.innerText = ''\r\n        }, 100);\r\n    })\r\n}\r\n\r\n\r\nfunction deletingDigit() {\r\n\r\n    calc.delet.addEventListener(\"click\", () => {\r\n        let string = calc.display.innerText.toString();\r\n        calc.display.innerText = string.substr(0, string.length - 1);\r\n    })\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://calculadora/./src/modules/cleaningUp.js?");

/***/ }),

/***/ "./src/modules/darkMode.js":
/*!*********************************!*\
  !*** ./src/modules/darkMode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"darkMode\": () => (/* binding */ darkMode)\n/* harmony export */ });\n/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operators */ \"./src/modules/operators.js\");\nconst calc = __webpack_require__(/*! ./fields */ \"./src/modules/fields.js\")\r\n;\r\n(0,_operators__WEBPACK_IMPORTED_MODULE_0__.operators)()\r\n\r\n\r\n\r\nfunction darkMode() {\r\n\r\n    let isDark = true;\r\n\r\n    calc.themeToggleBtn.onclick = () => {\r\n\r\n        calc.calculator.classList.toggle(\"dark\");\r\n        calc.themeToggleBtn.classList.toggle(\"active\");\r\n        calc.moon.classList.toggle('moonOf')\r\n        calc.sun.classList.toggle('sun')\r\n        calc.moon.classList.toggle('moon')\r\n        calc.sun.classList.toggle('sunOf')\r\n\r\n        isDark = !isDark;\r\n\r\n\r\n\r\n    };\r\n\r\n}\r\n\r\ndarkMode()\n\n//# sourceURL=webpack://calculadora/./src/modules/darkMode.js?");

/***/ }),

/***/ "./src/modules/digitsScreen.js":
/*!*************************************!*\
  !*** ./src/modules/digitsScreen.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"digitsScreen\": () => (/* binding */ digitsScreen)\n/* harmony export */ });\nconst calc = __webpack_require__(/*! ./fields */ \"./src/modules/fields.js\")\r\n\r\nfunction digitsScreen() {\r\n\r\n    calc.btn.forEach((btns) =>\r\n        btns.addEventListener('click', (event) => {\r\n            calc.display.innerHTML += event.target.id\r\n        })\r\n    );\r\n \r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculadora/./src/modules/digitsScreen.js?");

/***/ }),

/***/ "./src/modules/fields.js":
/*!*******************************!*\
  !*** ./src/modules/fields.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.themeToggleBtn = document.querySelector(\".theme-toggler\");\r\nexports.calculator = document.querySelector(\".calculator\");\r\nexports.toggleIcon = document.querySelector(\".toggler-icon\");\r\nexports.display = document.querySelector('#display')\r\nexports.btn = document.querySelectorAll('.btn-number')\r\nexports.clear = document.querySelector('#clear')\r\nexports.equal = document.querySelector('#equal')\r\nexports.operators = document.querySelectorAll('.btn-operator')\r\nexports.delet = document.querySelector('#backspace')\r\nexports.moon = document.querySelector('#waning-moon')\r\nexports.sun = document.querySelector('#morning-sun')\r\n\n\n//# sourceURL=webpack://calculadora/./src/modules/fields.js?");

/***/ }),

/***/ "./src/modules/operators.js":
/*!**********************************!*\
  !*** ./src/modules/operators.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"operators\": () => (/* binding */ operators)\n/* harmony export */ });\n/* harmony import */ var _calculadora__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculadora */ \"./src/modules/calculadora.js\");\nconst calc = __webpack_require__(/*! ./fields */ \"./src/modules/fields.js\")\r\n;\r\n(0,_calculadora__WEBPACK_IMPORTED_MODULE_0__.calculator)()\r\nfunction operators() {\r\n  \r\n\r\n    calc.operators.forEach((evento) => {\r\n        evento.addEventListener('click', (e) => {\r\n            if (evento.id == 'backspace' || evento.id == 'equal') {\r\n                e.preventDefault();\r\n            } else {\r\n                calc.display.innerText += evento.id\r\n            }\r\n\r\n        })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://calculadora/./src/modules/operators.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;