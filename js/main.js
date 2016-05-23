/*! main.js | NC-Google.Map Page */
/*! This is Google Map Javascript API v3.16 */

var map;
function initialize() {
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(46.169, -92.908),
    scaleControl: true,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    panControl: false,
    streetViewControl: true,
    streetViewControlOptions: {
    	 position: google.maps.ControlPosition.RIGHT_TOP
    }
  };

  //google.maps.visualRefresh=true;
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  // Load a GeoJSON from the same server as our demo.
  var jsonData = "data/missionData.json";
  map.data.loadGeoJson(jsonData);

  // Add some style
  map.data.setStyle(function(feature) {
    var color = feature.getProperty("color");
    if(color === "green"){
      return{
        icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
      };
    }
    if(color === "purple"){
      return{
        icon: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
      };
    }
    if(color === "blue"){
      return{
        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      };
    }
    if(color === "yellow"){
      return{
        icon: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
      };
    }
    if(color === "red"){
      return{
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      };
    }
    if(color === "orange"){
      return{
        icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
      };
    if(color === "pink"){
      return{
        icon: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
      };
    }
    }

  });
  // adds offset to info window popup
  var infoWindow = new google.maps.InfoWindow({
    pixelOffset: new google.maps.Size(0,-25),
  });

  // Set mouseover event for each feature.
  map.data.addListener("click", function(event) {
    //fam = event.feature.getProperty("City");
    //name = event.feature.getProperty("When");
    //address = event.feature.getProperty("Address");
    city = event.feature.getProperty("City");
    when = event.feature.getProperty("When");
    //web = event.feature.getProperty("Website");

    content = "<strong>" + city + "</strong>" + "</br>" + when;
    infoWindow.setContent(content);

    var anchor = new google.maps.MVCObject();
	   anchor.set("position",event.latLng);
	   infoWindow.open(map,anchor);
  });

}
// Load google map
google.maps.event.addDomListener(window, "load", initialize);

// resize google map on screen change
google.maps.event.addDomListener(window, "resize", function() {
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center);
});
