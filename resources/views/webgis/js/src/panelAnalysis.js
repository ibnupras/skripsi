import ionRangeSlider from 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
// REVIEWED: Added this to be acknowleged by webpack.
import 'bootstrap-select';
import 'ion-rangeslider';
import 'bootstrap-select/dist/css/bootstrap-select.css';
import 'ion-rangeslider/css/ion.rangeSlider.css';

$('.select_criteria').selectpicker();

let apiUrl = 'http://localhost:7070/geoserver/ne/wms';
export let kriterias = [];

async function getJson(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

async function getKriteria() {
  let pois = await getJson(apiUrl);
  if (kriterias.length < 1) {
    $.each(pois, function (i, data) {
      kriterias.push(data.fclass);
    });
  }
  listKriteria(pois);
  loopData(pois);
}

function listKriteria(data) {
  return $.each(data, function (i, data) {
    $('#CircleAnalysis').append(
      `<div class="side-content-box" id="${data.fclass}_box" data-lock='false'>
                    <div class="d-flex" style="padding: 0 5px">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="${data.fclass}_checkbox" checked>
                            <label class="form-check-label" for="${data.fclass}_checkbox" style="margin: 1.5px 0 0 0">
                                ${data.fclass}
                            </label>
                        </div>
                        <button type="button" class="close ml-auto cursor-pointer" id="${data.fclass}_weight-close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class='d-flex justify-content-around align-items-center' style='padding: 0 10px;'>
                        <label for="weight-slider">Weight</label>
                        <div class="weight-slider">
                            <input type="text" class="${data.fclass}_weight-range-slider" name="${data.fclass}_range" value="" />
                        </div>
                        <input id="${data.fclass}_amount" type="text" value="5" class="form-control text-center" style='padding: 0; max-width: 40px' />
                        <div class="ct-chart ${data.fclass}_chart"></div>
                        <i class="bi bi-unlock" id='${data.fclass}_locked' data-lock='false' style="font-size: 20px;cursor: pointer"></i>
                    </div>
                    <div style='padding: 0 10px'>
                        <a href='javascript:void(0)' class='show_content' id='${data.fclass}_show'>More options</a>
                        <div class="displayed_content" id='${data.fclass}_displayed'>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="${data.fclass}_radio" id="${data.fclass}_Influence" value="${data.fclass}_Influence" checked>
                                <label class="form-check-label radio-show-content" for="${data.fclass}_Influence">
                                    Influence
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="${data.fclass}_radio" id="${data.fclass}_Positive" value="${data.fclass}_Positive">
                                <label class="form-check-label radio-show-content" for="${data.fclass}_Positive">
                                    Positive
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="${data.fclass}_radio" id="${data.fclass}_Inverse" value="${data.fclass}_Inverse">
                                <label class="form-check-label radio-show-content" for="${data.fclass}_Inverse">
                                    Inverse
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="${data.fclass}_radio" id="${data.fclass}_Ideal" value="${data.fclass}_Ideal">
                                <label class="form-check-label radio-show-content" for="${data.fclass}_Ideal">
                                    Ideal
                                </label>
                            </div>
                            <!-- NOTE: threshold design is not final, might be change in the future. -->
                            <div style="padding-top: 20px;">
                                <span>Threshold (Optional)</span>
                                <div class="threshold-slider">
                                    <input type="text" class="${data.fclass}_threshold-range-slider" name="${data.fclass}_threshold_range" value="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    );
  });
}

// this should be where the data come from
// const grid_analysis_item = ['U20', 'U25', 'U30', 'U35'];

const min = 0;
const max = 100;
const initial_value = 5;
const defaultOptions = { width: '50px', height: '50px' };
let lock = false;

function chartData(value) {
  let cd = {
    labels: [' ', ' '],
    series: [
      {
        value: value,
        className: 'the-one',
      },
      {
        value: 100 - value,
        className: 'grey-one',
      },
    ],
  };

  return cd;
}

function createChart(selector) {
  return new Chartist.Pie(selector, chartData(initial_value), defaultOptions);
}

let chart = {};
let updatedDataChart = {};

const min_threshold = 20000;
const max_threshold = 50000;
const from_threshold = 20000;
const to_threshold = 50000;
const marks = [40000];

function convertToPercent(num) {
  return ((num - min_threshold) / (max_threshold - min_threshold)) * 100;
}

function addMarks($slider) {
  let html = '';
  let left = 0;
  let i;

  for (i = 0; i < marks.length; i++) {
    // console.log(marks[i]);
    left = convertToPercent(marks[i]);
    html += `<span class="threshold__mark" style="left:${left}%"></span>`;
  }

  $slider.append(html);
}

// loop the data

function loopData(data) {
  data.forEach((item, index) => {
    // create pie chart for each data
    chart[index] = createChart(`.${item.fclass}_chart`);
    // console.log(chart);

    // create a function where take updated data chart value from slider and text input
    function updateChart(value) {
      let updatedData = {};
      updatedDataChart[index] = value;

      updatedData = chartData(updatedDataChart[index]);

      chart[index].update(updatedData);
    }
    // create weight range slider for each content
    $(`.${item.fclass}_weight-range-slider`).ionRangeSlider({
      skin: 'round',
      hide_min_max: true,
      hide_from_to: true,
      min: min,
      max: max,
      from: initial_value,
      onStart: function (data) {
        $(`#${item.fclass}_amount`).prop('value', data.from);
      },
      onChange: function (data) {
        $(`#${item.fclass}_amount`).prop('value', data.from);
      },
      onFinish: function (data) {
        updateChart(data.from);
      },
    });

    $(`#${item.fclass}_amount`).on('change input', function () {
      const val = $(this).prop('value');

      // validate
      if (val < min) {
        val = min;
      } else if (val > max) {
        val = max;
      }

      $(`.${item.fclass}_weight-range-slider`).data('ionRangeSlider').update({
        from: val,
      });

      updateChart(val);
    });

    // show more
    $(`#${item.fclass}_show`).on('click', function () {
      $(`#${item.fclass}_displayed`).slideToggle();
    });

    // this is where locked happen
    // sebelumnya aku minta maaf ke developer selanjutnya jika ini sulit dibaca, hidup memang sulit
    $(`#${item.fclass}_locked`).on('click', function () {
      $(`#${item.fclass}_locked`).toggleClass('bi-lock bi-unlock');
      $(`#${item.fclass}_locked`).attr('data-lock', !lock);
      $(`#${item.fclass}_box`).attr('data-lock', !lock);

      const er = $(`#${item.fclass}_checkbox`).prop('disabled');

      $(`#${item.fclass}_checkbox`).prop('disabled', !er);

      const re = $(`#${item.fclass}_amount`).prop('readonly');

      $(`#${item.fclass}_amount`).prop('readonly', !re);

      if (
        $(`.${item.fclass}_weight-range-slider`).data('ionRangeSlider').options
          .block === true
      ) {
        $(`.${item.fclass}_weight-range-slider`).data('ionRangeSlider').update({
          block: false,
        });
      } else {
        $(`.${item.fclass}_weight-range-slider`).data('ionRangeSlider').update({
          block: true,
        });
      }

      lock = !lock;
    });

    $(`#${item.fclass}_weight-close`).on('click', function () {
      $(`#${item.fclass}_box`).hide();
    });

    // create threshold range slider for each item
    $(`.${item.fclass}_threshold-range-slider`).ionRangeSlider({
      skin: 'round',
      type: 'double',
      min: min_threshold,
      max: max_threshold,
      from: from_threshold,
      to: to_threshold,
      prettify_enabled: true,
      prettify_separator: ',',
      onStart: function (data) {
        addMarks(data.slider);
      },
    });
  });

  // reset weight
  $('#reset_weight').on('click', function () {
    data.forEach((item, index) => {
      $(`#${item.fclass}_box`).show();

      if (!$(`#${item.fclass}_checkbox`).prop('checked')) {
        $(`#${item.fclass}_checkbox`).prop('checked', true);
      }
      // reset weight slider
      $(`.${item.fclass}_weight-range-slider`).data('ionRangeSlider').reset();

      //  reset input
      $(`#${item.fclass}_amount`).prop('value', initial_value);

      // reset pie chart
      let resetData = {};
      updatedDataChart[index] = initial_value;

      resetData = chartData(updatedDataChart[index]);

      chart[index].update(resetData);
    });
  });
}

getKriteria();
