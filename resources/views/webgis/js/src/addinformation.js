import * as ol from 'ol';
import { Vector as layerVector } from "ol/layer";
import { Vector as sourceVector } from "ol/source";
import {toLonLat} from 'ol/proj';
import {fromLonLat} from 'ol/proj';
import Overlay from 'ol/Overlay';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import map from "./map";

const infoLayer = new layerVector({
    source: new sourceVector(),
    style: function (feature) {
      return new Style({
        image: new Icon({
          src: 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="8" fill="red" stroke="white" stroke-width="2"/></svg>'),
          imgSize: [20, 20],
        }),
      });
    },
  });
  
  map.addLayer(infoLayer);
  
  let isInfoModeActive = false;
  let selectedFeature = null;
  
  function activateInfoMode() {
    isInfoModeActive = true;
  }
  
  function deactivateInfoMode() {
    isInfoModeActive = false;
  }
  
  function addInfoPoint(longitude, latitude) {
    if (isInfoModeActive) {
      const coordinate = fromLonLat([longitude, latitude]);
      const infoPopup = new Overlay({
        position: coordinate,
        positioning: 'bottom-center',
        element: document.createElement('div'),
        stopEvent: true,
      });
  
      const content = `<div class="popup-container" id="popups-container">
        <div class="card">
          <div class="card-body">
            <span class="popup-close cancel" id="cancel">&times;</span>
            <form>
              <div class="form-group">
                <label for="judul">Judul:</label>
                <input type="text" class="form-control" id="judul">
              </div>
              <div class="form-group">
                <label for="deskripsi">Deskripsi:</label>
                <textarea class="form-control" id="deskripsi"></textarea>
              </div>
              <button type="button" class="btn btn-primary" id="save">Simpan</button>
            </form>
          </div>
        </div>
      </div>`;
  
      infoPopup.getElement().innerHTML = content;
  
      map.addOverlay(infoPopup);
  
      // Tambahkan event listener untuk tombol Simpan
      document.getElementById('save').addEventListener('click', function () {
        saveInfoPoint(longitude, latitude);
      });
    }
  }
  
  function saveInfoPoint(longitude, latitude) {
    const judul = document.getElementById('judul').value;
    const deskripsi = document.getElementById('deskripsi').value;
  
    const data = {
      judul: judul,
      deskripsi: deskripsi,
      latitude: latitude,
      longitude: longitude,
    };
  
    fetch('/api/simpan-informasi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': '{{ csrf_token() }}',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        const infoPoint = new Feature({
          geometry: new Point(fromLonLat([longitude, latitude])),
        });
        infoPoint.setProperties({
          judul: judul,
          deskripsi: deskripsi,
        });
        infoLayer.getSource().addFeature(infoPoint);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
    // Hapus popup setelah menyimpan informasi
    deactivateInfoMode();
    map.getOverlays().clear();
  }
  
  function cancelInfoPoint() {
    deactivateInfoMode();
    map.getOverlays().clear();
  }
  
  function removeInfoPoint() {
    if (selectedFeature) {
      infoLayer.getSource().removeFeature(selectedFeature);
      map.getOverlays().clear();
    }
  }
  
  map.on('click', function (event) {
    const coordinate = toLonLat(event.coordinate);
    if (isInfoModeActive) {
      addInfoPoint(coordinate[0], coordinate[1]);
    } else {
      const feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
      });
  
      if (feature && infoLayer.getSource().getFeatures().includes(feature)) {
        selectedFeature = feature;
        const coordinate = feature.getGeometry().getCoordinates();
        const judul = feature.get('judul');
        const deskripsi = feature.get('deskripsi');
  
        const content = `<div class="popup-container">
          <div class="card">
            <div class="card-body">
              <span class="popup-close" onclick="removeInfoPoint()">&times;</span>
              <p><strong>${judul}</strong></p>
              <p>${deskripsi}</p>
            </div>
            </div>
            </div>`;
        
            const popup = new Overlay({
              position: coordinate,
              positioning: 'bottom-center',
              element: document.createElement('div'),
              stopEvent: true,
            });
        
            popup.getElement().innerHTML = content;
        
            map.addOverlay(popup);
          }
        }
        });
        
    document.getElementById('addinformation').addEventListener('click', function () {
          activateInfoMode();
        });
  document.getElementById('addinformation').addEventListener('click', function () {
    activateInfoMode()
  });

  document.getElementById('popup-container').addEventListener('click', function (event) {
    const target = event.target;
    if (target.id === 'addinformation') {
      activateInfoMode();
    } else if (target.id === 'save') {
      saveInfoPoint();
    } else if (target.id === 'cancel') {
      cancelInfoPoint();
    }
  });
