// Create map
const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Format time
function formatTime(decimalHours) {
  const h = Math.floor(decimalHours);
  const m = Math.floor((decimalHours - h) * 60);
  const s = Math.floor((((decimalHours - h) * 60) - m) * 60);

  return `${String(h).padStart(2, "0")}:` +
         `${String(m).padStart(2, "0")}:` +
         `${String(s).padStart(2, "0")}`;
}

// Mouse move → GeoChron time
map.on("mousemove", (e) => {
  const longitude = e.latlng.lng;

  // Current UTC
  const now = new Date();
  const utcHours =
    now.getUTCHours() +
    now.getUTCMinutes() / 60 +
    now.getUTCSeconds() / 3600;

  // GeoChron calculation
  let geoTime = utcHours + (longitude / 15);

  // Normalize 0–24
  if (geoTime < 0) geoTime += 24;
  if (geoTime >= 24) geoTime -= 24;

  document.getElementById("place").innerText =
    `Longitude: ${longitude.toFixed(2)}°`;

  document.getElementById("timezone").innerText =
    "Astronomical GeoChron Time";

  document.getElementById("time").innerText =
    formatTime(geoTime);
});
