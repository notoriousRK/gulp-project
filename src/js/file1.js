function initMap(){
  // Map options
  var options = {
    zoom:8,
    center:{lat:28.5072252,lng:77.08338309999999}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);


  // Add marker
  var marker = new google.maps.Marker({
    position:{lat:28.5072252,lng:77.08338309999999},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Kisan Network</h1><br><p><strong>Address:</strong> 230, Shankar Chowk Rd, Udyog Vihar Phase 1, Sector 20, Gurugram, Haryana 122016</p>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
  

  

  
    
  
}
