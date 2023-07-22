import map from "./map";
import { ScaleLine } from "ol/control";

// scale
const scaleControl = new ScaleLine({
  units: "metric",
  bar: true,
  steps: 4,
  text: true,
  minWidth: 140,
});
map.addControl(scaleControl);