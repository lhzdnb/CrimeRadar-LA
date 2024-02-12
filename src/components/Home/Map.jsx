import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

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

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  function renderMap() {
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={userLocation}
        zoom={16}
        options={mapOptions}
      >
        {/*<MarkerClusterer>*/}
        {/*  {(cluster) =>*/}
        {/*    crimeData.map((crime, index) => (*/}
        {/*      <Marker*/}
        {/*        key={index}*/}
        {/*        position={{ lat: crime.lat, lng: crime.lng }}*/}
        {/*        clusterer={cluster}*/}
        {/*      ></Marker>*/}
        {/*    ))*/}
        {/*  }*/}
        {/*</MarkerClusterer>*/}
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
