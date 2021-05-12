import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibmVpbGpvc2VwaCIsImEiOiJja2Vzb2F4cmoxbzFyMnJwbmVyNmRnNDB6In0.jxxscSeTyrVfxCQnWZTYLw';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();
  const [lng] = useState(-73.7508592);
  const [lat] = useState(40.81518);
  const [zoom] = useState(9);
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
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


