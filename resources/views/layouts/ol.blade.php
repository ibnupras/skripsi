<script>
// poligon
const raster = new ol.layer.Tile({
  source: new ol.source.OSM(),
});

const modifyStyle = new ol.style.Style({
  image: new ol.style.Circle({
    radius: 5,
    stroke: new ol.style.Stroke({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
  }),
  text: new ol.style.Text({
    text: 'Drag to modify',
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    padding: [2, 2, 2, 2],
    textAlign: 'left',
    offsetX: 15,
  }),
});

const source = new ol.source.Vector({wrapX: true}) ;
const modify = new ol.interaction.Modify({source: source, style: modifyStyle});
const vector = new ol.layer.Vector({
  source: source,
  style: function (feature) {
    return styleFunction(feature, showSegments.checked);
  },
});

// Two base layers
const stamen = new ol.layer.Tile({
  title: "Watercolor",
  source: new ol.source.Stamen({
    layer: 'watercolor'
  }),
  visible : false,
});
// GeoJSON layer with a preview attribute
const vectorSource = new ol.source.Vector({
  url: '../data/fond_guerre.geojson',
  projection: 'EPSG:3857',
  format: new ol.format.GeoJSON(),
  attributions: [ "&copy; <a href='https://data.culture.gouv.fr/explore/dataset/fonds-de-la-guerre-14-18-extrait-de-la-base-memoire'>data.culture.gouv.fr</a>" ],
  logo:"https://www.data.gouv.fr/s/avatars/37/e56718abd4465985ddde68b33be1ef.jpg" 
});

//sattelite
const satellite = new ol.layer.Tile({
    title: "satellite",
    visible: false,
    source: new ol.source.XYZ({
      attributions: '',
      url: 'https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=6&x={x}&y={y}&z={z}&scl=1&ltype=10'
    })
  })

//google hybrid
const Ghybrid = new ol.layer.Tile({
  title: "google hybrid",
  source: new ol.source.XYZ({
    url:'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
  })
})

//waze
const wazeMaps = new ol.layer.Tile({
  title: "Waze",
  source: new ol.source.XYZ({
    url:'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
  })
})

//igd rupabumi
const igdMaps = new ol.layer.Tile({
  title: "IGD Rupabumi",
  source: new ol.source.XYZ({
    url:'http://clipship2.big.go.id:6080/arcgis/rest/services/IGD/RupabumiIndonesia/MapServer/tile/{z}/{y}/{x}'
  })
})


// wms
const layers = [
  new ol.layer.Tile({
    source: new ol.source.OSM(),
    url:'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
  }),
];


// pop up
const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

/**
 * Create an overlay to anchor the popup to the map.
 */
const overlay = new ol.Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
});

//overview
const overviewMapControl = new ol.control.OverviewMap({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
});

//measure

const style = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.2)',
  }),
  stroke: new ol.style.Stroke({
    color: 'rgba(0, 0, 0, 0.5)',
    lineDash: [10, 10],
    width: 2,
  }),
  image: new ol.style.Circle({
    radius: 5,
    stroke: new ol.style.Stroke({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
  }),
});

const labelStyle = new ol.style.Style({
  text: new ol.style.Text({
    font: '14px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
    padding: [3, 3, 3, 3],
    textBaseline: 'bottom',
    offsetY: -15,
  }),
  image: new ol.style.RegularShape({
    radius: 8,
    points: 3,
    angle: Math.PI,
    displacement: [0, 10],
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.7)',
    }),
  }),
});

const tipStyle = new ol.style.Style({
  text: new ol.style.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
    padding: [2, 2, 2, 2],
    textAlign: 'left',
    offsetX: 15,
  }),
});



const segmentStyle = new ol.style.Style({
  text: new Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    backgroundFill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
    padding: [2, 2, 2, 2],
    textBaseline: 'bottom',
    offsetY: -12,
  }),
  image: new ol.style.RegularShape({
    radius: 6,
    points: 3,
    angle: Math.PI,
    displacement: [0, 8],
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 0, 0.4)',
    }),
  }),
});

const segmentStyles = [segmentStyle];

const formatLength = function (line) {
  const length = getLength(line);
  let output;
  if (length > 100) {
    output = Math.round((length / 1000) * 100) / 100 + ' km';
  } else {
    output = Math.round(length * 100) / 100 + ' m';
  }
  return output;
};

