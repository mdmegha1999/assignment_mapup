// import React, { useState } from 'react';
// import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
// import Select from 'react-select';
// import 'leaflet/dist/leaflet.css';

// const Map = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     { value: 'us', label: 'United States' },
//     { value: 'in', label: 'India' },
//     { value: 'uk', label: 'United Kingdom' },
//   ];

//   const handleOptionChange = (selected) => {
//     setSelectedOption(selected);
//   };

//   const position = {
//     us: { lat: 37.0902, lng: -95.7129 },
//     in: { lat: 20.5937, lng: 78.9629 },
//     uk: { lat: 55.3781, lng: -3.4360 },
//   };

//   return (
//     <div>
//       <Select options={options} value={selectedOption} onChange={handleOptionChange} />
//       <LeafletMap center={selectedOption ? position[selectedOption.value] : position.us} zoom={5}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {selectedOption && (
//           <Marker position={position[selectedOption.value]}>
//             <Popup>{selectedOption.label}</Popup>
//           </Marker>
//         )}
//       </LeafletMap>
//     </div>
//   );
// };

// export default Map;




// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import Select from 'react-select';
// import 'leaflet/dist/leaflet.css';

// const Map = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     { value: 'us', label: 'United States' },
//     { value: 'in', label: 'India' },
//     { value: 'uk', label: 'United Kingdom' },
//   ];

//   const handleOptionChange = (selected) => {
//     setSelectedOption(selected);
//   };

//   const position = {
//     us: { lat: 37.0902, lng: -95.7129 },
//     in: { lat: 20.5937, lng: 78.9629 },
//     uk: { lat: 55.3781, lng: -3.4360 },
//   };

//   return (
//     <div>
//       <Select options={options} value={selectedOption} onChange={handleOptionChange} />
//       <MapContainer center={selectedOption ? position[selectedOption.value] : position.us} zoom={5}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {selectedOption && (
//           <Marker position={position[selectedOption.value]}>
//             <Popup>{selectedOption.label}</Popup>
//           </Marker>
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;




// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
// import Select from 'react-select';

// const Map = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     { value: 'us', label: 'United States' },
//     { value: 'in', label: 'India' },
//     { value: 'uk', label: 'United Kingdom' },
//   ];

//   const handleOptionChange = (selected) => {
//     setSelectedOption(selected);
//   };

//   const position = {
//     us: { lat: 37.0902, lng: -95.7129 },
//     in: { lat: 20.5937, lng: 78.9629 },
//     uk: { lat: 55.3781, lng: -3.4360 },
//   };

//   const MarkerComponent = ({ text }) => <div>{text}</div>;

//   return (
//     <div style={{ height: '500px', width: '100%' }}>
//       <Select options={options} value={selectedOption} onChange={handleOptionChange} />
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: '' }} // Replace with your Google Maps API key
//         defaultCenter={position.us}
//         defaultZoom={5}
//         center={selectedOption ? position[selectedOption.value] : position.us}
//       >
//         {selectedOption && (
//           <MarkerComponent
//             lat={position[selectedOption.value].lat}
//             lng={position[selectedOption.value].lng}
//             text={selectedOption.label}
//           />
//         )}
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Map;


