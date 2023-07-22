import ImageLayer from 'ol/layer/Image.js';
import map from './map.js';

const layerKantor = new ImageLayer({
    source: new ol.source.ImageWMS({
        visible: false,
        url: 'http://localhost:7070/geoserver/ne/wms', // Ganti dengan URL WMS GeoServer Anda dan nama workspace "ne".
        params: { 'LAYERS': 'ne:kantor' }, // Ganti dengan nama layer yang ingin Anda tampilkan.
    })
});
map.addLayer(layerKantor)

$(".kantor").on("click", function () {
    console.log(map.getLayers());
    layerKantor.setVisible(!layerKantor.getVisible());
});
