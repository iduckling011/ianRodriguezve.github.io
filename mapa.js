let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 21.814336409916567, lng: -102.7693394789043 },
    zoom: 20,
  });
}

initMap();
