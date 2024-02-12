import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Spin } from "antd";
import fetchLocation from "../../utilities/getLocation";
import { GOOGLE_API_KEY } from "../../utilities/apiURL";
import { mapContainerStyle, mapOptions } from "../../config/mapConfig";
import m1 from "../../cluster-image/m1.png";
import m2 from "../../cluster-image/m2.png";
import m3 from "../../cluster-image/m3.png";
import m4 from "../../cluster-image/m4.png";
import m5 from "../../cluster-image/m5.png";

import "./index.css";

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

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  // 您可以根据需要调整这些选项
  const clustererOptions = {
    gridSize: 40,
    maxZoom: 24,
    minimumClusterSize: 2,
    styles: [
      {
        url: m1,
        height: 53,
        lineHeight: 53,
        width: 53,
      },
      {
        url: m2,
        height: 56,
        lineHeight: 56,
        width: 56,
      },
      {
        url: m3,
        height: 66,
        lineHeight: 66,
        width: 66,
      },
      {
        url: m4,
        height: 78,
        lineHeight: 78,
        width: 78,
      },
      {
        url: m5,
        height: 90,
        lineHeight: 90,
        width: 90,
      },
    ],
  };

  function showCrimeDetail(index) {}

  console.log(crimeData);

  function renderMap() {
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={userLocation}
        zoom={16}
        options={mapOptions}
      >
        <Marker
          position={userLocation}
          animation={window.google.maps.Animation.DROP}
        />
        {crimeData && (
          <MarkerClusterer options={clustererOptions}>
            {(clusterer) =>
              crimeData.map((crime, index) => (
                <Marker
                  animation={window.google.maps.Animation.DROP}
                  position={{ lat: Number(crime.lat), lng: Number(crime.lon) }}
                  key={index}
                  clusterer={clusterer}
                  icon={{
                    url: "https://static.thenounproject.com/png/3192412-200.png",
                    scaledSize: new window.google.maps.Size(32, 32), // 自定义图标大小
                  }}
                ></Marker>
              ))
            }
          </MarkerClusterer>
        )}
      </GoogleMap>
    );
  }

  return isLoaded ? (
    renderMap()
  ) : (
    <Spin tip={"加载地图中..."}>
      <div className="content"></div>
    </Spin>
  );
}

export default Map;
