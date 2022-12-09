var pLatitud = 0;
var pLongitud = 0;

window.addEventListener('load', obtenerDatos);

function obtenerDatos(){

    const ruta = `https://drfsimplecrud-test-ktne.onrender.com/api/projects/`;
    
    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado))
}

function mostrarDatos(resultado){
    let cad = `<div class="container">`
    console.log(resultado)

    for (elemento of resultado) {
        
        console.log( this.elemento);
    }
        var pLatitud = parseFloat(resultado[0].latitud)
        var pLongitud = parseFloat(resultado[0].longitud)
        var pLatitud1 = parseFloat(resultado[1].latitud)
        var pLongitud1 = parseFloat(resultado[1].longitud)
        console.log( "----mostrar latitud---");
        console.log(pLatitud);
        console.log( "----mostrar longitud---");
        console.log(pLongitud);
        console.log( "-------");

        iniciarMap(pLatitud,pLongitud)

}




function iniciarMap(pLatitud,pLongitud){

  const mapOptions = {
          lat: pLatitud,
          lng: pLongitud
    }
    console.log( "----mostrar mapoptions---");
    console.log(mapOptions);
    console.log( "-------");
  // -37.83601112394677, -57.67676095687907
  var coord = {lat:-37.83601112394677 ,lng: -57.67676095687907};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: mapOptions
  });
  var marker = new google.maps.Marker({
    position: mapOptions,
    map: map
  });

  var marker1 = new google.maps.Marker({
    position: coord,
    map: map
  });
}
