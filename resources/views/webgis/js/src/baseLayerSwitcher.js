/*
 * ---------------------------------------------------------------
 * Base Layer Switcher
 * ---------------------------------------------------------------
 */

import baseLayerGroup from "./baseLayers";

let activeLayer;

function pointBasemap() {
  $("#" + activeLayer + " .layer-icon").removeClass("active");

  baseLayerGroup.getLayers().forEach((el) => {
    if (el.getVisible()) {
      activeLayer = el.get("title");
    }
  });

  if (!activeLayer) return;

  $("#" + activeLayer + " .layer-icon").addClass("active");
}

pointBasemap();

let baseOnlyChecked = false;

function toggleBase(event) {
  let val = $("#only-base .toggle-btn input[type='checkbox']:checked").val();
  baseLayerGroup.getLayers().forEach((el) => {
    let title = el.get("title");

    if (title == "GoogleSatellite") {
      if (val == "on")
        el.getSource().setUrl(
          "https://mt0.google.com/vt/lyrs=s&hl=id&x={x}&y={y}&z={z}"
        );
      else
        el.getSource().setUrl(
          "https://mt0.google.com/vt/lyrs=y,transit,traffic&hl=id&x={x}&y={y}&z={z}"
        );
    }
  });
  baseOnlyChecked = !baseOnlyChecked;
}

function baseOnlyShowOrHidden(show) {
  if (show === true) {
    $("#map").append(`
     <div class="only-base" id="only-base">
       <label for="base-only">Base only
         <div class="toggle-btn" id="_3rd-toggle-btn">
           <input type="checkbox" id="base-only" name="base-only" ${
             baseOnlyChecked ? "checked" : ""
           }>
           <span></span>
         </div>
       </label>
     </div>
     `);

    $("#map #only-base").on("change", toggleBase);

    return;
  }

  $("#map #only-base").remove();
}

$(".layer").each(function () {
  let $this = $(this);
  let main = $(".baselayer-switcher");
  $this.on("click", function () {
    let name = $this.attr("id");

    if (name == "GoogleSatellite") {
      baseOnlyShowOrHidden(true);
    } else {
      baseOnlyShowOrHidden(false);
    }

    baseLayerGroup.getLayers().forEach((el) => {
      let title = el.get("title");
      el.setVisible(title == name);
    });

    let icon = $this.children(".layer-icon").css("background-image");
    main.css("background-image", icon);
    pointBasemap();
  });
});

let hoverTimer;
let outTimer;

$(".baselayer-switcher .mouse-box").on("mouseenter", function () {
  clearTimeout(outTimer);
  hoverTimer = setTimeout(function () {
    $(".base-choice").addClass("show");
  }, 200);
});

$(".baselayer-switcher .mouse-box").on("mouseleave", function () {
  clearTimeout(hoverTimer);
  outTimer = setTimeout(function () {
    $(".base-choice").removeClass("show");
  }, 700);
});

$(".base-choice")
  .on("mouseenter", function () {
    clearTimeout(outTimer);
    $(".base-choice").addClass("show");
  })
  .on("mouseleave", function () {
    clearTimeout(hoverTimer);
    outTimer = setTimeout(function () {
      $(".base-choice").removeClass("show");
    }, 700);
  });

$(".more-layers-icon").click(function (e) {
  e.stopPropagation();
  $(".more-layers-wrapper")
    .addClass("show")
    .on("click", function (event) {
      event.stopPropagation();
    });

  $(".base-choice")
    .css({
      opacity: 0,
      visibility: "hidden",
    })
    .removeClass("show");
});

$(window).on("click", function () {
  $(".more-layers-wrapper").removeClass("show");
  $(".base-choice").removeAttr("style");
});

/** END BASE LAYER */
