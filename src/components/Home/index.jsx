import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Map from "./Map";
import Drawer from "./Drawer";
import MyDrawer from "./Drawer";
function Home(props) {
  const navigate = useNavigate();
  const [crimeData, setCrimeData] = useState(null);

  function getCrimeData(data) {
    setCrimeData(data);
  }

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Map crimeData={crimeData}></Map>
      <MyDrawer handleData={getCrimeData} />
    </div>
  );
}

export default Home;
