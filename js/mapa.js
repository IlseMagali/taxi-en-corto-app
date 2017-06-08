function cargarPagina(){
  var verificarCoords = function (e) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(obtenerCoordenadas);
    } else {
      console.log("Actualice su navegador");
    }
  };
  verificarCoords();
}

function obtenerCoordenadas(position) {
  var coordenadas = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	};
	initMap(coordenadas);
}

function initMap(coordenadas) {

  var map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 18,
    center: coordenadas
  });

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
}
// function hola() {
//   alert("hola");
// }
$(document).ready(cargarPagina);
