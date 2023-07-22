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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/layer/Image.js */ \"./node_modules/ol/layer/Image.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./resources/views/webgis/js/src/map.js\");\n\n\nvar layerKantor = new ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  source: new ol.source.ImageWMS({\n    visible: false,\n    url: 'http://localhost:7070/geoserver/ne/wms',\n    // Ganti dengan URL WMS GeoServer Anda dan nama workspace \"ne\".\n    params: {\n      'LAYERS': 'ne:kantor'\n    } // Ganti dengan nama layer yang ingin Anda tampilkan.\n  })\n});\n\n_map_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLayer(layerKantor);\n$(\".kantor\").on(\"click\", function () {\n  console.log(_map_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLayers());\n  layerKantor.setVisible(!layerKantor.getVisible());\n});\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/addpois.js?");

/***/ })

}]);