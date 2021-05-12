import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibmVpbGpvc2VwaCIsImEiOiJja2Vzb2F4cmoxbzFyMnJwbmVyNmRnNDB6In0.jxxscSeTyrVfxCQnWZTYLw';

export default function Map() {
  const mapContainer = useRef<HTMLInputElement | null>(null);
  const map = useRef<mapboxgl.Map>(null);
  const [lng, setLng] = useState(-73.7508592);
  const [lat, setLat] = useState(40.81518);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom
    });
  });
  return (
    <div>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
}


