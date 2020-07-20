function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    console.log('Detected device type : tablet');
    localStorage.setItem('device_type', 'tablet');
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    console.log('Detected device type : mobile');
    localStorage.setItem('device_type', 'mobile');
    return "mobile";
  }
  console.log('Detected device type : desktop');
  localStorage.setItem('device_type', 'desktop');
  return "desktop";
}

function format() {
  var device_type = getDeviceType();
  if (device_type == "mobile") {
    document.getElementById('stylesheet').setAttribute('href', 'mobile.css');
  }
  if (device_type == "tablet") {
    //document.getElementById('stylesheet').setAttribute('href', 'tablet.css');
  }
}


function infos_get(url, callback) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    try {
        var data_iss = JSON.parse(xmlhttp.responseText);
    } catch(err) {
        console.warn(err.message + " in " + xmlhttp.responseText);
        return;
    }
    callback(data_info);
}
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
}

infos_get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0', function(data, response) {
    console.log(data);

  });
