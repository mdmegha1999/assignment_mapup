import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { Select, Button } from "antd";
import { setRegion, setRegionInfo } from "../store/actions";

const { Option } = Select;

const FormInput = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const dispatch = useDispatch();

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadButtonClick = () => {
    if (selectedRegion) {
      const regionInfoData = {
        currency: "USD",
        units: {
          speed: "kmph",
          distance: "kilometers",
          volume: "liters",
        },
        timezone: "UTC+0",
      };
      dispatch(setRegion(selectedRegion));
      dispatch(setRegionInfo(regionInfoData));
    }
  };

  return (
    <div className="form-input">
      <Select
        className="Select_a_region"
        placeholder="Select a region"
        style={{ width: 200 }}
        onChange={handleRegionChange}
        value={selectedRegion}
      >
        <Option value="us">United States</Option>
        <Option value="in">India</Option>
        <Option value="uk">United Kingdom</Option>
      </Select>
      <Button type="primary" onClick={handleLoadButtonClick}>
        Load
      </Button>
    </div>
  );
};

export default FormInput;
