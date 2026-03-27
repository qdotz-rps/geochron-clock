# 🇮🇳 GeoChron India Clock — v3.0.0

A pincode-based astronomical solar time calculator for India. Enter a date, time in IST, and a 6-digit pincode to get the precise local solar time for that geographic location, pinned on an interactive map.

---

## 📖 What's New in v3.0.0

This version is a **geocoder upgrade and UI refresh** over v2.0.0 — the core GeoChron logic stays the same, but location resolution switches from Nominatim to **Photon (Komoot)** for higher coordinate precision, and the interface is redesigned with a cleaner form-grid layout.

| | v2.0.0 | v3.0.0 |
|---|---|---|
| Geocoder | Nominatim (3-level fallback) | Photon / Komoot |
| Coordinate precision | 4 decimal places | 6 decimal places |
| Geocoding fallback | Area → District → Pincode | Single query |
| Map marker | Plain pin | Pin with popup label |
| Map zoom on result | Level 7 | Level 14 (street level) |
| UI theme | Gradient purple card | Clean white + blue grid form |
| Place name display | Hidden | Shown prominently above form |
| Clear button | ✅ | ❌ Removed |

---

## 🚀 Features

- 📮 **Pincode-based location lookup** via the [PostalPincode API](https://api.postalpincode.in/)
- 📍 **Multi-area dropdown** — select from all post offices under a pincode
- 🌐 **Photon geocoding** via [Komoot](https://photon.komoot.io/) for high-precision lat/lon
- 🕐 **Custom IST date & time input** for any historical or future calculation
- 🗺️ **Interactive map** with labelled popup marker, zoomed to street level
- 🧮 **Precise HH:MM:SS solar time** with 6-decimal coordinate display
- 📍 **Place name banner** displayed prominently after calculation

---

## 🧠 How It Works

### 1. Pincode → Areas
Fetches all post offices for the entered pincode and populates a dropdown.

### 2. Area → Coordinates
Resolves the selected area name to lat/lon via **Photon (Komoot)**:
```
GET https://photon.komoot.io/api/?q={area+district+state}&limit=1
```

### 3. IST → UTC
```
UTC = IST − 05:30
```

### 4. UTC + Longitude → Solar Time
```
Local Solar Time = UTC + (Longitude / 15)
```
Result is normalised to the 0–24h range.

---

## 🗂️ Project Structure

```
GeoChron-India-Clock-v2/
├── index.html   # Form UI — date, time, pincode, area dropdown, place name banner
├── script.js    # Photon geocoding, IST→UTC conversion, GeoChron logic, map
└── style.css    # Clean grid layout with blue accent theme
```

---

## ⚙️ Getting Started

No build tools or package managers needed.

### Option 1 — Open directly in browser
```bash
git clone -b v3.0.0 https://github.com/qdotz-rps/geochron-clock.git
cd geochron-clock
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Serve locally (recommended)
```bash
python -m http.server 8080
# or
npx serve .
```
Then visit `http://localhost:8080`

---

## 🖥️ Usage

1. Enter a **Date** and **Time (IST)**
2. Enter a **6-digit Indian pincode**
3. Click **Fetch Locations** → select your **Area** from the dropdown
4. Click **Get GeoChron Time**
5. View the **place name**, **Latitude**, **Longitude**, and **GeoChron Solar Time** with the map pinned at street level

---

## 🛠️ Built With

| Tool | Purpose |
|------|---------|
| [Leaflet.js v1.9.4](https://leafletjs.com/) | Interactive map |
| [OpenStreetMap](https://www.openstreetmap.org/) | Map tiles |
| [Photon API (Komoot)](https://photon.komoot.io/) | High-precision geocoding |
| [PostalPincode API](https://api.postalpincode.in/) | Pincode → postal areas |
| Vanilla JS + HTML + CSS | Core logic and UI |

---

## 📌 Notes

- Calculates **astronomical solar time**, not IST or any civil timezone.
- Photon geocoding accuracy depends on OpenStreetMap data coverage for the selected area.
- App is India-focused — pincodes outside India will not return valid results.
