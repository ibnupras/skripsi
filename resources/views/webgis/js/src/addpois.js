import ImageLayer from "ol/layer/Image.js";
import map from "./map.js";

const filterExpression = "jenis = 'ATM'";

function addNewImageLayer(url, layerName) {
    const newLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            visible: false,
            url: url,
            params: {
                LAYERS: layerName,
            },
        }),
    });
    map.addLayer(newLayer);
    return newLayer;
}

// Create and add initial layer 'ne:kantor'
const layerKantor = addNewImageLayer(
    "http://localhost:7070/geoserver/ne/wms",
    "ne:kantor"
);

// // Additional Image Layers (ne:atm, ne:kcp, ne:kfo)
const layerATM = addNewImageLayer(
    "http://localhost:7070/geoserver/ne/wms",
    "ne:atmmakassar"
);
const layerKCP = addNewImageLayer(
    "http://localhost:7070/geoserver/ne/wms",
    "ne:kcpmakassar"
);
const layerKFO = addNewImageLayer(
    "http://localhost:7070/geoserver/ne/wms",
    "ne:kfomakassar"
);

// Function to toggle the visibility of an Image Layer
function toggleLayerVisibility(layer) {
    layer.setVisible(!layer.getVisible());
}

// Button click event handlers for toggling layer visibility
$(".kantor").on("click", function () {
    toggleLayerVisibility(layerKantor);
});

$(".atm").on("click", function () {
    toggleLayerVisibility(layerATM);
});

$(".kcp").on("click", function () {
    toggleLayerVisibility(layerKCP);
});

$(".kfo").on("click", function () {
    toggleLayerVisibility(layerKFO);
});
