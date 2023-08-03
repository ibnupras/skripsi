"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["addpois"],{

/***/ "./resources/views/webgis/js/src/addpois.js":
/*!**************************************************!*\
  !*** ./resources/views/webgis/js/src/addpois.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./resources/views/webgis/js/src/map.js\");\n\n\nvar filterExpression = \"jenis = 'ATM'\";\nfunction addNewImageLayer(url, layerName) {\n  var newLayer = new ol.layer.Image({\n    source: new ol.source.ImageWMS({\n      visible: false,\n      url: url,\n      params: {\n        LAYERS: layerName\n      }\n    })\n  });\n  _map_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLayer(newLayer);\n  return newLayer;\n}\n\n// Create and add initial layer 'ne:kantor'\nvar layerKantor = addNewImageLayer(\"http://localhost:7070/geoserver/ne/wms\", \"ne:kantor\");\n\n// // Additional Image Layers (ne:atm, ne:kcp, ne:kfo)\nvar layerATM = addNewImageLayer(\"http://localhost:7070/geoserver/ne/wms\", \"ne:atmmakassar\");\nvar layerKCP = addNewImageLayer(\"http://localhost:7070/geoserver/ne/wms\", \"ne:kcpmakassar\");\nvar layerKFO = addNewImageLayer(\"http://localhost:7070/geoserver/ne/wms\", \"ne:kfomakassar\");\n\n// Function to toggle the visibility of an Image Layer\nfunction toggleLayerVisibility(layer) {\n  layer.setVisible(!layer.getVisible());\n}\n\n// Button click event handlers for toggling layer visibility\n$(\".kantor\").on(\"click\", function () {\n  toggleLayerVisibility(layerKantor);\n});\n$(\".atm\").on(\"click\", function () {\n  toggleLayerVisibility(layerATM);\n});\n$(\".kcp\").on(\"click\", function () {\n  toggleLayerVisibility(layerKCP);\n});\n$(\".kfo\").on(\"click\", function () {\n  toggleLayerVisibility(layerKFO);\n});\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/addpois.js?");

/***/ })

}]);