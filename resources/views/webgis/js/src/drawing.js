import map from "./map";
import { Draw, Modify, Snap } from "ol/interaction";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { clearDraw } from "./buttondraw";
import WKT from "ol/format/WKT";
import $ from "jquery";

/**
 * * This is for JQuery UI
 */

require("webpack-jquery-ui");
require("webpack-jquery-ui/css");
require("webpack-jquery-ui/draggable");

export const source = new VectorSource({ wrapX: false });
export const vector = new VectorLayer({
  source: source,
});
map.addLayer(vector);

export let draw2, snap;

export function addInteractionDraw(type, sourceParam) {
  draw2 = new Draw({
    source: sourceParam,
    type,
  });
  map.addInteraction(draw2);
  snap = new Snap({ source: source });
  map.addInteraction(snap);

  draw2.on("drawend", function (event) {
    $(".feature-popup").removeClass("d-none");
    const formatDrawEnd = new WKT();
    const wktFeatureGeomDrawEnd = formatDrawEnd.writeGeometry(
      event.feature.getGeometry()
    );
    console.log(wktFeatureGeomDrawEnd);
    // alert(wktFeatureGeomDrawEnd);
    // note :
    // slice for divide type and wkt
  });
}

// Pop Up
$(".feature-popup").draggable({ containment: "#map", handle: ".popup-header" });
$(".close-popup").on("click", function () {
  clearDraw("drawingTools");
  $(".feature-popup").addClass("d-none");
  $("#forminfo").empty();
  $("#forminfo").append(add);
});

// Snapping
export const modify = new Modify({ source: source });
map.addInteraction(modify);

//Add & remove input

let add = `
      <div class="input-group input-group-sm mb-3" id="loopinput">
        <input type="text" class="form-control" placeholder="Category" aria-label="Username">
        <span class="input-group-sm input-group-text-sm">&nbsp;:&nbsp;</span>
        <input type="text" class="form-control" placeholder="Description" aria-label="Server">
      </div>
`;

$(document).ready(function () {
  $("#addFormDraw").on("click", function () {
    $("#appendDraw").append(add);
  });
  $("#removeFormDraw").on("click", function () {
    $("#loopinput").remove();
  });
});

// Sending Function
$("#submitFormDraw").on("click", function (e) {
  e.preventDefault();

  // if ($("#formInfoDraw")[0].reportValidity()) {
  let formdata = new FormData($("#formInfoDraw")[0]);
  $.ajax({
    type: "POST",
    // type: "POST",
    url: "https://635a347eff3d7bddb9b190e8.mockapi.io/api/shapefiles",
    data: formdata,
    processData: false,
    contentType: false,
    dataType: "json",
    success: function (data) {
      alert("Success");
      // $('#formInfoDraw').empty();
      // $('#formInfoFraw').append(data);
      // New Layer From User Input
    },
    error: function () {
      alert("Failed");
    },
  });
  // }
});
