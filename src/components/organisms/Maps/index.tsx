import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { Map } from './styles'; 

export function Maps({ position }: any) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDjDTFaMqkwiTR4dAL8hgsNu4dH8ZUwnEI"
  })
  
  return (
   <Map>
    {
      isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={position}
          zoom={2}
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
