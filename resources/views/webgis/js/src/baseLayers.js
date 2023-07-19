import { Tile, Group } from "ol/layer";
import { OSM, XYZ } from "ol/source";
import map from "./map";
import basemaps from "./basemaps";
import $ from "jquery";

const templateHtml = (data) =>
  `
    <div class="${data.more ? "more " : ""}layer" id="${data.id}">
        <div class="layer-icon" style="background-image: url('${
          data.imgUrl
        }')"></div>
        <span class="layer-name">${data.name}</span>
    </div>
`;

const interpolateUrl = (string, values) =>
  string.replace(/{(.*?)}/g, (match, offset) => values[offset]);

let mainLayers = "";
let moreLayers = "";
let XYZValue = {
  x: 106,
  y: 65,
  z: 7,
};

$(".baselayer-switcher").css({
  "background-image": `url('${interpolateUrl(
    basemaps[0].source.url,
    XYZValue
  )}')`,
});

basemaps.forEach((data, id) => {
  if (id < 3) {
    mainLayers += templateHtml({
      more: false,
      id: data.title,
      name: data.name,
      imgUrl: interpolateUrl(data.source.url, XYZValue),
    });
  }

  moreLayers += templateHtml({
    more: true,
    id: data.title,
    name: data.name,
    imgUrl: interpolateUrl(data.source.url, XYZValue),
  });
});

$(".baselayer-switcher .base-choice").prepend(mainLayers);
$(".baselayer-switcher .more-layers-wrapper .flex").prepend(moreLayers);

/*
 * ------------------------------------------------------------------------------
 * Load Base Layers
 * ------------------------------------------------------------------------------
 */

let basemapList = basemaps.map(function (el, i) {
  let tile = new Tile({
    title: el.title,
    visible: false,
  });

  if (el.source.type == "OSM") {
    if (el.source.url == "") {
      tile.setSource(new OSM());
    } else {
      tile.setSource(
        new OSM({
          url: el.source.url,
        })
      );
    }
  }

  if (el.source.type == "XYZ") {
    tile.setSource(
      new XYZ({
        url: el.source.url,
      })
    );
  }

  if (i == 0) {
    tile.setVisible(true);
  }

  return tile;
});

// Layer Group
const baseLayerGroup = new Group({
  layers: basemapList,
});

map.addLayer(baseLayerGroup);

export default baseLayerGroup;
