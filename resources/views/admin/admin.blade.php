@extends('layouts.app')

@section('content')
  <style>
    html,
    body {
      margin: 0;
      height: 100%;
    }

    #map {
      position: relative;
      width: 100%;
      height: 87.6vh;
    }

    #ol-street-view--pegman-button-div {
      top: unset;
      bottom: 10px;
      right: 60px
    }
    /* .map-active{
      width: 70%;
      margin-left: 500px;
    } */
    .btn-primary{
    --bs-btn-bg: #097615;
    --bs-btn-border-color: #097615;
    }


    /* popup */
    .ol-popup {
        position: absolute;
        background-color: white;
        box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #cccccc;
        bottom: 12px;
        left: -50px;
        min-width: 280px;
      }
      .ol-popup:after, .ol-popup:before {
        top: 100%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }
      .ol-popup:after {
        border-top-color: white;
        border-width: 10px;
        left: 48px;
        margin-left: -10px;
      }
      .ol-popup:before {
        border-top-color: #cccccc;
        border-width: 11px;
        left: 48px;
        margin-left: -11px;
      }
      .ol-popup-closer {
        text-decoration: none;
        position: absolute;
        top: 2px;
        right: 8px;
      }
      .ol-popup-closer:after {
        content: "✖";
      }
      .info-marker {
      width: 20px;
      height: 20px;
      border: 2px solid #ffffff;
      border-radius: 50%;
      background-color: red;
    }


    /* for maptools group */
    .maptools-wrapper {
        background-color: white;
        position: absolute;
        height: 100%;
        width: 45px;
        z-index: 10;
        right: 0;
        overflow-y: overlay;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  /* custom scrollbar */
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
        position: absolute;
        right: -3rem;
        top: -50rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 20px;
        border: 6px solid transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #a8bbbf;
    }

    .maptools-group {
        padding-top: 10px;
        padding-bottom: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        button[type="button"] {
        width: 30px;
        height: 30px;
        background-color: white !important;

        &:hover {
            background-color: rgb(233, 233, 233) !important;
        }

        &::after {
            content: attr(data-title);
            position: fixed;
            background-color: black;
            color: white;
            font-size: larger;
            right: 50%;
            bottom: 20px;
            transform: translateX(50%);
            padding: 5px 10px;
            border-radius: 5px;
            visibility: hidden;
        }

        &:hover::after {
            visibility: visible;
        }
        }

        &::after {
        content: "";
        width: calc(100% - 20px);
        height: 1px;
        background-color: rgb(139, 139, 139);
        margin: 0 auto;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        }
    }
    }

    /* for base layerswitcher  */
    .baselayer-switcher {
        position: absolute;
        bottom: 15px;
        left: 15px;
        z-index: 2;
        width: 100px;
        height: 100px;
        background-color: white;
        background-position: center;
        border-radius: 10px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        border: 3px solid white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        color: white;
    }

    .baselayer-switcher span {
        margin-bottom: 5px;
        z-index: 0;
    }

    .baselayer-switcher .gradient {
        width: 100%;
        border-radius: 7px;
        position: absolute;
        height: 100%;
        background: rgb(24, 24, 24);
        background: linear-gradient(
            0deg,
            rgba(24, 24, 24, 1) 0%,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 212, 255, 0) 100%
        );
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .baselayer-switcher .base-choice {
        display: flex;
        height: 100px;
        bottom: -3px;
        border-radius: 10px;
        background-color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease-in;
        cursor: pointer;
        position: absolute;
        left: 105px;
        gap: 20px;
        padding: 0 15px;
        transform: translateX(-5%);
    }

    .base-choice.show {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        transition: all 0.2s ease-out;
    }

    .layer {
        display: flex;
        color: black;
        margin: auto 0;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
        cursor: pointer;
        width: 60px;
    }

    .layer .layer-icon {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background-position: center;
    }

    .layer:hover .layer-icon {
        border: 2px solid #50a2f3;
    }

    .layer-icon.active {
        border: 2px solid #50a2f3;
    }

    .layer .layer-name {
        font-size: 10px;
        word-wrap: break-word;
        max-width: 60px;
        margin: 0;
        text-align: center;
    }

    .more.layer {
        margin: 0;
    }

    .base-choice .more-layers-icon {
        width: 55px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .base-choice .more-layers-icon i {
        font-size: 28px;
        color: black;
    }

    .mouse-box {
        z-index: 3;
        width: 105px;
        height: 100%;
        position: absolute;
        cursor: pointer;
    }

    /* for more layer  */
    .more-layers-wrapper {
        min-width: 240px;
        height: auto;
        position: absolute;
        bottom: -3px;
        left: -2px;
        z-index: 10;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }

    .more-layers-wrapper.show {
        visibility: visible;
        opacity: 1;
    }

    .more-layers-wrapper .box {
        background-color: #ffffff;
        border-radius: 10px;
        height: 100%;
        padding: 15px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .more-layers-wrapper .box .flex {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    /* sidebar */
    li {
        list-style: none;
        margin: 20px 0 20px 0;
    }

    a {
        text-decoration: none;
    }

    .sidebar {
        width: px;
        height: 60vh;
        position: fixed;
        margin-left: -300px;
        transition: 0.4s;
        overflow-x: hidden; /* Disable horizontal scroll */
        transition: 0.5s; /* Transition effect to slide in the sidebar */
        z-index: 1;
    }

    .active-main-content {
        margin-left: 250px;
    }

    .active-sidebar {
        margin-left: 0;
    }

    .bg-primary {
        background-color: #097615 !important;
    }


    #main-content {
        transition: 0.4s;
        display: flex;
    }
    #ol-street-view--map-container {
      position: unset;
    }
  </style>

  <div id="map" class="map" data-street-view=false data-street-view-expand=false>
  <div id="popup" class="ol-popup">
    <a href="#" id="popup-closer" class="ol-popup-closer"></a>
    <div id="popup-content"></div>
  </div>


    <!-- maptools -->
    <div class="maptools-hide"></div>
    <div class="maptools-wrapper">
        <div class="maptools-group">
            <button class="btn btn-primary px-3 rounded-0" id="info" title="Informasi Detail" data-function-active=false type="button"><i class="fa fa-thumb-tack"></i></button>
            <button class="btn btn-primary px-3 rounded-0" id="addinformation" title="Tambah Point" type="button"><i class="fa fa-list-alt" aria-hidden="true"></i></button>
            <button class="btn btn-primary px-3 rounded-0" id="geolocation" title="Lokasi Terkini" type="button"><i class="fa fa-location-arrow" aria-hidden="true"></i></button>
        </div>
        <div class="maptools-group">
            <button class="btn btn-primary px-3 rounded-0" id="distance" title="Pengukuran Jarak" geomtype="LineString" type="button"><i class="fa fa-magic" aria-hidden="true"></i></button>
            <button class="btn btn-primary px-3 rounded-0" id="area" title="Pengukuran Area" geomtype="Polygon" type="button" style="border-top: 0px !important;"><i class="fa fa-object-ungroup" aria-hidden="true"></i></button>
            <button class="btn btn-primary px-3 rounded-0" id="clear" title="Hapus Pengukuran" type="button" style="border-top: 0px !important;"><i class="fa fa-eraser" aria-hidden="true"></i></button>
    </div>
    </div>

    <!-- sidebar -->
    <div>
        <div class="sidebar p-4 bg-primary" id="sidebar">
            <h4 class="mb-5 text-white">layer</h4>
            <li>
              <button class="btn btn-light kantor fw-bold" title="Kantor Cabang">KC</button>
            </li>
            <li>
            <button class="btn btn-light kcp fw-bold" title="Kantor Cabang Pembantu">KCP</button>
            </li>
            <li>
            <button class="btn btn-light kfo fw-bold" title="Kantor Fungsional Operational">KFO</button>
            </li>
            <li>
            <button class="btn btn-light atm fw-bold" title="Anjungan Tunai Mandiri">ATM</button>
            </li>
          </div>
        </div>
        <section class="p-4 position-absolute" style="z-index: 1;" id="main-content">
            <button class="btn btn-primary" id="button-toggle">
                <i class="bi bi-list"></i>
            </button>
        </section>

    <!-- layerswicher -->
    </div>

        <div class="baselayer-switcher">
            <div class="gradient"></div>
            <span class="baselayers-title">Bases</span>
            <div class="mouse-box"></div>

            <div class="base-choice">
                <div class="more-layers-icon">
                    <i class="bi bi-stack"></i>
                    <span class="layer-name">More</span>
                </div>
            </div>

            <div class="more-layers-wrapper">
                <div class="box">
                    <div class="flex">
                    </div>
                </div>
            </div>
        </div>

        <div id="popup-grid" class="ol-popup popup-grid m-0 p-0 d-none" style="height: 300px;">
        <div class="popup-header border-bottom" style="height: 25px; background-color: #006aca; border-radius: 10px 10px 0 0">
            <a href="#" id="popup-closer-grid" class="ol-popup-closer" style="color: white;"></a>
        </div>
        <div id="popup-select-grid" class="mh-100 px-0 overflow-auto scrollbar" style="height: 275px; border-radius: 0 0 20px 20px;">
            <table class="table table-striped">
                <tbody id="list-poi-select">
                    <!-- dom from javascript to append list poi -->
                </tbody>
            </table>
        </div>
</div>

<script>
    // event will be executed when the toggle-button is clicked
    document.getElementById("button-toggle").addEventListener("click", () => {

        // when the button-toggle is clicked, it will add/remove the active-sidebar class
        document.getElementById("sidebar").classList.toggle("active-sidebar");

        // when the button-toggle is clicked, it will add/remove the active-main-content class
        document.getElementById("main-content").classList.toggle("active-main-content");

        // when the button-toggle is clicked, it will add/remove the active-main-content class
        document.getElementById("map").classList.toggle("map-active");

    });
</script>
@endsection
@section('script')
    <script>
        $('body').mouseover(function () {
            if ($(this).hasClass('ol-street-view--activated')) {
                $('#main-content, #map .maptools-wrapper').hide()
                $('#map').attr('style', 'width: 200px !important;height: 200px !important; position: absolute');
                $('#ol-street-view--map-container').attr('style', 'position:absolute');
                $('.baselayer-switcher').css('display', 'none')
              } else {
                $('#main-content, #map .maptools-wrapper').show()
                $('#ol-street-view--map-container').attr('style', 'position:unset');
                $('#map').removeAttr('style')
                $('.baselayer-switcher').css('display', 'block')
            }
        });
    </script>
@endsection
