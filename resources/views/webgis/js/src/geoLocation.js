/*
 * ---------------------------------------------------------------
 * Geolocation
 * ---------------------------------------------------------------
 */

import map from './map';
import { Geolocation, Feature } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Style, Circle, Fill, Stroke } from 'ol/style';
import { Point } from 'ol/geom';
import { Vector as layerVector } from 'ol/layer';
import { Vector as sourceVector } from 'ol/source';

//   Start Geolocation

const geolocation = new Geolocation({
  // enableHighAccuracy must be set to true to have the heading value.
  trackingOptions: {
    enableHighAccuracy: true,
  },
  projection: map.getView().getProjection(),
});

// Enable set tracking when windows on load (status = disable) change into when button on click set tracking will true with time out
// $(document).ready(function () {
//   geolocation.setTracking(true);
// });

// Function for zoom to user position
function viewAnimate(coordinates) {
  map.getView().animate({
    center: coordinates,
    zoom: 15,
    duration: 1000,
  });
}
// Event Handle when Button click
let geolocationBtn = document.getElementById('geolocation');
geolocationBtn.addEventListener('click', function () {
  // Enable Set tracking when button clicked
  let coordinates = geolocation.getPosition();
  if (coordinates === undefined) {
    geolocation.setTracking(this.click);
    navigator.geolocation.getCurrentPosition(function (position) {
      let coordinates = fromLonLat([
        position.coords.longitude,
        position.coords.latitude,
      ]);
      viewAnimate(coordinates);
    });
  } else if (coordinates.length > 0) {
    viewAnimate(coordinates);
  }
});

//   Get Accuracy feature from geolocation (status = disabled) because when using this function the circle style on maps will appear
// const accuracyFeature = new Feature();
// geolocation.on("change:accuracyGeometry", function() {
//   accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
// });

//   Add Point style when button clicked
const positionFeature = new Feature();
positionFeature.setStyle(
  new Style({
    image: new Circle({
      radius: 6,
      fill: new Fill({
        color: '#3399CC',
      }),
      stroke: new Stroke({
        color: '#fff',
        width: 2,
      }),
    }),
  })
);

// Get coordinates from geolocation
geolocation.on('change:position', function () {
  const coordinates = geolocation.getPosition();
  positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
});

//   Adding point and accuracy to layer
new layerVector({
  map: map,
  minZoom: 13,
  maxZoom: 20,
  source: new sourceVector({
    features: [
      //   accuracyFeature,
      positionFeature,
    ],
  }),
});

//   End Geolocation
