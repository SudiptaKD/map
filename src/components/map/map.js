import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from "leaflet";

const markerIcon = new L.Icon({
    iconUrl : "assets/icons/location-pin.png",
    iconSize: [40,40],
    iconAnchor : [17,46],
    popupAnchor : [0, -46]
})

const Map = () => {
   const url = "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=FrNKAOr2JOf765QWicWE"
   const attribution ='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'




  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{height: 400, width: "100%"}}>
      <TileLayer
        attribution={attribution}
        url={url}
      />
      <Marker position={[51.505, -0.09]} icon ={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map