@extends('layouts.app')

@section('content')
<div id="map" style="width: 100%; height: 89.9vh;"></div>
        <script>
        document.addEventListener('DOMContentLoaded', function () {
            var map = new ol.Map({
                target: 'map',
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([37.41, 8.82]),
                    zoom: 4
                })
            });
        });
        </script>


@endsection