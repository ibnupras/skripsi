"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["geoLocation"],{

/***/ "./resources/views/webgis/js/src/geolocation.js":
/*!******************************************************!*\
  !*** ./resources/views/webgis/js/src/geolocation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./resources/views/webgis/js/src/map.js\");\n/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol */ \"./node_modules/ol/Geolocation.js\");\n/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol */ \"./node_modules/ol/Feature.js\");\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/proj */ \"./node_modules/ol/proj.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Style.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Circle.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Fill.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Stroke.js\");\n/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom */ \"./node_modules/ol/geom/Point.js\");\n/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer */ \"./node_modules/ol/layer/Vector.js\");\n/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/source */ \"./node_modules/ol/source/Vector.js\");\n/*\r\n * ---------------------------------------------------------------\r\n * Geolocation\r\n * ---------------------------------------------------------------\r\n */\n\n\n\n\n\n\n\n\n\n//   Start Geolocation\n\nvar geolocation = new ol__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  // enableHighAccuracy must be set to true to have the heading value.\n  trackingOptions: {\n    enableHighAccuracy: true\n  },\n  projection: _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().getProjection()\n});\n\n// Enable set tracking when windows on load (status = disable) change into when button on click set tracking will true with time out\n// $(document).ready(function () {\n//   geolocation.setTracking(true);\n// });\n\n// Function for zoom to user position\nfunction viewAnimate(coordinates) {\n  _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().animate({\n    center: coordinates,\n    zoom: 15,\n    duration: 1000\n  });\n}\n// Event Handle when Button click\nvar geolocationBtn = document.getElementById('geolocation');\ngeolocationBtn.addEventListener('click', function () {\n  // Enable Set tracking when button clicked\n  var coordinates = geolocation.getPosition();\n  if (coordinates === undefined) {\n    geolocation.setTracking(this.click);\n    navigator.geolocation.getCurrentPosition(function (position) {\n      var coordinates = (0,ol_proj__WEBPACK_IMPORTED_MODULE_1__.fromLonLat)([position.coords.longitude, position.coords.latitude]);\n      viewAnimate(coordinates);\n    });\n  } else if (coordinates.length > 0) {\n    viewAnimate(coordinates);\n  }\n});\n\n//   Get Accuracy feature from geolocation (status = disabled) because when using this function the circle style on maps will appear\n// const accuracyFeature = new Feature();\n// geolocation.on(\"change:accuracyGeometry\", function() {\n//   accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());\n// });\n\n//   Add Point style when button clicked\nvar positionFeature = new ol__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\npositionFeature.setStyle(new ol_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  image: new ol_style__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n    radius: 6,\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      color: '#3399CC'\n    }),\n    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n      color: '#fff',\n      width: 2\n    })\n  })\n}));\n\n// Get coordinates from geolocation\ngeolocation.on('change:position', function () {\n  var coordinates = geolocation.getPosition();\n  positionFeature.setGeometry(coordinates ? new ol_geom__WEBPACK_IMPORTED_MODULE_8__[\"default\"](coordinates) : null);\n});\n\n//   Adding point and accuracy to layer\nnew ol_layer__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n  map: _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  minZoom: 13,\n  maxZoom: 20,\n  source: new ol_source__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n    features: [\n    //   accuracyFeature,\n    positionFeature]\n  })\n});\n\n//   End Geolocation\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/geolocation.js?");

/***/ })

}]);