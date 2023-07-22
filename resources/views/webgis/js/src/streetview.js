import StreetView from "ol-street-view";
import "ol-street-view/lib/style/css/ol-street-view.css";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import map from "./map";
import { transform } from "ol/proj";
import $ from "jquery";

(function () {
  var coordsIcon = [-6451474.93, -4153206.94];
  var coordsView = [-6451484.76, -4153214.08];
  const iconUrl =
    "http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=star|FF0000";
  const icon = new VectorLayer({
    zIndex: 15,
    style: new Style({
      image: new Icon({
        anchor: [0.5, 1],
        anchorXUnits: "fraction",
        anchorYUnits: "fraction",
        src: iconUrl,
      }),
    }),
  });

  map.addLayer(icon);

  var streetView = new StreetView({
    apiKey: "AIzaSyAy9LBntbQWYkjZjjWSxkdxpLMOW6_W9YU",
    language: "en",
    size: "md",
    resizable: true,
    sizeToggler: true,
    zoomOnInit: 18,
    defaultMapSize: "compact",
    i18n: {
      dragToInit: "Drag and drop me",
    },
    target: "map",
  });
  map.addControl(streetView);

  // extension method:
  $.fn.classChange = function (cb) {
    return $(this).each((_, el) => {
      new MutationObserver((mutations) => {
        mutations.forEach(
          (mutation) =>
            cb &&
            cb(mutation.target, $(mutation.target).prop(mutation.attributeName))
        );
      }).observe(el, {
        attributes: true,
        attributeFilter: ["class"], // only listen for class attribute changes
      });
    });
  };

  // Wait until the Google Maps Panorama is initializated to add the icon (and run once)
  $("body").classChange((el, newClass) => {
    const splitted = newClass.split(" ");

    if (splitted.includes("ol-street-view--activated-on-dragging")) {
      hideSidebar();
    }

    if (splitted.includes("ol-street-view--activated")) {
      if (splitted.includes("ol-street-view--compact")) {
        $("#map").attr("data-street-view", true);
        $("#map").attr("data-street-view-expand", false);
        return;
      }

      $("#map").attr("data-street-view-expand", true)
      ;
        $("#main-content,#sidebar,.navbar").hide();
      return;
    }

    if (splitted[0].length === 0) {
      $("body").addClass("ol-street-view--compact");
    }

    $("#map").attr("data-street-view", false);
  });

  streetView.once("streetViewInit", function () {
    $("#map").attr("data-street-view", true);
  });
})();
