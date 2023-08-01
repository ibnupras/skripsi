"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["addinformation"],{

/***/ "./resources/views/webgis/js/src/addinformation.js":
/*!*********************************************************!*\
  !*** ./resources/views/webgis/js/src/addinformation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer */ \"./node_modules/ol/layer/Vector.js\");\n/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source */ \"./node_modules/ol/source/Vector.js\");\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ \"./node_modules/ol/proj.js\");\n/* harmony import */ var ol_Overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Overlay */ \"./node_modules/ol/Overlay.js\");\n/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style/Style */ \"./node_modules/ol/style/Style.js\");\n/* harmony import */ var ol_style_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Icon */ \"./node_modules/ol/style/Icon.js\");\n/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/geom/Point */ \"./node_modules/ol/geom/Point.js\");\n/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Feature */ \"./node_modules/ol/Feature.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./resources/views/webgis/js/src/map.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\n\n\n\nfetch('http://127.0.0.1:8000/api/informasi', {\n  method: 'GET',\n  headers: {\n    'Content-Type': 'application/json',\n    'X-CSRF-TOKEN': '{{ csrf_token() }}'\n  }\n}).then(function (response) {\n  return response.json();\n}).then(function (_ref) {\n  var data = _ref.data;\n  data.forEach(function (item) {\n    var infoPoint = new ol_Feature__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      geometry: new ol_geom_Point__WEBPACK_IMPORTED_MODULE_4__[\"default\"]((0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.fromLonLat)([item.longitude, item.latitude]))\n    });\n    infoPoint.setProperties({\n      id: item.id,\n      judul: item.judul,\n      deskripsi: item.deskripsi\n    });\n    infoLayer.getSource().addFeature(infoPoint);\n  });\n})[\"catch\"](function (error) {\n  console.error('Error:', error);\n});\nvar infoLayer = new ol_layer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n  source: new ol_source__WEBPACK_IMPORTED_MODULE_6__[\"default\"](),\n  style: function style(feature) {\n    return new ol_style_Style__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n      image: new ol_style_Icon__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n        src: 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"><circle cx=\"10\" cy=\"10\" r=\"8\" fill=\"red\" stroke=\"white\" stroke-width=\"2\"/></svg>'),\n        imgSize: [20, 20]\n      })\n    });\n  }\n});\n_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addLayer(infoLayer);\nvar isInfoModeActive = false;\nvar selectedFeature = null;\nfunction activateInfoMode() {\n  isInfoModeActive = true;\n}\nfunction deactivateInfoMode() {\n  isInfoModeActive = false;\n}\nfunction addInfoPoint(longitude, latitude) {\n  if (isInfoModeActive) {\n    var coordinate = (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.fromLonLat)([longitude, latitude]);\n    var infoPopup = new ol_Overlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n      position: coordinate,\n      positioning: 'bottom-center',\n      element: document.createElement('div'),\n      stopEvent: true\n    });\n    var content = \"<div class=\\\"popup-container\\\" id=\\\"popups-container\\\">\\n        <div class=\\\"card\\\">\\n          <div class=\\\"card-body\\\">\\n            <span class=\\\"popup-close cancel\\\" id=\\\"close\\\">&times;</span>\\n            <form>\\n              <div class=\\\"form-group\\\">\\n                <label for=\\\"judul\\\">Judul:</label>\\n                <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"judul\\\">\\n              </div>\\n              <div class=\\\"form-group\\\">\\n                <label for=\\\"deskripsi\\\">Deskripsi:</label>\\n                <textarea class=\\\"form-control\\\" id=\\\"deskripsi\\\"></textarea>\\n              </div>\\n              <button type=\\\"button\\\" class=\\\"btn btn-primary\\\" id=\\\"save\\\">Simpan</button>\\n            </form>\\n          </div>\\n        </div>\\n      </div>\";\n    infoPopup.getElement().innerHTML = content;\n    _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addOverlay(infoPopup);\n\n    // Tambahkan event listener untuk tombol Simpan\n    document.getElementById('save').addEventListener('click', function () {\n      saveInfoPoint(longitude, latitude);\n    });\n  }\n}\nfunction saveInfoPoint(longitude, latitude) {\n  var judul = document.getElementById('judul').value;\n  var deskripsi = document.getElementById('deskripsi').value;\n  var data = {\n    judul: judul,\n    deskripsi: deskripsi,\n    latitude: latitude,\n    longitude: longitude\n  };\n  fetch('http://127.0.0.1:8000/api/simpan-informasi', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'X-CSRF-TOKEN': '{{ csrf_token() }}'\n    },\n    body: JSON.stringify(data)\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    console.log(data.message);\n    var infoPoint = new ol_Feature__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      geometry: new ol_geom_Point__WEBPACK_IMPORTED_MODULE_4__[\"default\"]((0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.fromLonLat)([longitude, latitude]))\n    });\n    infoPoint.setProperties({\n      id: data.id,\n      judul: judul,\n      deskripsi: deskripsi\n    });\n    infoLayer.getSource().addFeature(infoPoint);\n  })[\"catch\"](function (error) {\n    console.error('Error:', error);\n  });\n\n  // Hapus popup setelah menyimpan informasi\n  deactivateInfoMode();\n  _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getOverlays().clear();\n}\n_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('click', function (event) {\n  var coordinate = (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.toLonLat)(event.coordinate);\n  if (isInfoModeActive) {\n    addInfoPoint(coordinate[0], coordinate[1]);\n  } else {\n    var feature = _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEachFeatureAtPixel(event.pixel, function (feature) {\n      return feature;\n    });\n    if (feature && infoLayer.getSource().getFeatures().includes(feature)) {\n      selectedFeature = feature;\n      var _coordinate = feature.getGeometry().getCoordinates();\n      var judul = feature.get('judul');\n      var deskripsi = feature.get('deskripsi');\n      var content = \"<div class=\\\"popup-container\\\" id=\\\"popup-hasil\\\">\\n          <div class=\\\"card\\\">\\n            <div class=\\\"card-body\\\">\\n              <span class=\\\"popup-close\\\" data-id=\\\"\".concat(feature.get('id'), \"\\\" >&times;</span>\\n              <p><strong>\").concat(judul, \"</strong></p>\\n              <p>\").concat(deskripsi, \"</p>\\n              <button type=\\\"button\\\" class=\\\"btn btn-danger\\\" id=\\\"\\\">Hapus</button>\\n              </div>\\n            </div>\\n            </div>\");\n      var popup = new ol_Overlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n        position: _coordinate,\n        positioning: 'bottom-center',\n        element: document.createElement('div'),\n        stopEvent: true\n      });\n      popup.getElement().innerHTML = content;\n      _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addOverlay(popup);\n    }\n  }\n});\ndocument.getElementById('addinformation').addEventListener('click', function () {\n  activateInfoMode();\n});\n\n// document.getElementById('popup-container').addEventListener('click', function (event) {\n//   const target = event.target;\n//   if (target.id === 'addinformation') {\n//     activateInfoMode();\n//   } else if (target.id === 'save') {\n//     saveInfoPoint();\n//     console.log('save');\n//   } else if (target.id === 'close') {\n//     cancelInfoPoint();\n//   }\n// });\n\n$(document).on('click', '#popup-hasil .popup-close', function () {\n  console.log(infoLayer);\n  deactivateInfoMode();\n  _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getOverlays().clear();\n});\n$(document).on('click', '#popup-hasil button', function () {\n  if (selectedFeature) {\n    var id = selectedFeature.get('id');\n    console.log(id);\n    infoLayer.getSource().removeFeature(selectedFeature);\n    _map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getOverlays().clear();\n    fetch('http://127.0.0.1:8000/api/hapus-informasi', {\n      method: 'delete',\n      headers: {\n        'Content-Type': 'application/json',\n        'X-CSRF-TOKEN': '{{ csrf_token() }}'\n      },\n      body: JSON.stringify({\n        id: id\n      })\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {})[\"catch\"](function (error) {\n      console.error('Error:', error);\n    });\n  }\n});\n// document.getElementById('popup-hasil').addEventListener('click', function (event) {\n//   const target = event.target;\n//   if (target.id === 'cancel') {\n//     removeInfoPoint();\n//   }\n// });\n\n//# sourceURL=webpack:///./resources/views/webgis/js/src/addinformation.js?");

/***/ })

}]);