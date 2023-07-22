import map from './map';
import { register } from 'ol/proj/proj4';
import Draw from 'ol/interaction/Draw';
import { transform } from 'ol/proj';
import { Vector as layerVector } from 'ol/layer';
import { Vector as sourceVector } from 'ol/source';
import { Style, Fill, Text, Stroke } from 'ol/style';
import GridBin from 'ol-ext/source/GridBin';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { style } from './measure';
import Select from 'ol/interaction/Select';
import Overlay from 'ol/Overlay';
import { disableAllFunction } from './functionButtonControl';
import {
  modifyCircleAnalysis,
  source_analysis,
  drawCircle,
} from './circleanalysis';
import WKT from 'ol/format/WKT';
import GeoJSON from 'ol/format/GeoJSON';
import { kriterias } from './panelAnalysis';

// // Define projection extent
register(proj4);

// Create Funtion to add Features point
// export function addFeatures(geojson) {
//     source.addFeatures(geojson);
//     return console.log(geojson);
//     let ssize = 20; // seed size
//     let ext = map.getView().calculateExtent();
//     let dx = ext[2] - ext[0];
//     let dy = ext[3] - ext[1];
//     let dl = Math.min(dx, dy);
//     let features = [];
//     for (let i = 0; i < geojson.length / ssize; ++i) {
//         let seed = [ext[0] + dx * Math.random(), ext[1] + dy * Math.random()];
//         for (let j = 0; j < ssize; j++) {
//             // let f = new Feature(
//             //     new Point([
//             //         seed[0] + (dl / 10) * Math.random(),
//             //         seed[1] + (dl / 10) * Math.random(),
//             //     ])
//             // );
//             let f = geojson[i];
//             features.push(f);
//         }
//     }
//     source.clear(true);
//     source.addFeatures(features);
//     reset();
// }

export const source = new sourceVector({});

// Interaction to move the source features
// const modify = new Modify({ source: source });
// modify.setActive(false);
// map.addInteraction(modify);

const layerSource = new layerVector({ source: source, visible: false });
map.addLayer(layerSource);

const labelStyle = new Text({
  font: '18px Calibri,sans-serif',
  overflow: true,
  fill: new Fill({
    color: '#fff',
  }),
  stroke: new Stroke({
    color: '#000',
    width: 1,
  }),
});

let min, max;

// style for Grid color and add Text Style
let styleFn = function (f, res) {
  let color;
  let s = f.get('features').length;
  if (s > min + (2 * (max - min)) / 3) color = [136, 0, 0, 0.5];
  else if (s > min + (max - min) / 3) color = [255, 165, 0, 0.5];
  else color = [0, 136, 0, 0.5];
  let style = new Style({
    fill: new Fill({ color: color }),
    text: labelStyle,
  });
  style.getText().setText(s.toString());
  return [style];
};

// The Grid layer
const grid = new layerVector({
  minZoom: 14,
  maxZoom: 20,
  style: styleFn,
  source: new GridBin({
    source: source,
  }),
  declutter: true,
});
map.addLayer(grid);

// Create Bin
function calcMinMax() {
  max = 0;
  min = Infinity;
  grid
    .getSource()
    .getFeatures()
    .forEach(function (f) {
      let nb = f.get('features').length;
      if (nb > max) max = nb;
      if (nb < min) min = nb;
    });
}
function reset() {
  grid.getSource().setSize(0.003);
  calcMinMax();
}
// add features
// addFeatures(0);

// function to setProjection
function setProjection(p) {
  let ex = map.getView().calculateExtent();
  let p1 = map.getView().getCenter();
  let p2 = [p[0], p[1] + 1];
  let p01 = transform(
    p1,
    map.getView().getProjection(),
    grid.getSource().get('gridProjection')
  );
  let p02 = transform(
    p2,
    map.getView().getProjection(),
    grid.getSource().get('gridProjection')
  );
  grid.getSource().set('gridProjection', 'EPSG:' + p);
  let p11 = transform(
    p1,
    map.getView().getProjection(),
    grid.getSource().get('gridProjection')
  );
  let p12 = transform(
    p2,
    map.getView().getProjection(),
    grid.getSource().get('gridProjection')
  );

  reset();
}

setProjection(4326);

let wktFeatureGeom;

// function to get all poi from api
function gridAnalysisKriteria() {
  getGridFeature(wktFeatureGeom, kriterias);
}

let pois = [];
let geojson = [];

