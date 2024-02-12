import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./utilities/router";

function App() {
  const route = useRoutes(routes);

  return <div className="App">{route}</div>;
}

export default App;
