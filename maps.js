function myMap() {
var mapProp= {
    center:new google.maps.LatLng(33.657545, -117.766842),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position: {lat:33.657545, lng:-117.766842}, map: map});
}
