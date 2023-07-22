"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["infodetail"],{

/***/ "./resources/views/webgis/js/src/infodetail.js":
/*!*****************************************************!*\
  !*** ./resources/views/webgis/js/src/infodetail.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./resources/views/webgis/js/src/map.js\");\n/* harmony import */ var ol_coordinate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/coordinate */ \"./node_modules/ol/coordinate.js\");\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/proj */ \"./node_modules/ol/proj.js\");\n\n\n\nvar content = document.getElementById(\"popup-content\");\nvar closer = document.getElementById(\"popup-closer\");\ncloser.onclick = function () {\n  _map__WEBPACK_IMPORTED_MODULE_0__.overlay.setPosition(undefined);\n  closer.blur();\n  return false;\n};\nvar a = false;\n$(\"#info\").on(\"click\", function () {\n  // disableAllFunction($(this));\n  if (!a) {\n    _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"singleclick\", callbackInfo);\n    $(\"#popup\").toggle(true);\n    a = true;\n    $(this).attr(\"data-function-active\", true);\n  } else {\n    _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].un(\"singleclick\", callbackInfo);\n    $(\"#popup\").toggle(false);\n    a = false;\n    $(this).attr(\"data-function-active\", false);\n  }\n});\nfunction callbackInfo(evt) {\n  var coordinate = evt.coordinate;\n  var hdms = (0,ol_coordinate__WEBPACK_IMPORTED_MODULE_2__.toStringHDMS)((0,ol_proj__WEBPACK_IMPORTED_MODULE_1__.toLonLat)(coordinate));\n  content.innerHTML = \"<p>Coordinate</p><code>\" + hdms + \"</code>\";\n  _map__WEBPACK_IMPORTED_MODULE_0__.overlay.setPosition(coordinate);\n}\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/infodetail.js?");

/***/ })

}]);