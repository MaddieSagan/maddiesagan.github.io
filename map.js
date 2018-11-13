var map = L.map('mapid').setView([39.82, -98.57], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFkaXNvbnMiLCJhIjoiY2puMjJlZ3g4MDI0ODNzbm8wMDdvbjA5ZSJ9.wRU71gNr2djFq79nK8MzSw'
}).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
        iconAnchor:   [16, 32],
        popupAnchor: [0, -32]
    }
});

var greenIcon = new LeafIcon({iconUrl: 'map-marker-3.png'}),
    redIcon = new LeafIcon({iconUrl: 'map-marker-2.png'}),
    blueIcon = new LeafIcon({iconUrl: 'map-marker.png'});

function addMarker(name, coords, tag, icon) {
  var marker = L.marker(coords, {icon: icon}).addTo(map).on('click', function () {
    mark(tag);
  });
  marker.bindPopup(name)
}

function mark(tag) {
  var elements = document.getElementsByClassName('marker-row');

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.background = 'white'
  }

  var selected = document.getElementsByClassName(tag);

  for (var i = 0; i < selected.length; i++) {
    selected[i].style.background = '#CEE5CF';
  }
}

addMarker("Columbus",[39.96, -83], 'clb', blueIcon);
addMarker("Pittsburgh", [40.44, -79.99], 'pit', blueIcon);
addMarker("Minneapolis", [44.95, -93.09], 'min2', blueIcon)

addMarker("Minneapolis", [44.98, -93.27], 'min', greenIcon);
addMarker("San Francisco", [37.77, -122.42], 'sfr', greenIcon);
addMarker("Austin", [30.27, -97.74], 'aus', greenIcon);

addMarker("Dallas", [32.78, -96.80], 'dal', redIcon);
addMarker("Provo", [40.23, -111.66], 'pro', redIcon);
addMarker("Pasadena", [34.15, -118.14], 'pas', redIcon);

function changeColor() {
  this.style.opacity = 1;
}
var cols = document.querySelectorAll('td')
for (col of cols) {
  col.addEventListener('click', changeColor);
}
