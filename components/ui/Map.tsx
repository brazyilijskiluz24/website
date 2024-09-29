'use client'

import { icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

interface MarkerProps {
  position: [number, number]
  id?: string
}

const marker = icon({
  iconUrl: '/marker.png',
  iconSize: [25, 40]
})

const Map = ({ position, id }: MarkerProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div className="w-[15vw] h-[15vw] rounded-xl border p-0.5 bg-neutral-50">
      {!isLoaded && (
        <div className={'animate-pulse bg-neutral-500 w-[20vw] h-[20vw]'}></div>
      )}
      <MapContainer
        id={id}
        position={position}
        whenReady={() => setIsLoaded(true)}
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={false}
        className={'w-full h-full rounded-xl'}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={marker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
