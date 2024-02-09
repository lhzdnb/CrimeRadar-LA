import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";

export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
];
