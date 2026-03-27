# 🌍 GeoChron Cursor Clock

A lightweight, interactive web app that displays the **astronomical local solar time** for any location on Earth — just by hovering your cursor over a world map.

---

## 📖 What It Does

Move your mouse across the interactive map and instantly see the **GeoChron (solar) time** calculated from the geographic longitude at your cursor position. Unlike standard timezone clocks that snap to political boundaries, this tool uses pure astronomical logic: **every degree of longitude = 4 minutes of time**.

---

## 🚀 Features

- 🗺️ **Interactive world map** powered by [Leaflet.js](https://leafletjs.com/) and OpenStreetMap tiles
- ⏱️ **Real-time solar time** calculated live as you move your cursor
- 🌐 **Longitude-based calculation** — no timezone databases, no API calls
- 📡 **Zero dependencies to install** — runs entirely in the browser
- 🧮 **Live HH:MM:SS display** updated on every mouse movement

---

## 🧠 How It Works

The app calculates **Astronomical GeoChron Time** using the formula:

```
Local Solar Time = UTC Time + (Longitude / 15)
```

Where:
- `UTC Time` is the current time in hours (with minutes and seconds as decimals)
- `Longitude / 15` converts degrees to hours (since 360° / 24h = 15°/hour)
- The result is normalized to the 0–24 hour range

This reflects how time _actually_ works astronomically — the sun is at its peak (noon) when your longitude's solar time reads 12:00:00.

---

## 🗂️ Project Structure

```
GeoChron-Cursor-Time/
├── index.html   # App shell — map container, info labels, CDN links
├── script.js    # Map setup, mousemove handler, GeoChron time logic
└── style.css    # Basic layout and map sizing
```

---

## ⚙️ Getting Started

No build tools or package managers needed.

### Option 1 — Open directly in browser
```bash
git clone -b v1.0.0 https://github.com/qdotz-rps/geochron-clock.git
cd geochron-clock
# Open index.html in your browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Serve locally (recommended to avoid CORS issues)
```bash
# Using Python
python -m http.server 8080

# Or using Node.js
npx serve .
```
Then visit `http://localhost:8080` in your browser.

---

## 🔭 Use Cases

- Understanding the difference between **solar time** and **standard timezones**
- Educational tool for **geography and astronomy** classes
- Visualizing how **longitude maps to time** across the globe
- Fun exploration of what time it "really is" at any point on Earth

---

## 🛠️ Built With

| Tool | Purpose |
|------|---------|
| [Leaflet.js v1.9.4](https://leafletjs.com/) | Interactive map rendering |
| [OpenStreetMap](https://www.openstreetmap.org/) | Map tile data |
| Vanilla JavaScript | GeoChron time logic |
| HTML + CSS | UI layout |

---

## 📌 Notes

- This calculates **astronomical solar time**, not civil/political timezone time.
- Solar time can differ from your wall clock by up to ±30 minutes even within a single timezone.
- The app does **not** use GPS or geolocation — time is based purely on cursor position on the map.
