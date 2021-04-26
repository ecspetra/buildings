window.onload = () => {
  $(document).ready(function () {
    const position = [48.8974243, 2.1843009];
    var mymap = L.map("map").setView(position, 13);

    var token =
      "pk.eyJ1IjoiZWNzcGV0cmEiLCJhIjoiY2tuajUxdGdhM2ZlczJubXE4N3VsbXAzMiJ9.63uR5z23i3OFgyKpzxEJmA";

    var customMarker = L.icon({
      iconUrl: "leaflet/images/marker-icon.svg",

      iconSize: [36, 36], // size of the icon
      iconAnchor: [14, 20], // point of the icon which will correspond to marker's location
    });

    var marker = L.marker(position, { icon: customMarker }).addTo(mymap);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/light-v10",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZWNzcGV0cmEiLCJhIjoiY2tuajUxdGdhM2ZlczJubXE4N3VsbXAzMiJ9.63uR5z23i3OFgyKpzxEJmA",
      }
    ).addTo(mymap);

    var circle = L.circle(position, {
      color: "none",
      fillColor: "#2454e0",
      fillOpacity: 0.2,
      radius: 500,
    }).addTo(mymap);

    mymap.scrollWheelZoom.disable();
  });
};
