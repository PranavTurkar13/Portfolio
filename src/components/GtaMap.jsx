import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Fix broken default marker icons in Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

// ✅ Map dimensions matching your actual image
const MAP_WIDTH  = 12340;
const MAP_HEIGHT = 12200;
const WORLD_MIN  = -16000;
const WORLD_MAX  =  16000;
const WORLD_SIZE = WORLD_MAX - WORLD_MIN; // 32000

const transformCoords = (x, y) => {
  const mapX = ((x - WORLD_MIN) / WORLD_SIZE) * MAP_WIDTH;
  const mapY = ((WORLD_MAX - y) / WORLD_SIZE) * MAP_HEIGHT;
  return [mapY, mapX];
};

// ✅ Correct bounds: [[south, west], [north, east]]
//    In Simple CRS: south = low Y (0), north = high Y (MAP_HEIGHT)
const BOUNDS = [
  [0, 0],
  [MAP_HEIGHT, MAP_WIDTH],
];

// ✅ Center of the map as default
const DEFAULT_CENTER = [MAP_HEIGHT / 2, MAP_WIDTH / 2];

// ✅ Custom GTA-style yellow dot marker instead of broken default
const playerIcon = new L.DivIcon({
  className: "",
  html: `<div style="
    width: 12px; height: 12px;
    background: #f1c40f;
    border: 2px solid #000;
    border-radius: 50%;
    box-shadow: 0 0 6px #f1c40f;
  "></div>`,
  iconAnchor: [6, 6],
});

const GtaMap = ({ playerCoords }) => {
  const playerPos = playerCoords
    ? transformCoords(playerCoords.x, playerCoords.y)
    : DEFAULT_CENTER;

  return (
    <MapContainer
      center={playerPos}
      zoom={1}
      minZoom={0}
      maxZoom={5}
      scrollWheelZoom={false}   // ✅ won't hijack page scroll
      maxBounds={BOUNDS}         // ✅ can't pan outside map
      maxBoundsViscosity={1.0}  // ✅ hard lock to bounds
      crs={L.CRS.Simple}
      style={{ height: "100%", width: "100%" ,background:"#1a1a1a" }}
    >
      <ImageOverlay url="/assets/gta5_map.jpg" bounds={BOUNDS} />

      {/* ✅ Only render marker if coords are actually provided */}
      {playerCoords && (
        <Marker position={playerPos} icon={playerIcon}>
          <Popup>
            <span style={{ fontFamily: "monospace", fontSize: "12px" }}>
              x: {playerCoords.x} | y: {playerCoords.y}
            </span>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default GtaMap;