import React from 'react';
import '../App.css'

import { useSelector } from 'react-redux';

const RegionInfoCard = () => {
  const regionInfo = useSelector((state) => state.regionInfo);

  return (
    <div className="region-info-card">
      {regionInfo ? (
        <>
          <h2>Region Information</h2>
          <p>Currency: {regionInfo.currency}</p>
          <p>Units of Speed: {regionInfo.units.speed}</p>
          <p>Units of Distance: {regionInfo.units.distance}</p>
          <p>Units of Volume: {regionInfo.units.volume}</p>
          <p>Timezone: {regionInfo.timezone}</p>
        </>
      ) : (
        <p>Please select a region and click 'Load'.</p>
      )}
    </div>
  );
};

export default RegionInfoCard;
