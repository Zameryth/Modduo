var bg, min, hour, sec;

function one() {
  bg = "0xFFFF00";
  min = "0x55FF00";
  hour = "0xFF0055";
  sec = "0x00AAFF";

  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
}

function two() {
  bg = "0xFFFF00";
  min = "0x55FF00";
  hour = "0xFF0055";
  sec = "0x00AAFF";

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