const formatArea = function (polygon) {
  const area = getArea(polygon);
  let output;
  if (area > 10000) {
    output = Math.round((area / 1000000) * 100) / 100 + ' km\xB2';
  } else {
    output = Math.round(area * 100) / 100 + ' m\xB2';
  }
  return output;
};


let tipPoint;

function styleFunction(feature, segments, drawType, tip) {
  const styles = [style];
  const geometry = feature.getGeometry();
  const type = geometry.getType();
  let point, label, line;
  if (!drawType || drawType === type) {
    if (type === 'Polygon') {
      point = geometry.getInteriorPoint();
      label = formatArea(geometry);
      line = new ol.geom.LineString(geometry.getCoordinates()[0]);
    } else if (type === 'LineString') {
      point = new ol.geom.Point(geometry.getLastCoordinate());
      label = formatLength(geometry);
      line = geometry;
    }
  }
  if (segments && line) {
    let count = 0;
    line.forEachSegment(function (a, b) {
      const segment = new ol.geom.LineString([a, b]);
      const label = formatLength(segment);
      if (segmentStyles.length - 1 < count) {
        segmentStyles.push(segmentStyle.clone());
      }
      const segmentPoint = new ol.geom.Point(segment.getCoordinateAt(0.5));
      segmentStyles[count].setGeometry(segmentPoint);
      segmentStyles[count].getText().setText(label);
      styles.push(segmentStyles[count]);
      count++;
    });
  }
  if (label) {
    labelStyle.setGeometry(point);
    labelStyle.getText().setText(label);
    styles.push(labelStyle);
  }
  if (
    tip &&
    type === 'Point' &&
    !modify.getOverlay().getSource().getFeatures().length
  ) {
    tipPoint = geometry;
    tipStyle.getText().setText(tip);
    styles.push(tipStyle);
  }
  return styles;
}

//layer
const map = new ol.Map({
  controls: new ol.control.defaults.defaults().extend([overviewMapControl, new ol.control.FullScreen() ]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM({
        // wrapX: false,
      }),
    }),
    stamen,
    satellite,
    Ghybrid,
    wazeMaps,
    igdMaps,
    ...layers,
    vector,
    new ol.layer.Graticule({
      // the style to use for the lines, optional.
      strokeStyle: new ol.style.Stroke({
        color: 'rgba(255,120,0,0.9)',
        width: 2,
        lineDash: [0.5, 4],
      }),
      showLabels: true,
      // wrapX: false,
    }),
  ],
  overlays: [overlay],
  target: 'map',
  view: new ol.View({
    center: [-10997148, 4569099],
    zoom: 4,
  }),
});


//modify
map.addInteraction(modify);

const typeSelect = document.getElementById('type');
const showSegments = document.getElementById('segments');
const clearPrevious = document.getElementById('clear');

let draw; // global so we can remove it later
function addInteraction() {
  const value = typeSelect.value;
  const activeTip =
    'Click to continue drawing the ' +
    (value === 'Polygon' ? 'polygon' : 'line');
  const idleTip = 'Click to start measuring';
  let tip = idleTip;
    draw = new ol.interaction.Draw({
      source: source,
      type: typeSelect.value,
      style: function(feature){
        return styleFunction(feature, showSegments.checked, value, tip);
      },
    });
    draw.on('drawstart', function () {
    if (clearPrevious.checked) {
      source.clear();
    }
    modify.setActive(false);
    tip = activeTip;
  });
  draw.on('drawend', function () {
    modifyStyle.setGeometry(tipPoint);
    modify.setActive(true);
    map.once('pointermove', function () {
      modifyStyle.setGeometry();
    });
    tip = idleTip;
  });
  modify.setActive(true);
    map.addInteraction(draw);
  }

typeSelect.onchange = function () {
  vector.changed();
  draw.getOverlay().changed();
  map.removeInteraction(draw);
  addInteraction();
};


addInteraction();

map.on('singleclick', function (evt) {
  const coordinate = evt.coordinate;
  const hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate));

  content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
  overlay.setPosition(coordinate);
});

// console.log(ol.layerSwitcher)

// const layerswitchers = new ol.Image.LayerSwitcher();

// Add a new Layerswitcher to the map
// const switcher = new ol.control.LayerSwitcher({
//   displayInLayerSwitcher: function(layer) {
//     return (layer.get("displayInLayerSwitcher") === 1); 
//   }
// });

map.addControl(new ol.control.LayerSwitcherImage())


// Redraw layer when fonts are loaded
$(window).on("load", function(){ console.log("loaded"); vector.changed(); });
    </script>