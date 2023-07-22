import map from './map';
import { Draw, Snap } from 'ol/interaction';
import { Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { get } from 'ol/proj';
import { Style, Stroke, Fill, Circle, Text } from 'ol/style';
import { GeometryCollection, Point, Polygon } from 'ol/geom';
import { circular } from 'ol/geom/Polygon';
import { getDistance } from 'ol/sphere';
import { transform } from 'ol/proj';
import WKT from 'ol/format/WKT';
import GeoJSON from 'ol/format/GeoJSON';
import { style } from './measure';
import { disableAllFunction } from './functionButtonControl';
import { kriterias } from './panelAnalysis';

export const source_analysis = new VectorSource();

const layerSource = new VectorLayer({
  source: source_analysis,
  visible: false,
});
map.addLayer(layerSource);

const vectorAnalysis = new VectorLayer({
  // map: map,
  source: source_analysis,
  style: new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    stroke: new Stroke({
      color: 'rgba(0, 0, 0, 0.5)',
      width: 2,
    }),
    image: new Circle({
      radius: 7,
      fill: new Fill({
        color: 'rgba(0, 0, 0, 0)',
      }),
    }),
  }),
  // {
  //     'fill-color': 'rgba(255, 255, 255, 0.2)',
  //     'stroke-color': 'rgba(0, 0, 0, 0.5)',
  //     'stroke-width': 2,
  //     'circle-radius': 7,
  //     'circle-fill-color': '#ffcc33',
  //     'shape-fill-color': '#ffcc33',
  // },
});

// Limit multi-world panning to one world east and west of the real world.
// Geometry coordinates have to be within that range.
const extent = get('EPSG:3857').getExtent().slice();
extent[0] += extent[0];
extent[2] += extent[2];

let wktFeatureGeom;

function circleAnalysisKriteria() {
  getCircleFeature(wktFeatureGeom, kriterias);
}

let pois = [];
let geojson = [];

function getCircleFeature(wkt, kriterias) {
  $.ajax({
    type: 'get',
    url: 'http://localhost:7070/geoserver/ne/wms',
    data: {
      'LAYERS': 'ne:gis_osm_pois_free_1',
      kriterias: kriterias,
      wkt: wkt,
    },
    contentType: false,
    dataType: 'json',
    success: function (data) {
      if (data.features) {
        geojson = new GeoJSON().readFeatures(data, {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        });
        pois = data.features;
        source_analysis.clear();
        source_analysis.addFeatures(geojson);
        layerSource.setVisible(true);
      } else {
        console.log('tidak ada yang dapat di analisis');
      }
      // selectPopup(pois);
      // source_analysis.clear(true);
      // source_analysis.addFeatures(geojson);
    },
    error: function () {
      console.log('Failed');
    },
  });
}

export let drawCircle, snap; // global so we can remove them later

export function addInteractions() {
  let value = 'Geodesic';
  let geometryFunction;
  if (value === 'Geodesic') {
    value = 'Circle';
    geometryFunction = function (coordinates, geometry, projection) {
      if (!geometry) {
        geometry = new GeometryCollection([
          new Polygon([]),
          new Point(coordinates[0]),
        ]);
      }
      const geometries = geometry.getGeometries();
      const center = transform(coordinates[0], projection, 'EPSG:4326');
      const last = transform(coordinates[1], projection, 'EPSG:4326');
      const radius = getDistance(center, last);
      const circle = circular(center, radius, 128);
      circle.transform('EPSG:4326', projection);
      geometries[0].setCoordinates(circle.getCoordinates());
      geometry.setGeometries(geometries);
      return geometry;
    };
  }
  drawCircle = new Draw({
    source: source_analysis,
    type: value,
    geometryFunction: geometryFunction,
  });

  let circleCount = 0;

  drawCircle.on('drawend', function (e) {
    const format = new WKT();
    wktFeatureGeom = format.writeGeometry(e.feature.getGeometry(), {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    });
    circleAnalysisKriteria();
    // showPanel();
    circleCount++;
    if (circleCount > 4) {
      map.removeInteraction(drawCircle);
    }
  });

  map.addInteraction(drawCircle);
  snap = new Snap({ source: source_analysis });
  map.addInteraction(snap);
}

// $("#circleAnalysis").on("click", function() {
//   disableAllFunction($(this));
//   map.removeInteraction(drawCircle);
//   addInteractions();
// });
