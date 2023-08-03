"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["measure"],{

/***/ "./resources/views/webgis/js/src/measure.js":
/*!**************************************************!*\
  !*** ./resources/views/webgis/js/src/measure.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addInteraction\": () => (/* binding */ addInteraction),\n/* harmony export */   \"draw\": () => (/* binding */ draw),\n/* harmony export */   \"modify\": () => (/* binding */ modify),\n/* harmony export */   \"style\": () => (/* binding */ style),\n/* harmony export */   \"vector_source_measure\": () => (/* binding */ vector_source_measure)\n/* harmony export */ });\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./resources/views/webgis/js/src/map.js\");\n/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/interaction */ \"./node_modules/ol/interaction/Modify.js\");\n/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/layer */ \"./node_modules/ol/layer/Vector.js\");\n/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/source */ \"./node_modules/ol/source/Vector.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Style.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Fill.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Stroke.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Circle.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/Text.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style */ \"./node_modules/ol/style/RegularShape.js\");\n/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/interaction */ \"./node_modules/ol/interaction/Draw.js\");\n/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/geom */ \"./node_modules/ol/geom/LineString.js\");\n/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/geom */ \"./node_modules/ol/geom/Point.js\");\n/* harmony import */ var ol_sphere__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/sphere */ \"./node_modules/ol/sphere.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n// measure\nvar vector_source_measure = new ol_source__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar style = new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  fill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    color: \"rgba(255, 255, 255, 0.2)\"\n  }),\n  stroke: new ol_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n    color: \"rgba(0, 0, 0, 0.5)\",\n    width: 2\n  }),\n  image: new ol_style__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n    radius: 5,\n    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      color: \"rgba(0, 0, 0, 0.7)\"\n    }),\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(255, 255, 255, 0.2)\"\n    })\n  })\n});\nvar labelStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  text: new ol_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    font: \"14px Calibri,sans-serif\",\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(255, 255, 255, 1)\"\n    }),\n    backgroundFill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(0, 0, 0, 0.7)\"\n    }),\n    padding: [3, 3, 3, 3],\n    textBaseline: \"bottom\",\n    offsetY: -15\n  }),\n  image: new ol_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n    radius: 8,\n    points: 3,\n    angle: Math.PI,\n    displacement: [0, 10],\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(0, 0, 0, 0.7)\"\n    })\n  })\n});\nvar tipStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  text: new ol_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    font: \"12px Calibri,sans-serif\",\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(255, 255, 255, 1)\"\n    }),\n    backgroundFill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(0, 0, 0, 0.4)\"\n    }),\n    padding: [2, 2, 2, 2],\n    textAlign: \"left\",\n    offsetX: 15\n  })\n});\nvar modifyStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  image: new ol_style__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n    radius: 5,\n    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      color: \"rgba(0, 0, 0, 0.7)\"\n    }),\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(0, 0, 0, 0.4)\"\n    })\n  }),\n  text: new ol_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    text: \"Drag to modify\",\n    font: \"12px Calibri,sans-serif\",\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(255, 255, 255, 1)\"\n    }),\n    backgroundFill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(0, 0, 0, 0.7)\"\n    }),\n    padding: [2, 2, 2, 2],\n    textAlign: \"left\",\n    offsetX: 15\n  })\n});\nvar segmentStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  text: new ol_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    font: \"12px Calibri,sans-serif\",\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(255, 255, 255, 1)\"\n    }),\n    backgroundFill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(0, 0, 0, 0.4)\"\n    }),\n    padding: [2, 2, 2, 2],\n    textBaseline: \"bottom\",\n    offsetY: -12\n  }),\n  image: new ol_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n    radius: 6,\n    points: 3,\n    angle: Math.PI,\n    displacement: [0, 8],\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      color: \"rgba(0, 0, 0, 0.4)\"\n    })\n  })\n});\nvar segmentStyles = [segmentStyle];\nvar formatLength = function formatLength(line) {\n  var length = (0,ol_sphere__WEBPACK_IMPORTED_MODULE_8__.getLength)(line);\n  var output;\n  if (length > 100) {\n    output = Math.round(length / 1000 * 100) / 100 + \" km\";\n  } else {\n    output = Math.round(length * 100) / 100 + \" m\";\n  }\n  return output;\n};\nvar formatArea = function formatArea(polygon) {\n  var area = (0,ol_sphere__WEBPACK_IMPORTED_MODULE_8__.getArea)(polygon);\n  var output;\n  if (area > 10000) {\n    output = Math.round(area / 1000000 * 100) / 100 + \" km\\xB2\";\n  } else {\n    output = Math.round(area * 100) / 100 + \" m\\xB2\";\n  }\n  return output;\n};\nvar modify = new ol_interaction__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n  source: vector_source_measure,\n  style: modifyStyle\n});\nvar tipPoint;\nfunction styleFunction(feature, segments, drawType, tip) {\n  var styles = [style];\n  var geometry = feature.getGeometry();\n  var type = geometry.getType();\n  var point, label, line;\n  if (!drawType || drawType === type) {\n    if (type === \"Polygon\") {\n      point = geometry.getInteriorPoint();\n      label = formatArea(geometry);\n      line = new ol_geom__WEBPACK_IMPORTED_MODULE_10__[\"default\"](geometry.getCoordinates()[0]);\n    } else if (type === \"LineString\") {\n      point = new ol_geom__WEBPACK_IMPORTED_MODULE_11__[\"default\"](geometry.getLastCoordinate());\n      label = formatLength(geometry);\n      line = geometry;\n    }\n  }\n  if (segments && line) {\n    var count = 0;\n    line.forEachSegment(function (a, b) {\n      var segment = new ol_geom__WEBPACK_IMPORTED_MODULE_10__[\"default\"]([a, b]);\n      var label = formatLength(segment);\n      if (segmentStyles.length - 1 < count) {\n        segmentStyles.push(segmentStyle.clone());\n      }\n      var segmentPoint = new ol_geom__WEBPACK_IMPORTED_MODULE_11__[\"default\"](segment.getCoordinateAt(0.5));\n      segmentStyles[count].setGeometry(segmentPoint);\n      segmentStyles[count].getText().setText(label);\n      styles.push(segmentStyles[count]);\n      count++;\n    });\n  }\n  if (label) {\n    labelStyle.setGeometry(point);\n    labelStyle.getText().setText(label);\n    styles.push(labelStyle);\n  }\n  if (tip && type === \"Point\" && !modify.getOverlay().getSource().getFeatures().length) {\n    tipPoint = geometry;\n    tipStyle.getText().setText(tip);\n    styles.push(tipStyle);\n  }\n  return styles;\n}\nnew ol_layer__WEBPACK_IMPORTED_MODULE_12__[\"default\"]({\n  map: _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  source: vector_source_measure,\n  style: function style(feature) {\n    return styleFunction(feature, true);\n  }\n});\nvar draw;\n_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addInteraction(modify);\nfunction addInteraction(type) {\n  var drawType = type;\n  var activeTip = \"Click to continue drawing the \" + (drawType === \"Polygon\" ? \"polygon\" : \"line\");\n  var idleTip = \"Click to start measuring\";\n  var tip = idleTip;\n  draw = new ol_interaction__WEBPACK_IMPORTED_MODULE_13__[\"default\"]({\n    source: vector_source_measure,\n    type: drawType,\n    style: function style(feature) {\n      return styleFunction(feature, true, drawType, tip);\n    }\n  });\n  draw.on(\"drawstart\", function () {\n    vector_source_measure.clear();\n    modify.setActive(false);\n    tip = activeTip;\n  });\n  draw.on(\"drawend\", function () {\n    modifyStyle.setGeometry(tipPoint);\n    modify.setActive(true);\n    _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].once(\"pointermove\", function () {\n      modifyStyle.setGeometry();\n    });\n    tip = idleTip;\n  });\n  modify.setActive(true);\n  _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addInteraction(draw);\n}\n$(\"#distance\").on(\"click\", function () {\n  //   disableAllFunction($(this));\n  _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeInteraction(draw);\n  addInteraction(\"LineString\");\n});\n$(\"#area\").on(\"click\", function () {\n  //   disableAllFunction($(this));\n  _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeInteraction(draw);\n  addInteraction(\"Polygon\");\n});\n$(\"#clear\").on(\"click\", function () {\n  //   disableAllFunction($(this));\n  _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeInteraction(draw);\n  vector_source_measure.clear();\n  modify.setActive(false);\n});\n\n// end measure\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/measure.js?");

/***/ })

}]);