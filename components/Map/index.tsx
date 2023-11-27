// 'use client';

// import React, { useEffect } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';

// const GoogleMap = () => {
//   const mapRef = React.useRef(null);

//   useEffect(() => {
//     const initMap = async () => {
//       const loader = new Loader({
//         apiKey: 'AIzaSyCpd9OoXpSzMi0DoysPhXwPZNcyUYxVcMY',
//         version: 'weekly',
//       });

//       const { Map } = await loader.importLibrary('maps');

//       const position = { lat: 19.020145856138136, lng: -98.24006775697993 };

//       const mapOptions: google.maps.MapOptions = {
//         center: position,
//         zoom: 17,
//       };

//       new Map(mapRef.current, mapOptions);
//     };
//     initMap();
//   }, []);

//   return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
// };

// export default GoogleMap;
