import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../../utilities/apiURL";
import fetchLocation from "../../utilities/getLocation";
import { Spin } from "antd";

import "./index.css";
import { mapContainerStyle, mapOptions } from "../../config/mapConfig";

function Map({ crimeData }) {
  const [userLocation, setUserLocation] = useState({
    lat: 34.026494989680174,
    lng: -118.29970242365032,
  });

  useEffect(() => {
    const fetchUserLocation = async () => {
      const location = await fetchLocation();
      setUserLocation(location);
    };
    fetchUserLocation();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={userLocation}
      zoom={16}
      options={mapOptions}
    ></GoogleMap>
  ) : (
    <Spin tip={"加载地图中..."}>
      <div className="content"></div>
    </Spin>
  );
}

export default Map;
