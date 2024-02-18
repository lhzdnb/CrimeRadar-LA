import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Map from "./Map";
import MyDrawer from "./Drawer";
import { useSelector } from "react-redux";
function Home(props) {
  const navigate = useNavigate();
  const [crimeData, setCrimeData] = useState(null);
  const remember = useSelector((state) => state.remember);
  function getCrimeData(data) {
    setCrimeData(data);
  }

  const token = remember
    ? localStorage.getItem("token")
    : sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.log("navigate to login page");
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
