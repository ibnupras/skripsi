import ImageLayer from "ol/layer/Image.js";
import map from "./map.js";

function addNewImageLayer(url, layerName, jenis) {
    const newLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            visible: false,
            url: url,
            params: {
                LAYERS: layerName,
                CQL_FILTER: `jenis='${jenis}'`,
            },
        }),
    });
    map.addLayer(newLayer);
    return newLayer;
}

// Create and add initial layer 'ne:kantor'
const layerKantor = addNewImageLayer(
    "http://localhost:7070/geoserver/ne/wms",
    "ne:kantor",
    "KC",
    
);

// // Additional Image Layers (ne:atm, ne:kcp, ne:kfo)
const layerATM = addNewImageLayer(
    "http://localhost:7070/geoserver/ne/wms",
    "ne:kantor",
    "ATM",
);
const layerKCP = addNewImageLayer(
    "http://localhost:7070/geoserver/ne/wms",
    "ne:kantor",
    "KCP",
);
const layerKFO = addNewImageLayer(
    "http://localhost:7070/geoserver/ne/wms",
    "ne:kantor",
    "KFO",
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
