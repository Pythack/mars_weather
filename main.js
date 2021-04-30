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
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //alert('responseText: ' + xmlhttp.responseText);
    try {
        var data_infos = JSON.parse(xmlhttp.responseText);
        //var headers = xmlhttp.getAllResponseHeaders().toLowerCase();
        //alert(headers['X-Rate-Limit-Remaining']);
    } catch(err) {
        console.warn(err.message + " in " + xmlhttp.responseText);
        return;
    }
    callback(data_infos);
}
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
}

infos_get('https://api.nasa.gov/insight_weather/?api_key=UWtB23fwdeREqFp4mpbpd7quIuO8KXzRvaeclwRT&feedtype=json&ver=1.0', function(data) {
    var actual_sol = Object.keys(data)[0];
    document.getElementById('sol_info').innerHTML = "Sol " + actual_sol;
    var actual_sol = data[actual_sol];
    var actual_sol_AT = actual_sol['AT'];
    var max_temp = actual_sol_AT['mx'];
    var min_temp = actual_sol_AT['mn'];
    localStorage.setItem('max_temp', max_temp);
    localStorage.setItem('min_temp', min_temp);
    document.getElementById('max').innerHTML = "Maximum temperature : " + max_temp + "°C";
    document.getElementById('min').innerHTML = "Minimum temperature : " + min_temp + "°C";
    var actual_sol = Object.keys(data)[1];
    document.getElementById('sol_info-1').innerHTML = "Sol " + actual_sol;
    var actual_sol = data[actual_sol];
    var actual_sol_AT = actual_sol['AT'];
    var max_temp = actual_sol_AT['mx'];
    var min_temp = actual_sol_AT['mn'];
    document.getElementById('max-1').innerHTML = "Maximum temperature : " + max_temp + "°C";
    document.getElementById('min-1').innerHTML = "Minimum temperature : " + min_temp + "°C";
    var actual_sol = Object.keys(data)[2];
    document.getElementById('sol_info-2').innerHTML = "Sol " + actual_sol;
    var actual_sol = data[actual_sol];
    var actual_sol_AT = actual_sol['AT'];
    var max_temp = actual_sol_AT['mx'];
    var min_temp = actual_sol_AT['mn'];
    document.getElementById('max-2').innerHTML = "Maximum temperature : " + max_temp + "°C";
    document.getElementById('min-2').innerHTML = "Minimum temperature : " + min_temp + "°C";
    var actual_sol = Object.keys(data)[3];
    document.getElementById('sol_info-3').innerHTML = "Sol " + actual_sol;
    var actual_sol = data[actual_sol];
    var actual_sol_AT = actual_sol['AT'];
    var max_temp = actual_sol_AT['mx'];
    var min_temp = actual_sol_AT['mn'];
    document.getElementById('max-3').innerHTML = "Maximum temperature : " + max_temp + "°C";
    document.getElementById('min-3').innerHTML = "Minimum temperature : " + min_temp + "°C";
    var actual_sol = Object.keys(data)[4];
    document.getElementById('sol_info-4').innerHTML = "Sol " + actual_sol;
    var actual_sol = data[actual_sol];
    var actual_sol_AT = actual_sol['AT'];
    var max_temp = actual_sol_AT['mx'];
    var min_temp = actual_sol_AT['mn'];
    document.getElementById('max-4').innerHTML = "Maximum temperature : " + max_temp + "°C";
    document.getElementById('min-4').innerHTML = "Minimum temperature : " + min_temp + "°C";
  });

/*function generate_image() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
     var imageObj = new Image();
     imageObj.onload = function(){
         context.drawImage(imageObj, 10, 10);
         context.font = "40px Calibri";
         context.fillText(localStorage.max_temp, 50, 50);
     };
      imageObj.src = "images/insight.png";
}*/
