"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "moduleAppB_partial";
exports.ids = ["moduleAppB_partial"];
exports.modules = {};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var promiseTrack = [];

if(__webpack_require__.f && __webpack_require__.f.consumes) { __webpack_require__.f.consumes("moduleAppB_partial", promiseTrack);}

var __webpack_exports__ = Promise.all(promiseTrack).then(function() {
	var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
	var __webpack_exports__ = (__webpack_exec__("webpack/container/entry/moduleAppB"));
	return __webpack_exports__
});module.exports.moduleAppB = __webpack_exports__;

})();