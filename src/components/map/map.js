import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { StyledPop } from './styledPopUp';

import L from "leaflet";
import MapCard from './card';


const data = {
  "image" : "/static/images/cards/contemplative-reptile.jpg"
}

const markerIcon = new L.Icon({
    iconUrl : "assets/icons/circle.png",
    iconSize: [15,15],
    iconAnchor : [17,46],
    popupAnchor : [0, -46]
})


const Map = () => {
   const url = "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=FrNKAOr2JOf765QWicWE"
   const attribution ='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'




  return (
    <MapContainer center={[37.500000, -100.000000]} zoom={4} scrollWheelZoom={true} style={{height: 600, width: "100%"}}>
      <TileLayer
        attribution={attribution}
        url={url}
      />
      <Marker position={[37.500000, -100.000000]} icon ={markerIcon}>
        <StyledPop >
          <MapCard data={data} />
        </StyledPop>
      </Marker>
    </MapContainer>
  )
}

export default Map