/*
 * ---------------------------------------------------
 * This file is using Node js to generate JSON
 * ---------------------------------------------------
 */

const basemaps = [
  {
    name: "G-Street",
    title: "GoogleStreet",
    source: {
      type: "XYZ",
      url: "https://mt0.google.com/vt/lyrs=m,transit,traffic&hl=id&x={x}&y={y}&z={z}",
    },
  },
  {
    name: "G-Satellite",
    title: "GoogleSatellite",
    source: {
      type: "XYZ",
      url: "https://mt0.google.com/vt/lyrs=y,transit,traffic&hl=id&x={x}&y={y}&z={z}",
    },
  },
  {
    name: "Standart",
    title: "OSMStandart",
    source: {
      type: "XYZ",
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    },
  },
  {
    name: "MT-Street",
    title: "MTStreet",
    source: {
      type: "XYZ",
      url: "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=ruaIHZFS89lH0NlSL7QW",
    },
  },
  {
    name: "MT-Satellite",
    title: "MTSatellite",
    source: {
      type: "XYZ",
      url: "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=ruaIHZFS89lH0NlSL7QW",
    },
  },
  {
    name: "OpenTopoMap",
    title: "OpenTopoMap",
    source: {
      type: "XYZ",
      url: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
    },
  },
  {
    name: "Humantarian",
    title: "OSMHumantarian",
    source: {
      type: "OSM",
      url: "https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    },
  },
  {
    name: "Stamen",
    title: "StamenTerrain",
    source: {
      type: "XYZ",
      url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
    },
  },
  {
    name: "Toner",
    title: "MTToner",
    source: {
      type: "XYZ",
      url: "https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=ruaIHZFS89lH0NlSL7QW",
    },
  },
  {
    name: "ESRI-Standard",
    title: "ESRIStandard",
    source: {
      type: "XYZ",
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    },
  },
  {
    name: "ESRI-Topo",
    title: "ESRITopo",
    source: {
      type: "XYZ",
      url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    },
  },
  {
    name: "ESRI-Satellite",
    title: "ESRISatellite",
    source: {
      type: "XYZ",
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    },
  },
  {
    name: "Waze",
    title: "Waze",
    source: {
      type: "XYZ",
      url: "https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png",
    },
  },
];

export default basemaps;
