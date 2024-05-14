import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import CreateEmployed from "../pages/createEmployed/CreateEmployed";
import LoginLayout from "../layouts/LoginLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "create_employed",
        element: <CreateEmployed />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

export default router;
