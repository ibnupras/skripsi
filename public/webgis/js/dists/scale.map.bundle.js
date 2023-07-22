"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["scale"],{

/***/ "./resources/views/webgis/js/src/scale.js":
/*!************************************************!*\
  !*** ./resources/views/webgis/js/src/scale.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./resources/views/webgis/js/src/map.js\");\n/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ \"./node_modules/ol/control/ScaleLine.js\");\n\n\n\n// scale\nvar scaleControl = new ol_control__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  units: \"metric\",\n  bar: true,\n  steps: 4,\n  text: true,\n  minWidth: 140\n});\n_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addControl(scaleControl);\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/scale.js?");

/***/ })

}]);