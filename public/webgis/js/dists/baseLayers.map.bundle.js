"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["baseLayers"],{

/***/ "./resources/views/webgis/js/src/baseLayers.js":
/*!*****************************************************!*\
  !*** ./resources/views/webgis/js/src/baseLayers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer */ \"./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer */ \"./node_modules/ol/layer/Group.js\");\n/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source */ \"./node_modules/ol/source/OSM.js\");\n/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source */ \"./node_modules/ol/source/XYZ.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./resources/views/webgis/js/src/map.js\");\n/* harmony import */ var _basemaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basemaps */ \"./resources/views/webgis/js/src/basemaps.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nvar templateHtml = function templateHtml(data) {\n  return \"\\n    <div class=\\\"\".concat(data.more ? \"more \" : \"\", \"layer\\\" id=\\\"\").concat(data.id, \"\\\">\\n        <div class=\\\"layer-icon\\\" style=\\\"background-image: url('\").concat(data.imgUrl, \"')\\\"></div>\\n        <span class=\\\"layer-name\\\">\").concat(data.name, \"</span>\\n    </div>\\n\");\n};\nvar interpolateUrl = function interpolateUrl(string, values) {\n  return string.replace(/{(.*?)}/g, function (match, offset) {\n    return values[offset];\n  });\n};\nvar mainLayers = \"\";\nvar moreLayers = \"\";\nvar XYZValue = {\n  x: 106,\n  y: 65,\n  z: 7\n};\njquery__WEBPACK_IMPORTED_MODULE_2___default()(\".baselayer-switcher\").css({\n  \"background-image\": \"url('\".concat(interpolateUrl(_basemaps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0].source.url, XYZValue), \"')\")\n});\n_basemaps__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach(function (data, id) {\n  if (id < 3) {\n    mainLayers += templateHtml({\n      more: false,\n      id: data.title,\n      name: data.name,\n      imgUrl: interpolateUrl(data.source.url, XYZValue)\n    });\n  }\n  moreLayers += templateHtml({\n    more: true,\n    id: data.title,\n    name: data.name,\n    imgUrl: interpolateUrl(data.source.url, XYZValue)\n  });\n});\njquery__WEBPACK_IMPORTED_MODULE_2___default()(\".baselayer-switcher .base-choice\").prepend(mainLayers);\njquery__WEBPACK_IMPORTED_MODULE_2___default()(\".baselayer-switcher .more-layers-wrapper .flex\").prepend(moreLayers);\n\n/*\n * ------------------------------------------------------------------------------\n * Load Base Layers\n * ------------------------------------------------------------------------------\n */\n\nvar basemapList = _basemaps__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (el, i) {\n  var tile = new ol_layer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    title: el.title,\n    visible: false\n  });\n  if (el.source.type == \"OSM\") {\n    if (el.source.url == \"\") {\n      tile.setSource(new ol_source__WEBPACK_IMPORTED_MODULE_4__[\"default\"]());\n    } else {\n      tile.setSource(new ol_source__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n        url: el.source.url\n      }));\n    }\n  }\n  if (el.source.type == \"XYZ\") {\n    tile.setSource(new ol_source__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n      url: el.source.url\n    }));\n  }\n  if (i == 0) {\n    tile.setVisible(true);\n  }\n  return tile;\n});\n\n// Layer Group\nvar baseLayerGroup = new ol_layer__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n  layers: basemapList\n});\n_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLayer(baseLayerGroup);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseLayerGroup);\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/baseLayers.js?");

/***/ }),

/***/ "./resources/views/webgis/js/src/basemaps.js":
/*!***************************************************!*\
  !*** ./resources/views/webgis/js/src/basemaps.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n * ---------------------------------------------------\n * This file is using Node js to generate JSON\n * ---------------------------------------------------\n */\n\nvar basemaps = [{\n  name: \"G-Street\",\n  title: \"GoogleStreet\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://mt0.google.com/vt/lyrs=m,transit,traffic&hl=id&x={x}&y={y}&z={z}\"\n  }\n}, {\n  name: \"G-Satellite\",\n  title: \"GoogleSatellite\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://mt0.google.com/vt/lyrs=y,transit,traffic&hl=id&x={x}&y={y}&z={z}\"\n  }\n}, {\n  name: \"Standart\",\n  title: \"OSMStandart\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://tile.openstreetmap.org/{z}/{x}/{y}.png\"\n  }\n}, {\n  name: \"MT-Street\",\n  title: \"MTStreet\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=ruaIHZFS89lH0NlSL7QW\"\n  }\n}, {\n  name: \"MT-Satellite\",\n  title: \"MTSatellite\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=ruaIHZFS89lH0NlSL7QW\"\n  }\n}, {\n  name: \"OpenTopoMap\",\n  title: \"OpenTopoMap\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://tile.opentopomap.org/{z}/{x}/{y}.png\"\n  }\n}, {\n  name: \"Humantarian\",\n  title: \"OSMHumantarian\",\n  source: {\n    type: \"OSM\",\n    url: \"https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png\"\n  }\n}, {\n  name: \"Stamen\",\n  title: \"StamenTerrain\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg\"\n  }\n}, {\n  name: \"Toner\",\n  title: \"MTToner\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=ruaIHZFS89lH0NlSL7QW\"\n  }\n}, {\n  name: \"ESRI-Standard\",\n  title: \"ESRIStandard\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}\"\n  }\n}, {\n  name: \"ESRI-Topo\",\n  title: \"ESRITopo\",\n  source: {\n    type: \"XYZ\",\n    url: \"http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}\"\n  }\n}, {\n  name: \"ESRI-Satellite\",\n  title: \"ESRISatellite\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}\"\n  }\n}, {\n  name: \"Waze\",\n  title: \"Waze\",\n  source: {\n    type: \"XYZ\",\n    url: \"https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png\"\n  }\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basemaps);\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/basemaps.js?");

/***/ })

}]);