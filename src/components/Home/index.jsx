import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(false);

  useEffect(() => {}, []);

  return <div>Home</div>;
}

export default Home;
