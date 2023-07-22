import { Map, View } from "ol";
import { fromLonLat } from "ol/proj";
import Overlay from "ol/Overlay";

const container = document.getElementById("popup");

export const overlay = new Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
});

const map = new Map({
  view: new View({
    center: fromLonLat([118.0148634, -2.548926]),
    zoom: 5.8,
    maxZoom: 20,
    minZoom: 4,
  }),
  controls: [],
  overlays: [overlay],
  target: "map",
  projection: "EPSG:900913",
  constrainResolution: true, // Prevents blurry XYZ background
});

/* Cursor Grab */
map.on("pointerdrag", function (evt) {
  map.getViewport().style.cursor = "move";
});

map.on("pointerup", function (evt) {
  map.getViewport().style.cursor = "default";
});

window.onresize = function () {
  setTimeout(function () {
    map.updateSize();
  }, 200);
};
/* End Cursor Grab */

export default map;
