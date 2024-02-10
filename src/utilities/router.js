import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import RegisterPage from "../components/Register";

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
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
];
