import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Map from "./Map";
import SpinIcon from "../SpinIcon";
function Home(props) {
  const navigate = useNavigate();
  let token;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      token = localStorage.getItem("token");
    }
  }, []);

  return (
    <div>
      <Map></Map>
    </div>
  );
}

export default Home;
