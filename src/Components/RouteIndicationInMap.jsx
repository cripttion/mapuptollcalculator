import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet';
import L from 'leaflet'
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { useUserContext } from '../StateManagemet';
 const RouteIndicationInMap = () => {
    const {
      
        sourcelongitude,destinationLongitude
      } = useUserContext();
    const map = useMap();
    useEffect(()=>{
        L.Routing.control({
            waypoints:[L.latLng(sourcelongitude.lat,sourcelongitude.lng),L.latLng(destinationLongitude.lat,destinationLongitude.lng)],
        }).addTo(map);
    })
    return null;

}

export default RouteIndicationInMap