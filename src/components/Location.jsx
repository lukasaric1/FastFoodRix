import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"; // Leaflet CSS styles
import L from 'leaflet';
import marker from '../assets/marker.png'; 


const markerIcon = L.icon({
  iconUrl: marker,
  iconSize: [85, 85], // Default size of the icon
  iconAnchor: [12, 41], // Anchor point of the icon (coordinates relative to the icon size)
  popupAnchor: [1, -34], // Point where the popup opens relative to the icon anchor
  shadowSize: [41, 41] 
});



const Location = () => {
  
  const fastfood_position = [42.975749, 17.181979];
 



  return (
    <div style={{ width: '100vw', height: '850px' , margin:'0', padding: '0'  }}>
      <MapContainer
        key={fastfood_position.toString()} // Unique key to force re-render if needed
        center={fastfood_position} // Center map on the coordinates
        zoom={30} // Initial zoom level
        scrollWheelZoom={false} // Disable scroll wheel zoom
        style={{ width: '100vm', height: '100%'  }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tile URL
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={fastfood_position} icon={markerIcon}>
          <Popup>
            <b>Fast Food Rix</b>
            <br />
            Fiskovićeva ul.12, 20250 Orebić, 42.975749° N, 17.181979° E
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;