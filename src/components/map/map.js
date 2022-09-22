import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { StyledPop } from './styledPopUp';

import L from "leaflet";
import locations from "../data/locations.json";
import MapCard from './card';


const markerIcon = new L.Icon({
    iconUrl : "assets/icons/circle.png",
    iconSize: [15,15],
    iconAnchor : [7,20],
    popupAnchor : [0, -36]
})


const Map = () => {
   const url = "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=FrNKAOr2JOf765QWicWE"
   const attribution ='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'


  return (
    <MapContainer center={[37.500000, -100.000000]} zoom={4} scrollWheelZoom={true} style={{height: "100%", width: "100%"}}>
      <TileLayer
        attribution={attribution}
        url={url}
      />
      {locations.map((location, idx)=> 
          <Marker position={[location.lat, location.lng]} key={idx} icon ={markerIcon}>
            <StyledPop >
              <MapCard data={location} />
            </StyledPop>
        </Marker>
      )}
      
    </MapContainer>
  )
}

export default Map