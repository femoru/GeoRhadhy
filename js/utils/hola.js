
$(document).ready(function() {

    var geo = navigator.geolocation;

    $('#out').html('<p>Esperando Confirmaci&oacute;n...</p>');
    if (!geo) {
        $('#out').html("<p>Tu equipo no soporta geolocalizaci&ocute;n</p>");
        return;
    } else {
        $('#out').html('<p>Localizando...</p>');
        setTimeout(function() {
            watch = geo.watchPosition(success, error, geo_options);
        }, 500);

    }
});

var watch, geo_options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
};
function success(position) {
    var altitude = position.coords.altitude;
    var heading = position.coords.heading;
    var speed = position.coords.speed;
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $('#out').html('<p>Latitude ' + latitude + '&deg; '
            + '<br>Longitud ' + longitude + '&deg;'
            + '<br>Altitud ' + altitude + '&deg;'
            + '<br>heading ' + heading + '&deg;'
            + '<br>speed ' + longitude + '&deg;'
            + '<br>Watch is ' + watch + '</p>');
}

function error(error) {
    $('#out').html('<p>No es posible determinar tu ubicacion'
            + '<br>ERROR(' + error.code + '):' + error.message
            + '<br>E' + JSON.stringify(error) + '</p>');
}

function notificar() {
    navigator.mozNotification.createNotification('Titulo', 'Comprobando Notificaciones').show();
}