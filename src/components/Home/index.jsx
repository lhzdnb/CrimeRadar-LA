import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Map from "./Map";
import Drawer from "./Drawer";
import MyDrawer from "./Drawer";
function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Map></Map>
      <MyDrawer />
    </div>
  );
}

export default Home;
