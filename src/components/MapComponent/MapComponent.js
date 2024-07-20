// components/MapComponent.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Optional: You can define a custom icon if needed
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png', // Replace with your custom icon URL
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapComponent = ({ center, zoom }) => {
  return (
    <div className="w-full h-80 md:h-96">
      <MapContainer center={center} zoom={zoom} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center} icon={customIcon}>
          <Popup>
            Highlighted Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