// function to get feature from api
function getGridFeature(wkt, kriterias) {
  $.ajax({
    type: 'get',
    url: 'http://localhost:7070/geoserver/ne/wms',
    data: {
      kriterias: kriterias,
      wkt: wkt,
    },
    contentType: false,
    dataType: 'json',
    success: function (data) {
      if (data.features) {
        geojson = new GeoJSON().readFeatures(data, {
          dataProjection: 'EPSG:4021',
          featureProjection: 'EPSG:3857',
        });
        pois = data.features;
        // selectPopup(pois);
        source.clear(true);
        source.addFeatures(geojson);
      } else {
        console.log('tidak ada yang dapat di analisis');
      }
    },
    error: function () {
      console.log('Failed');
    },
  });
}

// Function Draw Point
export let draw;

// Function to add interaction
export function addInteraction() {
  draw = new Draw({
    // source: source,
    type: 'Polygon',
    style: style,
  });

  draw.on('drawend', function (e) {
    const format = new WKT();
    wktFeatureGeom = format.writeGeometry(e.feature.getGeometry(), {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    });
    map.removeInteraction(draw);
    // $('.collapse').collapse('show');
    gridAnalysisKriteria();
  });
  source.clear(true);
  map.addInteraction(draw);
}

const container = document.getElementById('popup-grid');

const overlayGrid = new Overlay({
  element: container,
});

map.addOverlay(overlayGrid);

map.on('click', showInfo);

// Function for check poi on each grid
function showInfo(event) {
  let poi = [];
  const features = map.getFeaturesAtPixel(event.pixel);
  if (features.length == 0) {
    return;
  }
  var properties = features[0].getProperties();
  var propfeatures = properties.features;

  $.each(propfeatures, function (i, data) {
    poi.push(data);
  });
  selectPopup(poi);
}

// Function for DOM popup data from api when popup grid selected
function selectPopup(data) {
  let kriteria = [];
  $.each(data, function (i, data) {
    kriteria.push(data.values_.fclass);
  });

  const countMap = new Map();
  for (const number of kriteria) {
    if (countMap.has(number)) {
      countMap.set(number, countMap.get(number) + 1);
    } else {
      countMap.set(number, 1);
    }
  }

  function getUniqueValues(arr) {
    return arr.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
  }
  let uniqueNumbers = getUniqueValues(kriteria);

  $('#list-poi-select').empty();
  return $.each(uniqueNumbers, function (i, data) {
    $('#list-poi-select').append(
      `<tr>
                <td class="py-1 my-0 col-9">${data}</td>
                <td class="py-1 my-0 col-auto">${countMap.get(data)}</td>
            </tr>`
    );
  });
}

// Style for select function
let styleSelect = function (f, res) {
  let color;
  let s = f.get('features').length;
  if (s > min + (2 * (max - min)) / 3) color = [136, 0, 0, 0.5];
  else if (s > min + (max - min) / 3) color = [255, 165, 0, 0.5];
  else color = [0, 136, 0, 0.5];
  let style = new Style({
    fill: new Fill({ color: color }),
    text: labelStyle,
    stroke: new Stroke({
      color: 'rgba(255, 255, 255, 255)',
      width: 3,
    }),
  });
  style.getText().setText(s.toString());
  return [style];
};

export const select = new Select({
  style: styleSelect,
  layers: [grid],
});

// Event Select on each feature
select.on('select', function (e) {
  if (e.selected.length) {
    let coordinate = e.mapBrowserEvent.coordinate;
    overlayGrid.setPosition(coordinate);
    // selectPopup(geojson);
    $('#popup-grid').toggleClass('d-none', false);
  } else {
    overlayGrid.setPosition(undefined);
    $('#popup-grid').toggleClass('d-none', true);
  }
});

const closer = document.getElementById('popup-closer-grid');
closer.onclick = function () {
  overlayGrid.setPosition(undefined);
  closer.blur();
  $('#popup-grid').toggleClass('d-none', true);
  return false;
};

// $("#gridAnalysis").on("click", function() {
// disableAllFunction($(this));
//   map.removeInteraction(draw);
//   map.addInteraction(select);
//   addInteraction();
// });

// $("#clearAnalysis").on("click", function() {
//   disableAllFunction($(this));
//   map.removeInteraction(drawCircle);
//   source_analysis.clear();
//   modifyCircleAnalysis.setActive(false);
//   map.removeInteraction(draw);
//   addFeatures(0);
//   source.clear();
//   map.removeInteraction(select);
// });
