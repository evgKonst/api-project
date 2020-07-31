function initMap() {
  const myPosition = {
    lat: 59.943684,
    lng: 30.360165
  }

  const options = {
    center: myPosition,
    zoom: 15
  }

  const myMap = new google.maps.Map(document.getElementById("map"), options);

  google.maps.event.addListener(myMap, "click", function (event) {
    addMarker(event.latLng, myMap);
  });

  const myMarker = new google.maps.Marker({
    position: myPosition,
    map: myMap,
    draggable: true,
    animation: google.maps.Animation.DROP,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    title: "Click me to know about this marker",
  });


  const myInfo = new google.maps.InfoWindow({
    content: "<img src='/images/elbrusIcon.png' width='90' height='90'><p>Elbrus Bootcamp — это первая и самая крупная в России школа программирования в формате буткемп.</p>"
  })

  myMarker.addListener("click", function () {
    myInfo.open(myMap, myMarker)
  })


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
  })




}


const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function addMarker(location, map) {
  const marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: "Click me to know about this marker",
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  });
}



const btnFindPlace = document.getElementById("btnFindPlace");
const longitude = document.getElementById("longitude");
const latitude = document.getElementById("latitude");
const zoom = document.getElementById("zoom");
const googleMap = document.getElementById("map");
