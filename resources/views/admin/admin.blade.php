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
        height: 100vh;
    }
    
      .input-group{
      position: relative;
      z-index: 1;
    }

      .map:-webkit-full-screen {
        height: 100%;
        margin: 0;
    }
      .map:fullscreen {
        height: 100%;
    }
      .map .ol-rotate {
        right: 3em;
    }
    #btn1:before {
            content: '\f545';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
        }

        #btn2:before {
            content: '\f5ee';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
        }

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
      .measure {
        position: relative;
        z-index: 1;
        right: 0;
      }
      #msr{
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: 0;
        size: 20px;
      }
      .ol-overviewmap,
    .ol-overviewmap button {
        top: 15% !important;
    }

    .ol-overviewmap {
        bottom: 100%;
    }

    .ol-overviewmap-box{
      top: 15%
    }
    
    </style>
<div id="map" class="map" data-street-view=false data-street-view-expand=false>
<div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
    </div>
</div>
     
  
@endsection