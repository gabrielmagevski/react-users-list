import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { Map } from './styles'; 

export function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDjDTFaMqkwiTR4dAL8hgsNu4dH8ZUwnEI"
  })
  
  const position = {
    lat: -27.590824,
    lng: -48.551262
  }

  return (
   <Map>
    {
      isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={position}
          zoom={15}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <div>
          <h1>Maps cant connection link a site. Please send to e-mail to squad.</h1>
        </div>
      )
    }
   </Map>
  )
}
