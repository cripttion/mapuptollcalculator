import React from 'react'
import { MapContainer, TileLayer, useMap ,Marker,Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
import { useUserContext } from '../StateManagemet';
import RouteIndicationInMap from './RouteIndicationInMap';
function Map() {
  const{route} = useUserContext();
    const position = [51.505, -0.09]
  return (
    <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <RouteIndicationInMap />
  {route.map((item, index) => (
  <React.Fragment key={index}>
    {item.tolls.map((it, i) => (
      <Marker
        key={i}
        position={[it.lat || 0, it.lng || 0]} // Ensure lat and lng are defined
      >
        <Popup>
          {it.name}
        </Popup>
      </Marker>
    ))}
  </React.Fragment>
))}
  </MapContainer>
    </div>
  )
}
let DefaultIcon = L.icon({
  iconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzfWagNxUElQy3jCgHHYWQ3eW-POBRiOdkw&usqp=CAU",
  iconSize:[25,41],
  iconAnchor:[10,41],
  popupAnchor:[2,-40]
});
L.Marker.prototype.options.icon = DefaultIcon;
export default Map