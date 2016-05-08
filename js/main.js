var bg, min, hour, sec;

function one() {
  bg = "000000";
  min = "FFFFFF";
  hour = "FF00AA";
  sec = "00AAFF";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function two() {
  bg = "000000";
  min = "FFFFFF";
  hour = "00AAFF";
  sec = "FF5500";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function three() {
  bg = "000000";
  min = "FFFFFF";
  hour = "FFAA00";
  sec = "FF0055";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function four() {
  bg = "550000";
  min = "FFFFFF";
  hour = "FFAA00";
  sec = "00FFFF";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function five() {
  bg = "AA0000";
  min = "FFAA00";
  hour = "00FFFF";
  sec = "FFFFFF";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function six() {
  bg = "FF5500";
  min = "00FFFF";
  hour = "FFFFFF";
  sec = "FFAA00";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function seven() {
  bg = "AA00AA";
  min = "FFFFFF";
  hour = "FF5555";
  sec = "00FFFF";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function eight() {
  bg = "555500";
  min = "FFFFFF";
  hour = "AAAA55";
  sec = "FFAA00";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function nine() {
  bg = "00AAFF";
  min = "FFFFFF";
  hour = "FF0055";
  sec = "000000";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function getAndStoreConfigData() {
  var options = {
    bg: bg,
    min: min,
    hour: hour,
    sec: sec,
  };

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
