import map from './map';
import { addInteraction, modify, vector_source_measure, draw } from './measure';
import {
    addInteraction as addInteractionGrid,
    source as sourceGrid,
    draw as drawGrid,
    addFeatures as addFeaturesGrid,
    select,
} from './gridAnalysis';

import {
    addInteractionDraw,
    modify as modifyDrawingTools,
    source as drawingSource,
    vector as drawingVector,
    draw2 as drawingTools,
    snap as snappingDraw,
} from './drawing';

// Button Clear draw
export function clearDraw(clearType) {
    if (clearType === 'measure') {
        vector_source_measure.clear();
        modify.setActive(false);
    } else if (clearType === 'gridAnalysis') {
        map.removeInteraction(drawGrid);
        // addFeaturesGrid(0);
        sourceGrid.clear();
        map.removeInteraction(select);
        $('#popup-grid').toggleClass('d-none', true);
        $('.collapse').collapse('hide');
    } else if (clearType === 'drawingTools') {
        map.removeInteraction(drawingTools);
        drawingVector.getSource().clear();
        modifyDrawingTools.setActive(false);
        $('.feature-popup').addClass('d-none');
    }
}

// Button Circle Analysis
$('#circleAnalysis').on('click', function () {
    clearDraw('measure');
    clearDraw('gridAnalysis');
    clearDraw('drawingTools');
    map.removeInteraction(drawCircle);
    addInteractions();
});

// Button Grid Analysis
$('#gridAnalysis').on('click', function () {
    clearDraw('measure');
    clearDraw('drawingTools');
    map.removeInteraction(drawGrid);
    map.addInteraction(select);
    addInteractionGrid();
});

$('#clearAnalysis').on('click', function () {
    clearDraw('gridAnalysis');
});

// Button Draw Measure
$('#distance').on('click', function () {
    clearDraw('gridAnalysis');
    clearDraw('drawingTools');
    map.removeInteraction(draw);
    addInteraction('LineString');
});

$('#area').on('click', function () {
    clearDraw('gridAnalysis');
    clearDraw('drawingTools');
    map.removeInteraction(draw);
    addInteraction('Polygon');
});

$('#clear').on('click', function () {
    clearDraw('measure');
});

// Button Drawing Tools
$('.add-vector').on('click', function () {
    clearDraw('measure');
    clearDraw('gridAnalysis');
    map.removeInteraction(drawingTools);
    map.removeInteraction(snappingDraw);
    addInteractionDraw($(this).data('type'), drawingSource);
});

$('#stop-drawing-tools').on('click', function () {
    clearDraw('drawingTools');
});
