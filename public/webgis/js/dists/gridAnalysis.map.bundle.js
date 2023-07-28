"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["gridAnalysis"],{

/***/ "./resources/views/webgis/js/src/gridAnalysis.js":
/*!*******************************************************!*\
  !*** ./resources/views/webgis/js/src/gridAnalysis.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addInteraction\": () => (/* binding */ addInteraction),\n/* harmony export */   \"draw\": () => (/* binding */ draw),\n/* harmony export */   \"select\": () => (/* binding */ select),\n/* harmony export */   \"source\": () => (/* binding */ source)\n/* harmony export */ });\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./resources/views/webgis/js/src/map.js\");\n/* harmony import */ var ol_proj_proj4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/proj/proj4 */ \"./node_modules/ol/proj/proj4.js\");\n/* harmony import */ var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/interaction/Draw */ \"./node_modules/ol/interaction/Draw.js\");\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/proj */ \"./node_modules/ol/proj.js\");\n/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/layer */ \"./node_modules/ol/layer/Vector.js\");\n/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source */ \"./node_modules/ol/source/Vector.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Text.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Fill.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Stroke.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Style.js\");\n/* harmony import */ var ol_ext_source_GridBin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol-ext/source/GridBin */ \"./node_modules/ol-ext/source/GridBin.js\");\n/* harmony import */ var _measure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./measure */ \"./resources/views/webgis/js/src/measure.js\");\n/* harmony import */ var ol_interaction_Select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/interaction/Select */ \"./node_modules/ol/interaction/Select.js\");\n/* harmony import */ var ol_Overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/Overlay */ \"./node_modules/ol/Overlay.js\");\n/* harmony import */ var _functionButtonControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionButtonControl */ \"./resources/views/webgis/js/src/functionButtonControl.js\");\n/* harmony import */ var _circleanalysis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./circleanalysis */ \"./resources/views/webgis/js/src/circleanalysis.js\");\n/* harmony import */ var ol_format_WKT__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/format/WKT */ \"./node_modules/ol/format/WKT.js\");\n/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/format/GeoJSON */ \"./node_modules/ol/format/GeoJSON.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// // Define projection extent\n(0,ol_proj_proj4__WEBPACK_IMPORTED_MODULE_6__.register)(proj4);\n\n// Create Funtion to add Features point\n// export function addFeatures(geojson) {\n//     source.addFeatures(geojson);\n//     return console.log(geojson);\n//     let ssize = 20; // seed size\n//     let ext = map.getView().calculateExtent();\n//     let dx = ext[2] - ext[0];\n//     let dy = ext[3] - ext[1];\n//     let dl = Math.min(dx, dy);\n//     let features = [];\n//     for (let i = 0; i < geojson.length / ssize; ++i) {\n//         let seed = [ext[0] + dx * Math.random(), ext[1] + dy * Math.random()];\n//         for (let j = 0; j < ssize; j++) {\n//             // let f = new Feature(\n//             //     new Point([\n//             //         seed[0] + (dl / 10) * Math.random(),\n//             //         seed[1] + (dl / 10) * Math.random(),\n//             //     ])\n//             // );\n//             let f = geojson[i];\n//             features.push(f);\n//         }\n//     }\n//     source.clear(true);\n//     source.addFeatures(features);\n//     reset();\n// }\n\nvar source = new ol_source__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({});\n\n// Interaction to move the source features\n// const modify = new Modify({ source: source });\n// modify.setActive(false);\n// map.addInteraction(modify);\n\nvar layerSource = new ol_layer__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n  source: source,\n  visible: false\n});\n_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLayer(layerSource);\nvar labelStyle = new ol_style__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n  font: '18px Calibri,sans-serif',\n  overflow: true,\n  fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n    color: '#fff'\n  }),\n  stroke: new ol_style__WEBPACK_IMPORTED_MODULE_11__[\"default\"]({\n    color: '#000',\n    width: 1\n  })\n});\nvar min, max;\n\n// style for Grid color and add Text Style\nvar styleFn = function styleFn(f, res) {\n  var color;\n  var s = f.get('features').length;\n  if (s > min + 2 * (max - min) / 3) color = [136, 0, 0, 0.5];else if (s > min + (max - min) / 3) color = [255, 165, 0, 0.5];else color = [0, 136, 0, 0.5];\n  var style = new ol_style__WEBPACK_IMPORTED_MODULE_12__[\"default\"]({\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n      color: color\n    }),\n    text: labelStyle\n  });\n  style.getText().setText(s.toString());\n  return [style];\n};\n\n// The Grid layer\nvar grid = new ol_layer__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n  minZoom: 14,\n  maxZoom: 20,\n  style: styleFn,\n  source: new ol_ext_source_GridBin__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    source: source\n  }),\n  declutter: true\n});\n_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLayer(grid);\n\n// Create Bin\nfunction calcMinMax() {\n  max = 0;\n  min = Infinity;\n  grid.getSource().getFeatures().forEach(function (f) {\n    var nb = f.get('features').length;\n    if (nb > max) max = nb;\n    if (nb < min) min = nb;\n  });\n}\nfunction reset() {\n  grid.getSource().setSize(0.003);\n  calcMinMax();\n}\n// add features\n// addFeatures(0);\n\n// function to setProjection\nfunction setProjection(p) {\n  var ex = _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().calculateExtent();\n  var p1 = _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().getCenter();\n  var p2 = [p[0], p[1] + 1];\n  var p01 = (0,ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)(p1, _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().getProjection(), grid.getSource().get('gridProjection'));\n  var p02 = (0,ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)(p2, _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().getProjection(), grid.getSource().get('gridProjection'));\n  grid.getSource().set('gridProjection', 'EPSG:' + p);\n  var p11 = (0,ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)(p1, _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().getProjection(), grid.getSource().get('gridProjection'));\n  var p12 = (0,ol_proj__WEBPACK_IMPORTED_MODULE_1__.transform)(p2, _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().getProjection(), grid.getSource().get('gridProjection'));\n  reset();\n}\nsetProjection(4326);\nvar wktFeatureGeom;\n\n// function to get all poi from api\nfunction gridAnalysisKriteria() {\n  getGridFeature(wktFeatureGeom, kriterias);\n}\nvar pois = [];\nvar geojson = [];\n\n// function to get feature from api\nfunction getGridFeature(wkt, kriterias) {\n  $.ajax({\n    type: 'get',\n    url: 'http://localhost:7070/geoserver/ne/wms',\n    data: {\n      kriterias: kriterias,\n      wkt: wkt\n    },\n    contentType: false,\n    dataType: 'json',\n    success: function success(data) {\n      if (data.features) {\n        geojson = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_13__[\"default\"]().readFeatures(data, {\n          dataProjection: 'EPSG:4021',\n          featureProjection: 'EPSG:3857'\n        });\n        pois = data.features;\n        // selectPopup(pois);\n        source.clear(true);\n        source.addFeatures(geojson);\n      } else {\n        console.log('tidak ada yang dapat di analisis');\n      }\n    },\n    error: function error() {\n      console.log('Failed');\n    }\n  });\n}\n\n// Function Draw Point\nvar draw;\n\n// Function to add interaction\nfunction addInteraction() {\n  draw = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_14__[\"default\"]({\n    // source: source,\n    type: 'Polygon',\n    style: _measure__WEBPACK_IMPORTED_MODULE_3__.style\n  });\n  draw.on('drawend', function (e) {\n    var format = new ol_format_WKT__WEBPACK_IMPORTED_MODULE_15__[\"default\"]();\n    wktFeatureGeom = format.writeGeometry(e.feature.getGeometry(), {\n      dataProjection: 'EPSG:4326',\n      featureProjection: 'EPSG:3857'\n    });\n    _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeInteraction(draw);\n    // $('.collapse').collapse('show');\n    gridAnalysisKriteria();\n  });\n  source.clear(true);\n  _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addInteraction(draw);\n}\nvar container = document.getElementById('popup-grid');\nvar overlayGrid = new ol_Overlay__WEBPACK_IMPORTED_MODULE_16__[\"default\"]({\n  element: container\n});\n_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addOverlay(overlayGrid);\n_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('click', showInfo);\n\n// Function for check poi on each grid\nfunction showInfo(event) {\n  var poi = [];\n  var features = _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFeaturesAtPixel(event.pixel);\n  if (features.length == 0) {\n    return;\n  }\n  var properties = features[0].getProperties();\n  var propfeatures = properties.features;\n  $.each(propfeatures, function (i, data) {\n    poi.push(data);\n  });\n  selectPopup(poi);\n}\n\n// Function for DOM popup data from api when popup grid selected\nfunction selectPopup(data) {\n  var kriteria = [];\n  $.each(data, function (i, data) {\n    kriteria.push(data.values_.fclass);\n  });\n  var countMap = new Map();\n  for (var _i = 0, _kriteria = kriteria; _i < _kriteria.length; _i++) {\n    var number = _kriteria[_i];\n    if (countMap.has(number)) {\n      countMap.set(number, countMap.get(number) + 1);\n    } else {\n      countMap.set(number, 1);\n    }\n  }\n  function getUniqueValues(arr) {\n    return arr.filter(function (value, index, self) {\n      return self.indexOf(value) === index;\n    });\n  }\n  var uniqueNumbers = getUniqueValues(kriteria);\n  $('#list-poi-select').empty();\n  return $.each(uniqueNumbers, function (i, data) {\n    $('#list-poi-select').append(\"<tr>\\n                <td class=\\\"py-1 my-0 col-9\\\">\".concat(data, \"</td>\\n                <td class=\\\"py-1 my-0 col-auto\\\">\").concat(countMap.get(data), \"</td>\\n            </tr>\"));\n  });\n}\n\n// Style for select function\nvar styleSelect = function styleSelect(f, res) {\n  var color;\n  var s = f.get('features').length;\n  if (s > min + 2 * (max - min) / 3) color = [136, 0, 0, 0.5];else if (s > min + (max - min) / 3) color = [255, 165, 0, 0.5];else color = [0, 136, 0, 0.5];\n  var style = new ol_style__WEBPACK_IMPORTED_MODULE_12__[\"default\"]({\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n      color: color\n    }),\n    text: labelStyle,\n    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_11__[\"default\"]({\n      color: 'rgba(255, 255, 255, 255)',\n      width: 3\n    })\n  });\n  style.getText().setText(s.toString());\n  return [style];\n};\nvar select = new ol_interaction_Select__WEBPACK_IMPORTED_MODULE_17__[\"default\"]({\n  style: styleSelect,\n  layers: [grid]\n});\n\n// Event Select on each feature\nselect.on('select', function (e) {\n  if (e.selected.length) {\n    var coordinate = e.mapBrowserEvent.coordinate;\n    overlayGrid.setPosition(coordinate);\n    // selectPopup(geojson);\n    $('#popup-grid').toggleClass('d-none', false);\n  } else {\n    overlayGrid.setPosition(undefined);\n    $('#popup-grid').toggleClass('d-none', true);\n  }\n});\nvar closer = document.getElementById('popup-closer-grid');\ncloser.onclick = function () {\n  overlayGrid.setPosition(undefined);\n  closer.blur();\n  $('#popup-grid').toggleClass('d-none', true);\n  return false;\n};\n\n// $(\"#gridAnalysis\").on(\"click\", function() {\n// disableAllFunction($(this));\n//   map.removeInteraction(draw);\n//   map.addInteraction(select);\n//   addInteraction();\n// });\n\n// $(\"#clearAnalysis\").on(\"click\", function() {\n//   disableAllFunction($(this));\n//   map.removeInteraction(drawCircle);\n//   source_analysis.clear();\n//   modifyCircleAnalysis.setActive(false);\n//   map.removeInteraction(draw);\n//   addFeatures(0);\n//   source.clear();\n//   map.removeInteraction(select);\n// });\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/gridAnalysis.js?");

/***/ })

}]);