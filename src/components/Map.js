import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { setRegion, setRegionInfo } from '../store/actions';

const MapWithFormInput = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const options = [
    { value: 'us', label: 'United States' },
    { value: 'in', label: 'India' },
    { value: 'uk', label: 'United Kingdom' },
  ];

  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
  };

  const position = {
    us: { lat: 37.0902, lng: -95.7129 },
    in: { lat: 20.5937, lng: 78.9629 },
    uk: { lat: 55.3781, lng: -3.4360 },
  };

  const MarkerComponent = ({ text }) => <div>{text}</div>;

  const handleLoadButtonClick = () => {
    if (selectedOption) {
      // Simulate region info data for demo purposes
      const regionInfoData = {
        currency: 'USD',
        units: {
          speed: 'kmph',
          distance: 'kilometers',
          volume: 'liters',
        },
        timezone: 'UTC+0',
      };

      // Dispatch actions to update selectedRegion and regionInfo in the store
      dispatch(setRegion(selectedOption.value));
      dispatch(setRegionInfo(regionInfoData));
    }
  };

  return (
    <div>
      <div className="form-input">
        <Select
          className="Select_a_region"
          placeholder="Select a region"
          style={{ width: 200 }}
          onChange={handleOptionChange}
          value={selectedOption}
          options={options}
        />
        <Button type="primary" onClick={handleLoadButtonClick}>
          Load
        </Button>
      </div>
      <div style={{ height: '800px', width: '1000px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }} // Replace with your Google Maps API key
          defaultCenter={position.us}
          defaultZoom={5}
          center={selectedOption ? position[selectedOption.value] : position.us}
        >
          {selectedOption && (
            <MarkerComponent
              lat={position[selectedOption.value].lat}
              lng={position[selectedOption.value].lng}
              text={selectedOption.label}
            />
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapWithFormInput;
