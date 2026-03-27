# 🇮🇳 GeoChron India Clock — v2.0.0

An India-focused GeoChron tool that calculates the **astronomical local solar time** for any location in India using a **pincode lookup**. Enter a date, time (IST), and pincode — and get the precise solar time for that exact geographic location.

---

## 📖 What's New in v2.0.0

This version upgrades from the cursor-hover world map (v1.0.0) to a **form-driven, pincode-based** experience tailored for India:

| Feature | v1.0.0 | v2.0.0 |
|---|---|---|
| Input method | Mouse hover on map | Pincode + Date + Time form |
| Coverage | Global | India-specific |
| Time input | Live (current UTC) | Custom IST date & time |
| Location resolution | Longitude from cursor | Lat/Lon via Nominatim geocoding |
| Area selection | — | Dropdown of postal areas per pincode |

---

## 🚀 Features

- 📮 **Pincode-based location lookup** using the [PostalPincode API](https://api.postalpincode.in/)
- 🗺️ **Interactive map** with a marker pinned to the resolved location
- 🕐 **Custom IST input** — pick any date and time, not just the current moment
- 📍 **Multi-area dropdown** — if a pincode has multiple post offices, pick the exact one
- 🔁 **Fallback geocoding** — tries area → district → pincode for maximum location accuracy
- 🧮 **Precise HH:MM:SS solar time** output
- 📱 **Responsive design** — works on mobile and desktop

---

## 🧠 How It Works

### 1. Pincode → Area
Fetches all postal areas for the entered pincode from the PostalPincode API and populates a dropdown.

### 2. Area → Coordinates
Resolves the selected area to latitude/longitude using [Nominatim (OpenStreetMap)](https://nominatim.openstreetmap.org/) with a 3-level fallback:
```
Area Name + District + State  →  District + State  →  Pincode
```

### 3. IST → UTC
Converts the entered IST time to UTC by subtracting **5 hours 30 minutes**:
```
UTC = IST - 05:30
```

### 4. UTC + Longitude → Solar Time
```
Local Solar Time = UTC + (Longitude / 15)
```
Every 15° of longitude = 1 hour. Result is normalized to the 0–24h range.

---

## 🗂️ Project Structure

```
GeoChron-India-Clock/
├── index.html   # Form UI — date, time, pincode, area dropdown, output display
├── script.js    # API calls, IST→UTC conversion, GeoChron calculation, map logic
└── style.css    # Responsive styled layout with gradient theme
```

---

## ⚙️ Getting Started

No build tools or package managers needed.

### Option 1 — Open directly in browser
```bash
git clone -b v2.0.0 https://github.com/qdotz-rps/geochron-clock.git
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
3. Click **Fetch Areas** — a dropdown populates with matching post offices
4. Select your **Area** from the dropdown
5. Click **Get GeoChron Time**
6. View the **Latitude**, **Longitude**, and **GeoChron Solar Time** — and see the pin on the map

---

## 🛠️ Built With

| Tool | Purpose |
|------|---------|
| [Leaflet.js v1.9.4](https://leafletjs.com/) | Interactive map |
| [OpenStreetMap](https://www.openstreetmap.org/) | Map tiles |
| [Nominatim API](https://nominatim.openstreetmap.org/) | Geocoding (area → lat/lon) |
| [PostalPincode API](https://api.postalpincode.in/) | Pincode → postal areas |
| Vanilla JS + HTML + CSS | Core app logic and UI |

---

## 📌 Notes

- This calculates **astronomical solar time**, not IST or any civil timezone.
- Geocoding accuracy depends on Nominatim's data for the selected area — the fallback chain improves reliability for rural or less-indexed locations.
- Nominatim has a rate limit; a 500ms delay is added between fallback attempts to respect it.
- The app is India-focused — pincodes outside India will not return valid results.
