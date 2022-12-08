var latitud = 0;
var longitud = 0;

function iniciarMap(latitud, longitud){
  $.ajax({
    type: 'GET',
    url: 'https://drfsimplecrud-test-ktne.onrender.com/api/projects/',
    dataType: 'json',
    success: function(data) {
      console.log(data)
      latitud = parseFloat(data[0].latitud);
      longitud = parseFloat(data[0].longitud);
   

        console.log(latitud)
        console.log(longitud)
        var coord = {latitud , longitud};
        console.log(coord)
        var map = new google.maps.Map(document.getElementById('map'),{
          zoom: 10,
          center: coord
        });
        var marker = new google.maps.Marker({
          position: coord,
          map: map
    });

  }
});
}

