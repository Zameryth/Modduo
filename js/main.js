var bg="000000", date="55FF00", time="FFFFFF";

(function() {
  loadOptions();
  submitHandler();
})();

function submitHandler() {
  var $submitButton = $('#submitButton');

  $submitButton.on('click', function() {
    console.log('Submit');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
  });
}

function loadOptions() {
  var Celsius = document.getElementById('Cel');
  var Fahrenheit = document.getElementById('Fah')
  var Europe = document.getElementById('EUF')
  var UnitedStates = document.getElementById('USF')
  var Steps = document.getElementById('STE')

  if (window.localStorage.cel && window.localStorage.fah && window.localStorage.euf && window.localStorage.usf &&
    window.localStorage.ste && window.localStorage.bg && window.localStorage.date && window.localStorage.time) {
    Celsius.checked = JSON.parse(window.localStorage.cel);
    Fahrenheit.checked = JSON.parse(window.localStorage.fah);
    Europe.checked = JSON.parse(window.localStorage.euf);
    UnitedStates.checked = JSON.parse(window.localStorage.usf);
    Steps.checked = JSON.parse(window.localStorage.ste);
    bg = window.localStorage.bg;
    date = window.localStorage.date;
    time = window.localStorage.time;
  }
}

function one() {
  bg = "000000";
  date = "00FFFF";
  time = "FFFFFF";
}

function two() {
  bg = "000000";
  date = "55FF00";
  time = "FFFFFF";
}

function three() {
  bg = "000000";
  date = "FF5555";
  time = "FFFFFF";
}

function four() {
  bg = "550000";
  date = "FFAA00";
  time = "FFFFFF";
}

function five() {
  bg = "AA0000";
  date = "FFAA00";
  time = "FFFFFF";
}

function six() {
  bg = "AA0055";
  date = "FFAA00";
  time = "FFFFFF";
}

function seven() {
  bg = "0000AA";
  date = "00FFFF";
  time = "FFFFFF";
}

function eight() {
  bg = "005555";
  date = "00FFFF";
  time = "FFFFFF";
}

function nine() {
  bg = "00AAAA";
  date = "000000";
  time = "FFFFFF";
}

function twoPTR() {
  bg = "550000";
  date = "00FFFF";
  time = "FFFFFF";
}

function fourPTR() {
  bg = "AA00AA";
  date = "00FFFF";
  time = "FFFFFF";
}

function fivePTR() {
  bg = "5500AA";
  date = "55FF00";
  time = "FFFFFF";
}


function getAndStoreConfigData() {
  var $temperature_unit_radio_c = $('#Cel');
  var $temperature_unit_radio_f = $('#Fah');

  var $temp = document.querySelector('input[name="radio-1"]:checked').value;
  var $format = document.querySelector('input[name="radio-2"]:checked').value;

  var Celsius = document.getElementById('Cel');
  var Fahrenheit = document.getElementById('Fah')
  var Europe = document.getElementById('EUF')
  var UnitedStates = document.getElementById('USF')
  var Steps = document.getElementById('STE')

  var options = {
    temperatureUnitC: $temperature_unit_radio_c[0].checked,
    temperatureUnitF: $temperature_unit_radio_f[0].checked,
    bg: bg,
    date: date,
    time: time,
    format: $format,
  };

  window.localStorage.cel = Celsius.checked;
  window.localStorage.fah = Fahrenheit.checked;
  window.localStorage.euf = Europe.checked;
  window.localStorage.usf = UnitedStates.checked;
  window.localStorage.ste = Steps.checked;
  window.localStorage.bg = bg;
  window.localStorage.date = date;
  window.localStorage.time = time;

  console.log('Got options: ' + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
