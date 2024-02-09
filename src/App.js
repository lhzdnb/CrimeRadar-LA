import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./utilities/router";

function App() {
  const route = useRoutes(routes);

  const [shouldHomeShow, setShouldHomeShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setShouldHomeShow(true);
    } else {
      setShouldHomeShow(false);
    }
  }, []);

  return <div className="App">{route}</div>;
}

export default App;
