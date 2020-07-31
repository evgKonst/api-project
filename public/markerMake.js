const btnFindPlace = document.getElementById("btnFindPlace");
const longitude = document.getElementById("longitude");
const latitude = document.getElementById("latitude");
const zoom = document.getElementById("zoom");
const googleMap = document.getElementById("map");



btnFindPlace.addEventListener("click", function (event) {
  event.preventDefault();
  const myPosition = {
    lat: +latitude.value,
    lng: +longitude.value,
  };

  const myOptions = {
    center: myPosition,
    zoom: +zoom.value,
  };
  const myMap = new google.maps.Map(googleMap, myOptions);

  addMarker(myPosition, myMap);

});
