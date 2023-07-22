import map, { overlay } from "./map";
import { toStringHDMS } from "ol/coordinate";
import { toLonLat } from "ol/proj";

const content = document.getElementById("popup-content");
const closer = document.getElementById("popup-closer");

closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

let a = false;

$("#info").on("click", function () {
  // disableAllFunction($(this));
  if (!a) {
    map.on("singleclick", callbackInfo);
    $("#popup").toggle(true);
    a = true;
    $(this).attr("data-function-active", true);
  } else {
    map.un("singleclick", callbackInfo);
    $("#popup").toggle(false);
    a = false;
    $(this).attr("data-function-active", false);
  }
});

function callbackInfo(evt) {
  const coordinate = evt.coordinate;
  const hdms = toStringHDMS(toLonLat(coordinate));
  content.innerHTML = "<p>Coordinate</p><code>" + hdms + "</code>";
  overlay.setPosition(coordinate);
}
