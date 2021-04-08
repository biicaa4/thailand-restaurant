'use strict';

const coords = [55.6822229, 12.5832112];

var map = L.map('map').setView(coords, 13);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker(coords)
  .addTo(map)
  // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();
